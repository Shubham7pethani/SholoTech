import * as React from "react";
import {
  GoogleIcon,
  GitHubIcon,
  MicrosoftIcon,
  ReactIcon,
  SlackIcon,
  FirebaseIcon,
  DiscordIcon,
  SpotifyIcon,
  FigmaIcon,
  VercelIcon,
} from "./icons";

const ITEMS = [
  { Icon: GoogleIcon, pos: "tw-left-[3%] tw-top-[6%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "7s", delay: "0s" },
  { Icon: FirebaseIcon, pos: "tw-right-[4%] tw-top-[4%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "8.5s", delay: "0.6s" },
  { Icon: SlackIcon, pos: "tw-left-[44%] tw-top-[2%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "6.5s", delay: "1.2s" },
  { Icon: GitHubIcon, pos: "tw-left-[8%] tw-top-[78%]", size: "tw-h-16 tw-w-16 tw-p-4", duration: "9s", delay: "0.3s" },
  { Icon: ReactIcon, pos: "tw-right-[8%] tw-top-[76%]", size: "tw-h-16 tw-w-16 tw-p-5", duration: "7.5s", delay: "1.8s" },
  { Icon: DiscordIcon, pos: "tw-left-[2%] tw-top-[40%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "8s", delay: "0.9s" },
  { Icon: SpotifyIcon, pos: "tw-right-[2%] tw-top-[42%]", size: "tw-h-14 tw-w-14 tw-p-0", duration: "6s", delay: "1.5s" },
  { Icon: MicrosoftIcon, pos: "tw-left-[28%] tw-top-[88%]", size: "tw-h-14 tw-w-14 tw-p-3.5", duration: "9.5s", delay: "0.4s" },
  { Icon: FigmaIcon, pos: "tw-right-[28%] tw-top-[90%]", size: "tw-h-14 tw-w-14 tw-p-0", duration: "7s", delay: "1.1s" },
  { Icon: VercelIcon, pos: "tw-left-[50%] tw-top-[92%]", size: "tw-h-14 tw-w-14 tw-p-4", duration: "8s", delay: "0.2s" },
];

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
      {ITEMS.map(({ Icon, pos, size, duration, delay }, i) => (
        <div
          key={i}
          className={`tw-absolute tw-hidden sm:tw-block ${pos}`}
          style={{ animation: `f8-float ${duration} ease-in-out infinite`, animationDelay: delay }}
        >
          <div
            ref={(el) => (itemRefs.current[i] = el)}
            className={`tw-flex ${size} tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/10 tw-bg-[#15151a] tw-shadow-[0_8px_30px_rgba(0,0,0,0.35)] tw-transition-colors tw-duration-300 hover:tw-border-[#A78BFA]/40`}
          >
            <Icon className="tw-h-full tw-w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
