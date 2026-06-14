import * as React from "react";
import { InsForgeIcon, BRAND_IMAGES } from "./icons";

const ITEMS = [
  // ----- top band -----
  { img: BRAND_IMAGES.firebase, pos: "tw-left-[4%] tw-top-[8%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "7s", delay: "0s" },
  { img: BRAND_IMAGES.react, pos: "tw-left-[22%] tw-top-[4%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "8s", delay: "0.5s" },
  { img: BRAND_IMAGES.kubernetes, pos: "tw-left-[32%] tw-top-[16%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "9s", delay: "1.4s" },
  { Icon: InsForgeIcon, pos: "tw-left-[44%] tw-top-[1%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "6.5s", delay: "1.2s" },
  { img: BRAND_IMAGES.flutter, pos: "tw-right-[32%] tw-top-[16%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "8.5s", delay: "0.8s" },
  { img: BRAND_IMAGES.typescript, pos: "tw-right-[22%] tw-top-[4%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "7.5s", delay: "1.6s" },
  { img: BRAND_IMAGES.vercel, pos: "tw-right-[4%] tw-top-[8%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "8.5s", delay: "0.6s" },

  // ----- left column -----
  { img: BRAND_IMAGES.nodedotjs, pos: "tw-left-[9%] tw-top-[24%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "8.5s", delay: "0.7s" },
  { img: BRAND_IMAGES.docker, pos: "tw-left-[2%] tw-top-[40%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "8s", delay: "0.9s" },
  { img: BRAND_IMAGES.tailwindcss, pos: "tw-left-[7%] tw-top-[57%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "6.5s", delay: "1.3s" },

  // ----- right column -----
  { img: BRAND_IMAGES.nextdotjs, pos: "tw-right-[9%] tw-top-[24%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "9s", delay: "0.4s" },
  { img: BRAND_IMAGES.supabase, pos: "tw-right-[2%] tw-top-[42%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "6s", delay: "1.5s" },
  { img: BRAND_IMAGES.redis, pos: "tw-right-[7%] tw-top-[57%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "7.5s", delay: "1.0s" },

  // ----- bottom band -----
  { img: BRAND_IMAGES.github, pos: "tw-left-[6%] tw-top-[78%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "9s", delay: "0.3s" },
  { img: BRAND_IMAGES.python, pos: "tw-left-[20%] tw-top-[90%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "8s", delay: "1.7s" },
  { img: BRAND_IMAGES.graphql, pos: "tw-left-[32%] tw-top-[86%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "9.5s", delay: "0.4s" },
  { img: BRAND_IMAGES.stripe, pos: "tw-left-[50%] tw-top-[93%]", size: "tw-h-14 tw-w-14 tw-p-4", duration: "8s", delay: "0.2s" },
  { img: BRAND_IMAGES.mongodb, pos: "tw-right-[32%] tw-top-[88%]", size: "tw-h-12 tw-w-12 tw-p-3", duration: "7s", delay: "1.1s" },
  { img: BRAND_IMAGES.figma, pos: "tw-right-[20%] tw-top-[90%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "7s", delay: "1.1s" },
  { img: BRAND_IMAGES.postgresql, pos: "tw-right-[6%] tw-top-[78%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "7.5s", delay: "1.8s" },
];

// On mobile, only show a few icons in the top & bottom edges so they don't
// crowd the centered heading. Indices map to ITEMS above (top + bottom, edges).
const MOBILE_SHOW = new Set([0, 1, 5, 6, 13, 14, 18, 19]);

const REPEL_RADIUS = 140;
const REPEL_STRENGTH = 36;
const EASE = 0.12;

export default function FloatingIcons() {
  const itemRefs = React.useRef([]);

  React.useEffect(() => {
    const offsets = ITEMS.map(() => ({ x: 0, y: 0 }));
    const mouse = { x: -9999, y: -9999 };
    let frameId;

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    const tick = () => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = 0;
        let targetY = 0;
        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const angle = Math.atan2(dy, dx);
          targetX = Math.cos(angle) * force;
          targetY = Math.sin(angle) * force;
        }

        const o = offsets[i];
        o.x += (targetX - o.x) * EASE;
        o.y += (targetY - o.y) * EASE;
        el.style.transform = `translate(${o.x.toFixed(2)}px, ${o.y.toFixed(2)}px)`;
      });
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="tw-relative tw-h-full tw-w-full">
      {ITEMS.map(({ Icon, img, pos, size, duration, delay }, i) => (
        <div
          key={i}
          className={`tw-absolute ${pos} ${MOBILE_SHOW.has(i) ? "f8-mobile tw-block" : "tw-hidden sm:tw-block"}`}
          style={{ animation: `f8-float ${duration} ease-in-out infinite`, animationDelay: delay }}
        >
          <div
            ref={(el) => (itemRefs.current[i] = el)}
            className={`f8-iconbox tw-flex ${size} tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/10 tw-bg-[#15151a] tw-shadow-[0_8px_30px_rgba(0,0,0,0.35)] tw-transition-colors tw-duration-300 hover:tw-border-[#A78BFA]/40`}
          >
            {Icon ? (
              <Icon className="tw-h-full tw-w-full" />
            ) : (
              <img src={img.src} alt={img.alt} className="tw-h-full tw-w-full tw-object-contain" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
