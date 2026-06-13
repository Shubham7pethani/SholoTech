import React from "react";
import { Shield, Users, Zap } from "lucide-react";
import { Card } from "./components/card";
import { cn } from "./lib/utils";

function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

const cardBase =
  "tw-group tw-relative tw-overflow-hidden tw-border-white/[0.07] tw-bg-white/[0.015] tw-transition-all tw-duration-500 hover:tw-border-white/15 hover:tw-bg-white/[0.025] hover:-tw-translate-y-1.5";

function Spotlight() {
  return (
    <div
      className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-0 tw-transition-opacity tw-duration-500 group-hover:tw-opacity-100"
      style={{
        background:
          "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.05), transparent 70%)",
      }}
    />
  );
}

export default function Features() {
  return (
    <div className="tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-6">
      {/* 100% Customizable */}
      <Card
        onMouseMove={handleSpotlight}
        className={cn(
          cardBase,
          "md:tw-col-span-2 tw-flex tw-min-h-[280px] tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-p-10 tw-text-center"
        )}
      >
        <Spotlight />
        <div className="tw-relative tw-flex tw-h-24 tw-w-52 tw-items-center tw-justify-center">
          <div
            className="tw-absolute tw-inset-0 tw-rounded-[50%] tw-border tw-border-white/[0.06]"
            style={{ transform: "scaleY(0.5)" }}
          />
          <div
            className="-tw-inset-3 tw-absolute tw-rounded-[50%] tw-border tw-border-white/[0.03]"
            style={{ transform: "scaleY(0.5)" }}
          />
          <span className="tw-relative tw-font-serif tw-text-5xl tw-text-white">100%</span>
        </div>
        <h3 className="tw-relative tw-font-serif tw-text-2xl tw-text-white">Fully Customizable</h3>
      </Card>

      {/* Secure by default */}
      <Card
        onMouseMove={handleSpotlight}
        className={cn(
          cardBase,
          "md:tw-col-span-2 tw-flex tw-flex-col tw-items-center tw-gap-5 tw-p-10 tw-pt-12 tw-text-center"
        )}
      >
        <Spotlight />
        <div className="tw-relative tw-flex tw-h-16 tw-w-16 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-white/[0.08]">
          <div className="-tw-inset-2.5 tw-absolute tw-rounded-full tw-border tw-border-white/[0.04]" />
          <Shield
            className="tw-relative tw-h-6 tw-w-6 tw-text-white/60 tw-transition-colors tw-duration-500 group-hover:tw-text-white"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="tw-relative tw-font-serif tw-text-xl tw-text-white">Secure by default</h3>
        <p className="tw-relative tw-max-w-[260px] tw-text-[13px] tw-font-light tw-leading-relaxed tw-text-white/40">
          Every product we ship is encrypted end-to-end, continuously monitored, and built to meet
          enterprise-grade compliance from day one.
        </p>
      </Card>

      {/* Faster than light - mini chart */}
      <Card
        onMouseMove={handleSpotlight}
        className={cn(cardBase, "md:tw-col-span-2 tw-flex tw-flex-col tw-gap-6 tw-p-8")}
      >
        <Spotlight />
        <div className="tw-relative tw-flex tw-items-center tw-gap-2">
          <span className="tw-flex tw-h-6 tw-w-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-white/5 tw-text-white/40">
            <Zap className="tw-h-3 tw-w-3" strokeWidth={2} />
          </span>
          <span className="tw-text-xs tw-font-light tw-text-white/35">Performance score</span>
          <span className="tw-ml-auto tw-text-sm tw-font-medium tw-text-white">98/100</span>
        </div>
        <svg className="tw-relative tw-h-24 tw-w-full" viewBox="0 0 200 60" preserveAspectRatio="none" fill="none">
          <path
            d="M0,45 L20,38 L40,42 L60,25 L80,32 L100,18 L120,26 L140,12 L160,20 L180,8 L200,14"
            stroke="#A78BFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="tw-relative tw-mt-auto">
          <h3 className="tw-font-serif tw-text-xl tw-text-white">Faster than light</h3>
          <p className="tw-mt-2 tw-text-[13px] tw-font-light tw-leading-relaxed tw-text-white/40">
            Optimized builds and edge caching keep things snappy, even under load.
          </p>
        </div>
      </Card>

      {/* Built to scale - big chart */}
      <Card
        onMouseMove={handleSpotlight}
        className={cn(
          cardBase,
          "md:tw-col-span-3 tw-flex tw-flex-col tw-gap-8 tw-p-8 sm:tw-flex-row sm:tw-items-center"
        )}
      >
        <Spotlight />
        <div className="tw-relative tw-flex tw-flex-col tw-gap-4 sm:tw-w-[38%]">
          <div className="tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-white/[0.08]">
            <Zap
              className="tw-h-5 tw-w-5 tw-text-white/60 tw-transition-colors tw-duration-500 group-hover:tw-text-white"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="tw-font-serif tw-text-2xl tw-text-white">Built to scale</h3>
          <p className="tw-text-[13px] tw-font-light tw-leading-relaxed tw-text-white/40">
            From your first user to your millionth, our infrastructure scales with you — no
            rewrites, no downtime.
          </p>
        </div>
        <div className="tw-relative tw-flex-1 sm:tw-border-l sm:tw-border-white/[0.06] sm:tw-pl-8">
          <svg className="tw-h-40 tw-w-full" viewBox="0 0 240 160" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="f8-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,120 C30,110 40,90 60,95 C90,100 100,60 130,65 C160,70 170,40 200,35 C220,32 230,20 240,15 L240,160 L0,160 Z"
              fill="url(#f8-gradient)"
            />
            <path
              d="M0,120 C30,110 40,90 60,95 C90,100 100,60 130,65 C160,70 170,40 200,35 C220,32 230,20 240,15"
              stroke="#A78BFA"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Card>

      {/* Built around your team */}
      <Card
        onMouseMove={handleSpotlight}
        className={cn(
          cardBase,
          "md:tw-col-span-3 tw-flex tw-flex-col tw-gap-8 tw-p-8 sm:tw-flex-row sm:tw-items-center"
        )}
      >
        <Spotlight />
        <div className="tw-relative tw-flex tw-flex-col tw-gap-4 sm:tw-w-[44%]">
          <div className="tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-white/[0.08]">
            <Users
              className="tw-h-5 tw-w-5 tw-text-white/60 tw-transition-colors tw-duration-500 group-hover:tw-text-white"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="tw-font-serif tw-text-2xl tw-text-white">Built around your team</h3>
          <p className="tw-text-[13px] tw-font-light tw-leading-relaxed tw-text-white/40">
            You work directly with the engineers and designers behind your product — real people,
            real conversations, no middlemen.
          </p>
        </div>
        <div className="tw-relative tw-flex tw-flex-1 tw-flex-col tw-gap-4 sm:tw-border-l sm:tw-border-white/[0.06] sm:tw-pl-8">
          <div className="tw-flex tw-items-center tw-gap-3 sm:tw-justify-end">
            <div className="tw-text-right">
              <div className="tw-text-[12px] tw-font-medium tw-text-white/80">Shubham Pethani</div>
              <div className="tw-text-[11px] tw-font-light tw-text-white/35">Lead Engineer</div>
            </div>
            <span className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-primary tw-text-xs tw-font-semibold tw-text-primary-foreground">
              SP
            </span>
          </div>
          <div className="tw-flex tw-items-center tw-gap-3">
            <span className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#7016EF] tw-text-xs tw-font-semibold tw-text-white">
              OP
            </span>
            <div>
              <div className="tw-text-[12px] tw-font-medium tw-text-white/80">Om Pethani</div>
              <div className="tw-text-[11px] tw-font-light tw-text-white/35">Product Designer</div>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-3 sm:tw-justify-end">
            <div className="tw-text-right">
              <div className="tw-text-[12px] tw-font-medium tw-text-white/80">Vishal Gupta</div>
              <div className="tw-text-[11px] tw-font-light tw-text-white/35">QA &amp; Launch</div>
            </div>
            <span className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#9B6DFF] tw-text-xs tw-font-semibold tw-text-primary-foreground">
              VG
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
