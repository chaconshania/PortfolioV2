"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

const KOI = `



                              ,--,--::-,,,           ,~:;;;;:
                            ,;==!!=========;;:~,   ~=!==;;==~
                            ==;=!====!!!!!======::!*!==;;;=~
                            ~*!=!==!!==!!=;=*=;;==!!!!=;;;;
                             ~:*!=;!!!!!!======!!****##*!;,
                               -!*!=!!!!!!*#*=!!;=!*#*!=!=:-
                                 :!**!!!!=!==;;;=;;;======!!=~
  ,                                    ~!*!!!!====;=;=;;;;;!!==!**!~
  ::-                                    -;!**!!===!!!==;;;=**!*####!-
  :;;~                                     ,-;**!!!=!!!===;!##*!=!*##*;
  :;:;~ ,                                    =*!====!*#*!!!!*###!=!==#$!-
  -;;;;-;                                   ,!!==;;=;!#########!===!!#!**~
   -;;;;=-                                  -!=;;;;;: -;!***###!!!===!==!*;
    -;===~                                  -=;;;;;;-    ,;!!#$#**!!!=!!=!*;
     -:==;                                   =;;;;~,      ,!==!!=!****!!!=!*;
       ~;=,                                  -==~,         -===:  -:=***!!!*#:
        -;;,                                  ,-            ,;;,     ~!#*=!!!*-
         -;=~                                                          ;*==!===
          ==;;~                                                         ~*!:;:!-
          ~==#$!~                                                        -*!=;!;
           :**=!=:~,                            ,~,                       -**===
            :!::;:~::~-,                      -~:::,                       -#*!=
             ~;:~::~:=##!;~--~~~-,          -~~~~~:-                        :#*;
              ,;=:~::;===!!**!;;;;:-,      ,~~-~~~:~                         =*=
               ,=*#=~:==;;;;=;~~;!*==;:~~-,,----~~:-                         ~*!
                 -*@#;=!!===;;::;!##*;:~~:::;;::::~,                         :*!,
                   ~*!=!**##!===;;;==--~--~~;;!#=!=~,                        =!=
                     ~;;;!$$$;::~~~~-~~~----~~=!!*#$#!:,                    ;!!;
                       -;!##*;:==:~~~;!==;;;:=!!*!!!*##;:-,,               :!=!-
                        :;!=:!:;=!!!##$@$*!**!!!=!!!!!!;::~~~,            :!=!=
                       -;::;;;;:;!*$$$@@@$****!!!!!!!!!!!!=~~~,          ~=!!!-
                        ,------:;!!*#@@@$$$#!=!!==!!!!!!!!!=~~~-        ---!*:
                                 -~:!#$@###;:::;~~=!!;:;!!!!:---~,      ,  ::
                                    -~;;;!*;;;:~~~~:~----::~---,~~
                                  ------~::;;;==;;;:::~~~~~~~~~~~-
                                  ~~~~~~~::~, ,~::;;;;===;:~~:~-,
                                 ,:~~~~~:~-                  ,
                                 -::~~~~-
                                 ,---,`;

// Swimming waypoints: x/y offset from center, scaleX flips fish left/right
const PATH = [
  { x: 0,    y: 0,   scaleX: 1  },
  { x: 170,  y: -60, scaleX: 1  },
  { x: 80,   y: 80,  scaleX: -1 },
  { x: -150, y: 20,  scaleX: -1 },
  { x: -70,  y: -80, scaleX: 1  },
  { x: 0,    y: 0,   scaleX: 1  },
];

const DURATIONS = [6, 7, 8, 7, 6];

export default function AsciiKoi() {
  const fishRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !fishRef.current) return;

    const el = fishRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    PATH.forEach((pt, i) => {
      if (i === 0) return;
      tl.to(el, {
        x: pt.x,
        y: pt.y,
        scaleX: pt.scaleX,
        duration: DURATIONS[i - 1],
        ease: "sine.inOut",
      });
    });

    return () => { tl.kill(); };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div ref={fishRef}>
        <pre
          style={{
            fontFamily: '"Courier New", monospace',
            fontWeight: 700,
            whiteSpace: "pre",
            fontSize: "clamp(6px, 1vw, 10px)",
            lineHeight: 1,
            color: "#333333",
            opacity: 0.13,
            margin: 0,
          }}
        >
          {KOI}
        </pre>
      </div>
    </div>
  );
}
