import React, { useId } from "react";

interface BrandMarkProps {
  showStatus?: boolean;
  size?: "sm" | "md";
}

export function BrandMark({ showStatus = true, size = "md" }: BrandMarkProps) {
  const gradId = useId();
  const iconBox = size === "sm" ? "h-8 w-8 rounded-lg" : "h-9 w-9 rounded-xl";
  const textSize = size === "sm" ? "text-lg" : "text-[1.25rem]";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className={`relative inline-flex ${iconBox} items-center justify-center border border-slate-200/90 bg-white shadow-xs`}
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={gradId} x1="2.5" y1="12.5" x2="21.5" y2="12.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="52%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
          <path
            d="M2.5 12.5H7.2L9.6 6.5L12.8 17.8L15.6 10.2L17.4 12.5H21.5"
            stroke={`url(#${gradId})`}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="21.5" cy="12.5" r="1.85" fill="#0EA5E9" />
        </svg>
      </span>

      <span className="flex items-center gap-2">
        <span
          className={`${textSize} font-extrabold tracking-[-0.04em] text-slate-900`}
        >
          FR
          <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            doc
          </span>
        </span>
        {showStatus ? (
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-gradient-to-r from-emerald-50 to-sky-50 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
            2.0
          </span>
        ) : null}
      </span>
    </span>
  );
}
