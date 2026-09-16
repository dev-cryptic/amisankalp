// import { useEffect, useState } from "react";

// export default function Loader({ onComplete }) {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Start outro fade after 4.2 seconds
//     const fadeTimer = setTimeout(() => {
//       setIsVisible(false);
//     }, 4200);

//     // Remove loader after the fade animation finishes
//     const completeTimer = setTimeout(() => {
//       onComplete?.();
//     }, 4900); // 4200ms + 700ms fade duration

//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(completeTimer);
//     };
//   }, [onComplete]);

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
//         isVisible
//           ? "pointer-events-auto opacity-100"
//           : "pointer-events-none opacity-0"
//       }`}
//     >
//       <video
//         src="/videos/loader.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         onLoadedMetadata={(event) => {
//           event.currentTarget.playbackRate = 1.35;
//         }}
//         className="h-auto w-[280px] object-contain sm:w-[720px]"
//       />
//     </div>
//   );
// }










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
    }, 130);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, firstName.length * 130 + 900);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, firstName.length * 130 + 1800);

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
        duration-[800ms]
        ease-in
        ${
          isExiting
            ? "pointer-events-none scale-[8] opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >
      <div
        className={`
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          transition-all
          duration-[800ms]
          ease-in
          ${
            isExiting
              ? "scale-[1.35] opacity-0"
              : "scale-100 opacity-100"
          }
        `}
      >
        <h1
          className="
            loader-name
            whitespace-nowrap
            text-3xl
            font-extrabold
            tracking-[0.04em]
            sm:text-5xl
          "
        >
          <span className="text-[#008f95]">{navyPart}</span>
          <span className="text-[#f58220]">{orangePart}</span>
          <span className="loader-cursor ml-1 text-[#f58220]">
            |
          </span>
        </h1>

        <div
          className="
            mt-7
            h-1
            w-36
            overflow-hidden
            rounded-full
            bg-white/15
            sm:mt-8
            sm:w-48
          "
        >
          <div className="loader-progress h-full rounded-full bg-[#f58220]" />
        </div>
      </div>

      <style>{`
        .loader-name {
          animation: loaderNameReveal 1s ease-out both;
        }

        .loader-cursor {
          animation: loaderCursorBlink 0.8s steps(1) infinite;
        }

        .loader-progress {
          animation: loaderProgress 2.4s ease-in-out both;
        }

        @keyframes loaderNameReveal {
          0% {
            opacity: 0;
            transform: scale(0.9);
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
          .loader-name,
          .loader-cursor,
          .loader-progress {
            animation: none;
          }

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