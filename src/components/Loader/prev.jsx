import React, { useEffect, useState } from "react";

function Loader({ firstName = "AMISANKALP", onComplete }) {
  const [typedName, setTypedName] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let typingIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedName(firstName.slice(0, typingIndex + 1));
      typingIndex += 1;

      if (typingIndex >= firstName.length) {
        clearInterval(typingInterval);
      }
    }, 110);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, firstName.length * 110 + 1000);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, firstName.length * 110 + 1700);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [firstName, onComplete]);

  const navyPart = typedName.slice(0, 3);
  const orangePart = typedName.slice(3);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#062b46]
        transition-all
        duration-700
        ${
          isExiting
            ? "pointer-events-none scale-[1.12] opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >
      {/* Decorative teal circle */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
        
        "
      />

      {/* Decorative orange circle */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          border-[24px]
          border-[#f58220]/15
        "
      />

      {/* Center decorative circle */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/10
        "
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Small colored logo */}
        

        {/* Typed AMISANKALP */}
        <h1
          className="
            loader-name
            mt-4
            whitespace-nowrap
            text-3xl
            font-extrabold
            tracking-[0.04em]
            sm:mt-5
            sm:text-5xl
          "
        >
          <span className="text-white">
            {navyPart}
          </span>

          <span className="text-[#f58220]">
            {orangePart}
          </span>

          <span className="loader-cursor ml-1 text-[#f58220]">
            |
          </span>
        </h1>

        {/* Social Foundation directly below */}
        <p
          className="
            mt-1
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-white
            sm:text-sm
            sm:tracking-[0.38em]
          "
        >
          Social Foundation
        </p>

        {/* Loading line */}
        <div
          className="
            mt-8
            h-1
            w-36
            overflow-hidden
            rounded-full
            bg-white/15
            sm:mt-10
            sm:w-48
          "
        >
          <div className="loader-progress h-full rounded-full bg-[#f58220]" />
        </div>
      </div>

      <style>{`
        .loader-logo {
          animation: loaderLogoReveal 1.2s ease-out both;
        }

        .loader-name {
          animation: loaderNameReveal 1.2s ease-out 0.35s both;
        }

        .loader-cursor {
          animation: loaderCursorBlink 0.8s steps(1) infinite;
        }

        .loader-progress {
          animation: loaderProgress 2.2s ease-in-out both;
        }

        @keyframes loaderLogoReveal {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }

          70% {
            opacity: 1;
            transform: scale(1.06);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes loaderNameReveal {
          0% {
            opacity: 0;
            transform: scale(0.75);
          }

          70% {
            opacity: 1;
            transform: scale(1.05);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes loaderCursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }

        @keyframes loaderProgress {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-logo,
          .loader-name,
          .loader-cursor,
          .loader-progress {
            animation: none;
          }

          .loader-logo,
          .loader-name {
            opacity: 1;
            transform: none;
          }

          .loader-progress {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;