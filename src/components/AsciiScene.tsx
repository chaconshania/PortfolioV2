"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function AsciiScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !mountRef.current) return;

    let alive = true;

    (async () => {
      const THREE = await import("three");
      const { AsciiEffect } = await import(
        "three/addons/effects/AsciiEffect.js"
      );

      if (!alive || !mountRef.current) return;
      const mount = mountRef.current;
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      // ── Scene ────────────────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);

      // Lights — directional key + soft fill for good ASCII contrast
      const key = new THREE.DirectionalLight(0xffffff, 3);
      key.position.set(4, 4, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xffffff, 0.8);
      fill.position.set(-3, -2, -2);
      scene.add(fill);
      scene.add(new THREE.AmbientLight(0xffffff, 0.3));

      // 5-pointed extruded star with bevel
      const starShape = new THREE.Shape();
      const outerR = 1.8;
      const innerR = 0.75;
      const pts = 5;
      for (let i = 0; i < pts * 2; i++) {
        const angle = (i * Math.PI) / pts - Math.PI / 2;
        const r = i % 2 === 0 ? outerR : innerR;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) starShape.moveTo(x, y);
        else starShape.lineTo(x, y);
      }
      starShape.closePath();

      const geo = new THREE.ExtrudeGeometry(starShape, {
        steps: 1,
        depth: 0.5,
        bevelEnabled: true,
        bevelThickness: 0.12,
        bevelSize: 0.12,
        bevelSegments: 4,
      });
      // Center the geometry on its own axis
      geo.center();

      const mat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 90,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      // ── ASCII Effect ─────────────────────────────────────────
      // Character ramp: sparse → dense maps dark → bright areas
      const effect = new AsciiEffect(renderer, " .,:;!+*?%#@", {
        invert: true,
        resolution: 0.2,
      });
      effect.setSize(w, h);

      // Override colours so background is transparent
      effect.domElement.style.color = "#333333";
      effect.domElement.style.backgroundColor = "transparent";
      effect.domElement.style.position = "absolute";
      effect.domElement.style.inset = "0";
      effect.domElement.style.fontFamily =
        '"Courier New", "Lucida Console", monospace';
      effect.domElement.style.fontWeight = "700";

      mount.appendChild(effect.domElement);

      // ── Resize ───────────────────────────────────────────────
      const ro = new ResizeObserver(() => {
        if (!mountRef.current) return;
        const nw = mountRef.current.clientWidth;
        const nh = mountRef.current.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
        effect.setSize(nw, nh);
      });
      ro.observe(mount);

      // ── Animation loop ───────────────────────────────────────
      const clock = new THREE.Clock();
      let raf: number;

      const tick = () => {
        raf = requestAnimationFrame(tick);
        const t = clock.getElapsedTime();
        mesh.rotation.y = t * 0.12;
        mesh.rotation.x = t * 0.07;
        effect.render(scene, camera);
      };

      raf = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        effect.domElement.remove();
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      alive = false;
      cleanupRef.current?.();
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="ascii-scene-mount absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0, opacity: 0.15 }}
    />
  );
}
