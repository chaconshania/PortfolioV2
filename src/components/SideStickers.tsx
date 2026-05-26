"use client";

import Image from "next/image";

export default function SideStickers({ side }: { side: "left" | "right" }) {
  return (
    <div className={`${side === "right" ? "col-start-3" : "col-start-1"} relative hidden xl:block`}>
      {side === "left" && (
        <>
          <div
            className="absolute"
            style={{ top: 120, left: "50%", translate: "-50%", rotate: "-8deg" }}
          >
            <Image src="/me/Bloo.svg" alt="Bloo" width={60} height={60} draggable={false} />
          </div>

          <div
            className="absolute"
            style={{ top: 240, left: "50%", translate: "-50%", rotate: "6deg" }}
          >
            <Image src="/me/cat.svg" alt="Cat" width={48} height={48} draggable={false} />
          </div>

          <div
            className="absolute bg-[#F7C325] px-3 py-1.5 text-[11px] font-semibold text-[#333] leading-snug"
            style={{
              top: 380,
              left: "50%",
              translate: "-50%",
              rotate: "-5deg",
              borderRadius: 4,
              whiteSpace: "nowrap",
            }}
          >
            product designer
            <br />& front-end dev
          </div>

          <div
            className="absolute overflow-hidden"
            style={{
              top: 520,
              left: "50%",
              translate: "-50%",
              rotate: "7deg",
              width: 44,
              height: 44,
              borderRadius: 10,
            }}
          >
            <Image
              src="/me/illustrator-logo.jpeg"
              alt="Illustrator"
              width={44}
              height={44}
              draggable={false}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Photo polaroid */}
          <div
            className="absolute bg-white p-1.5 pb-5"
            style={{ top: 640, left: "50%", translate: "-50%", rotate: "-6deg", width: 72 }}
          >
            <div className="relative overflow-hidden" style={{ width: 60, height: 72 }}>
              <Image src="/me/smile.jpeg" alt="" fill className="object-cover" draggable={false} />
            </div>
          </div>

          {/* Text sticker */}
          <div
            className="absolute bg-white px-3 py-1.5 text-[11px] font-medium text-[#444] leading-snug border border-[#e5e5e5]"
            style={{ top: 800, left: "50%", translate: "-50%", rotate: "4deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            always learning ↗
          </div>

          {/* Github */}
          <div
            className="absolute"
            style={{ top: 910, left: "50%", translate: "-50%", rotate: "-5deg" }}
          >
            <Image src="/me/github.svg" alt="GitHub" width={36} height={36} draggable={false} />
          </div>

          {/* Star doodle text */}
          <div
            className="absolute text-[#F7C325] font-bold"
            style={{ top: 1020, left: "50%", translate: "-50%", rotate: "8deg", fontSize: 28, whiteSpace: "nowrap" }}
          >
            ✦ ✦ ✦
          </div>

          {/* Polaroid - graduated */}
          <div
            className="absolute bg-white p-1.5 pb-5"
            style={{ top: 1140, left: "50%", translate: "-50%", rotate: "5deg", width: 72 }}
          >
            <div className="relative overflow-hidden" style={{ width: 60, height: 72 }}>
              <Image src="/me/graduated.jpeg" alt="" fill className="object-cover" draggable={false} />
            </div>
          </div>

          <div
            className="absolute bg-[#F7C325] px-3 py-1.5 text-[11px] font-semibold text-[#333] leading-snug"
            style={{ top: 1290, left: "50%", translate: "-50%", rotate: "-6deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            uconn &apos;25 ✦
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ top: 1400, left: "50%", translate: "-50%", rotate: "9deg", width: 44, height: 44, borderRadius: 10 }}
          >
            <Image src="/me/figma-logo.png" alt="Figma" width={44} height={44} draggable={false} className="object-cover w-full h-full" />
          </div>

          <div
            className="absolute bg-white px-3 py-1.5 text-[11px] font-medium text-[#444] leading-snug border border-[#e5e5e5]"
            style={{ top: 1510, left: "50%", translate: "-50%", rotate: "3deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            i like making things
            <br />from scratch 🛠
          </div>

          <div
            className="absolute"
            style={{ top: 1650, left: "50%", translate: "-50%", rotate: "-7deg" }}
          >
            <Image src="/me/cat.svg" alt="Cat" width={44} height={44} draggable={false} />
          </div>

          <div
            className="absolute bg-[#F7C325] px-3 py-1.5 text-[11px] font-semibold text-[#333] leading-snug"
            style={{ top: 1770, left: "50%", translate: "-50%", rotate: "5deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            designer who codes
          </div>

          <div
            className="absolute bg-white p-1.5 pb-5"
            style={{ top: 1880, left: "50%", translate: "-50%", rotate: "-8deg", width: 72 }}
          >
            <div className="relative overflow-hidden" style={{ width: 60, height: 72 }}>
              <Image src="/me/me-standing.JPG" alt="" fill className="object-cover" draggable={false} />
            </div>
          </div>

          <div
            className="absolute text-[#333] font-bold"
            style={{ top: 2030, left: "50%", translate: "-50%", rotate: "6deg", fontSize: 24, whiteSpace: "nowrap" }}
          >
            ◆ ◆ ◆
          </div>
        </>
      )}

      {side === "right" && (
        <>
          <div
            className="absolute overflow-hidden"
            style={{
              top: 120,
              left: "50%",
              translate: "-50%",
              rotate: "6deg",
              width: 80,
              height: 80,
              borderRadius: "50%",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/me/dithered-video.mp4" type="video/mp4" />
              <source src="/me/dithered-video.mov" type="video/quicktime" />
            </video>
          </div>

          <div
            className="absolute overflow-hidden"
            style={{
              top: 260,
              left: "50%",
              translate: "-50%",
              rotate: "-7deg",
              width: 44,
              height: 44,
              borderRadius: 10,
            }}
          >
            <Image
              src="/me/figma-logo.png"
              alt="Figma"
              width={44}
              height={44}
              draggable={false}
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className="absolute overflow-hidden"
            style={{
              top: 370,
              left: "50%",
              translate: "-50%",
              rotate: "5deg",
              width: 44,
              height: 44,
              borderRadius: 10,
            }}
          >
            <Image
              src="/me/claude-logo.png"
              alt="Claude"
              width={44}
              height={44}
              draggable={false}
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className="absolute bg-white px-3 py-1.5 text-[11px] font-medium text-[#444] leading-snug border border-[#e5e5e5]"
            style={{
              top: 490,
              left: "50%",
              translate: "-50%",
              rotate: "-4deg",
              borderRadius: 4,
              whiteSpace: "nowrap",
            }}
          >
            uconn dmd &apos;25
            <br />building things ✦
          </div>

          {/* Yellow sticker */}
          <div
            className="absolute bg-[#F7C325] px-3 py-1.5 text-[11px] font-semibold text-[#333] leading-snug"
            style={{ top: 640, left: "50%", translate: "-50%", rotate: "5deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            currently: building
          </div>

          {/* Photo polaroid */}
          <div
            className="absolute bg-white p-1.5 pb-5"
            style={{ top: 750, left: "50%", translate: "-50%", rotate: "6deg", width: 72 }}
          >
            <div className="relative overflow-hidden" style={{ width: 60, height: 72 }}>
              <Image src="/me/renfaire.jpeg" alt="" fill className="object-cover" draggable={false} />
            </div>
          </div>

          {/* LinkedIn */}
          <div
            className="absolute"
            style={{ top: 910, left: "50%", translate: "-50%", rotate: "-6deg" }}
          >
            <Image src="/me/linkedin.svg" alt="LinkedIn" width={36} height={36} draggable={false} />
          </div>

          {/* Instagram */}
          <div
            className="absolute"
            style={{ top: 1010, left: "50%", translate: "-50%", rotate: "7deg" }}
          >
            <Image src="/me/instagram.svg" alt="Instagram" width={36} height={36} draggable={false} />
          </div>

          {/* Text sticker */}
          <div
            className="absolute bg-white px-3 py-1.5 text-[11px] font-medium text-[#444] leading-snug border border-[#e5e5e5]"
            style={{ top: 1110, left: "50%", translate: "-50%", rotate: "-5deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            open to work ✦
          </div>

          {/* Circular video again lower */}
          <div
            className="absolute overflow-hidden"
            style={{ top: 1230, left: "50%", translate: "-50%", rotate: "-5deg", width: 68, height: 68, borderRadius: "50%" }}
          >
            <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
              <source src="/me/dithered-video.mp4" type="video/mp4" />
              <source src="/me/dithered-video.mov" type="video/quicktime" />
            </video>
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ top: 1360, left: "50%", translate: "-50%", rotate: "8deg", width: 44, height: 44, borderRadius: 10 }}
          >
            <Image src="/me/claude-logo.png" alt="Claude" width={44} height={44} draggable={false} className="object-cover w-full h-full" />
          </div>

          <div
            className="absolute bg-[#F7C325] px-3 py-1.5 text-[11px] font-semibold text-[#333] leading-snug"
            style={{ top: 1470, left: "50%", translate: "-50%", rotate: "-4deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            made with claude ✦
          </div>

          <div
            className="absolute bg-white p-1.5 pb-5"
            style={{ top: 1580, left: "50%", translate: "-50%", rotate: "7deg", width: 72 }}
          >
            <div className="relative overflow-hidden" style={{ width: 60, height: 72 }}>
              <Image src="/me/dmd-frens.JPG" alt="" fill className="object-cover" draggable={false} />
            </div>
          </div>

          <div
            className="absolute bg-white px-3 py-1.5 text-[11px] font-medium text-[#444] leading-snug border border-[#e5e5e5]"
            style={{ top: 1730, left: "50%", translate: "-50%", rotate: "3deg", borderRadius: 4, whiteSpace: "nowrap" }}
          >
            cs grad student
            <br />someday soon 🎓
          </div>

          <div
            className="absolute"
            style={{ top: 1870, left: "50%", translate: "-50%", rotate: "-8deg" }}
          >
            <Image src="/me/github.svg" alt="GitHub" width={36} height={36} draggable={false} />
          </div>

          <div
            className="absolute text-[#F7C325] font-bold"
            style={{ top: 1970, left: "50%", translate: "-50%", rotate: "6deg", fontSize: 24, whiteSpace: "nowrap" }}
          >
            ✦ ✦ ✦
          </div>
        </>
      )}
    </div>
  );
}
