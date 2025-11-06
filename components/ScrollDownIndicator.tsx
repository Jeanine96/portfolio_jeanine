"use client";
import { JSX } from "react";

export default function ScrollDownIndicator(): JSX.Element {
  return (
    <div className="inset-0 flex flex-col items-center justify-center pointer-events-none">
      <span className="relative block w-8 h-16 border-2 border-tertiary rounded-full mb-4 overflow-hidden">
        <span
          className="absolute w-2.5 h-2.5 bg-tertiary rounded-full left-1/2 "
          style={{
            animation: "move 2s linear infinite",
          }}
        />
      </span>
      <h2 className="text-text-three font-body text-fontsize-scroll-down">
        Scroll down
      </h2>

      <style jsx>{`
        @keyframes move {
          0% {
            transform: translate(-50%, 5px);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, 40px);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 80px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
