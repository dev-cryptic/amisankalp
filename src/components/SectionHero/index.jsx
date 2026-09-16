import React from "react";
import { ArrowRight } from "lucide-react";

function SectionHero({
  /* =====================================================
     EXISTING PROPS
  ===================================================== */

  title,
  subtitle,
  highlight,
  image,
  values = [],

  /* =====================================================
     OPTIONAL PROPS
  ===================================================== */

  eyebrow = "",
  description = "",

  badge = "",
  badgeIcon = null,

  buttonText = "",
  buttonHref = "#",

  secondaryButtonText = "",
  secondaryButtonHref = "#",

  showAccent = true,

  imagePosition = "center",

  /*
    Available themes:

    navy
    teal
    orange
    green
    light
    white
  */

  theme = "navy",

  /*
    Available accent colors:

    teal
    orange
    green
    navy
    white
  */

  accentColor = "teal",

  /*
    Optional custom highlight color
  */

  highlightColor = "",
}) {
  /* =====================================================
     THEME OPTIONS
  ===================================================== */

  const themes = {
    navy: {
      background: "bg-brand-navy",

      overlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/25",

      title: "text-white",

      subtitle: "text-white",

      description: "text-white/75",
    },

    teal: {
      background: "bg-brand-teal",

      overlay:
        "bg-gradient-to-r from-brand-teal via-brand-teal/90 to-brand-navy/25",

      title: "text-white",

      subtitle: "text-white",

      description: "text-white/80",
    },

    orange: {
      background: "bg-brand-orange",

      overlay:
        "bg-gradient-to-r from-brand-orange via-brand-orange/90 to-brand-navy/25",

      title: "text-white",

      subtitle: "text-white",

      description: "text-white/80",
    },

    green: {
      background: "bg-brand-green",

      overlay:
        "bg-gradient-to-r from-brand-green via-brand-green/90 to-brand-navy/20",

      title: "text-white",

      subtitle: "text-white",

      description: "text-white/80",
    },

    light: {
      background: "bg-[#F4F9F8]",

      overlay:
        "bg-gradient-to-r from-[#F4F9F8]/95 via-[#F4F9F8]/75 to-transparent",

      title: "text-brand-navy",

      subtitle: "text-brand-navy",

      description: "text-gray-600",
    },

    white: {
      background: "bg-white",

      overlay:
        "bg-gradient-to-r from-white/95 via-white/80 to-transparent",

      title: "text-brand-navy",

      subtitle: "text-brand-navy",

      description: "text-gray-600",
    },
  };

  /* =====================================================
     ACCENT COLORS
  ===================================================== */

  const accents = {
    teal: {
      text: "text-brand-teal",
      bg: "bg-brand-teal",
      lightBg: "bg-brand-teal/10",
      border: "border-brand-teal/20",
    },

    orange: {
      text: "text-brand-orange",
      bg: "bg-brand-orange",
      lightBg: "bg-brand-orange/10",
      border: "border-brand-orange/20",
    },

    green: {
      text: "text-brand-green",
      bg: "bg-brand-green",
      lightBg: "bg-brand-green/10",
      border: "border-brand-green/20",
    },

    navy: {
      text: "text-brand-navy",
      bg: "bg-brand-navy",
      lightBg: "bg-brand-navy/10",
      border: "border-brand-navy/20",
    },

    white: {
      text: "text-white",
      bg: "bg-white",
      lightBg: "bg-white/10",
      border: "border-white/20",
    },
  };

  const currentTheme =
    themes[theme] || themes.navy;

  const currentAccent =
    accents[accentColor] || accents.teal;

  /* =====================================================
     HIGHLIGHT COLOR
  ===================================================== */

  const highlightClass =
    highlightColor ||
    currentAccent.text;

  return (
    <section
      className="
        w-full
        bg-white
        py-0
      "
    >
      {/* =====================================================
          FULL WIDTH HERO
      ===================================================== */}

      <div className="w-full">
        <div
          className={`
            relative

            h-[500px]
            w-full

            overflow-hidden

            ${currentTheme.background}

            shadow-[0_12px_40px_rgba(6,43,70,0.12)]

            sm:h-[540px]

            md:h-[570px]

            lg:h-[600px]

            xl:h-[620px]
          `}
        >
          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          {image && (
            <img
              src={image}
              alt=""
              aria-hidden="true"

              className={`
                absolute
                inset-0

                h-full
                w-full

                object-cover

                object-${imagePosition}
              `}
            />
          )}

          {/* =================================================
              OVERLAY
          ================================================= */}

          {image && (
            <div
              className={`
                absolute
                inset-0

                ${currentTheme.overlay}
              `}
            />
          )}

          {/* =================================================
              DECORATIVE CIRCLES
          ================================================= */}

          <div
            className={`
              pointer-events-none

              absolute

              right-[-80px]
              top-[-80px]

              h-[280px]
              w-[280px]

              rounded-full

              border

              ${theme === "light" ||
                theme === "white"
                ? "border-brand-teal/10"
                : "border-white/10"
              }

              sm:h-[350px]
              sm:w-[350px]
            `}
          />

          <div
            className={`
              pointer-events-none

              absolute

              right-[-30px]
              top-[-30px]

              h-[220px]
              w-[220px]

              rounded-full

              border

              ${theme === "light" ||
                theme === "white"
                ? "border-brand-teal/10"
                : "border-white/10"
              }

              sm:h-[280px]
              sm:w-[280px]
            `}
          />

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10

              flex

              h-[500px]

              flex-col
              justify-center

              px-6

              pb-16
              pt-16

              sm:h-[540px]

              sm:px-10

              sm:pb-20

              md:h-[570px]

              lg:h-[600px]

              lg:px-16

              lg:pb-24

              xl:h-[620px]
            "
          >
            <div
              className="
                w-full
                max-w-[680px]
              "
            >
              {/* =================================================
                  BADGE
              ================================================= */}

              {badge && (
                <div
                  className={`
                    mb-4

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border

                    ${currentAccent.border}

                    ${theme === "light" ||
                      theme === "white"
                      ? "bg-white/80"
                      : "bg-white/10"
                    }

                    px-3
                    py-1.5

                    text-[10px]
                    font-semibold

                    ${currentAccent.text}

                    backdrop-blur-md

                    sm:text-xs
                  `}
                >
                  {badgeIcon && (
                    <span>
                      {badgeIcon}
                    </span>
                  )}

                  {badge}
                </div>
              )}

              {/* =================================================
                  EYEBROW
              ================================================= */}

              {eyebrow && (
                <div className="mb-5">
                  <div
                    className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-brand-orange/25
        bg-brand-orange/10
        px-3.5
        py-1.5
        shadow-[0_4px_15px_rgba(245,130,32,0.08)]
      "
                  >
                    <span
                      className="
          h-1.5
          w-1.5
          rounded-full
          bg-brand-orange
          shadow-[0_0_0_3px_rgba(245,130,32,0.12)]
        "
                    />

                    <p
                      className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-brand-orange
          sm:text-xs
        "
                    >
                      {eyebrow}
                    </p>
                  </div>
                </div>
              )}

              {/* =================================================
                  TITLE
              ================================================= */}

              <h1
                className={`
                  max-w-[700px]

                  text-4xl

                  font-bold

                  leading-[1.05]

                  tracking-tight

                  ${currentTheme.title}

                  sm:text-5xl

                  lg:text-6xl
                `}
              >
                {title}
              </h1>

              {/* =================================================
                  SUBTITLE
              ================================================= */}

              {subtitle && (
                <p
                  className={`
                    mt-5

                    max-w-[650px]

                    text-base

                    font-medium

                    leading-7

                    ${currentTheme.subtitle}

                    sm:text-lg
                  `}
                >
                  {subtitle}
                </p>
              )}

              {/* =================================================
                  HIGHLIGHT
              ================================================= */}

              {highlight && (
                <p
                  className={`
                    mt-1

                    max-w-[650px]

                    text-base

                    font-semibold

                    leading-7

                    ${highlightClass}

                    sm:text-lg
                  `}
                >
                  {highlight}
                </p>
              )}

              {/* =================================================
                  LONG DESCRIPTION
              ================================================= */}

              {description && (
                <p
                  className={`
                    mt-5

                    max-w-[720px]

                    text-medium

                    leading-7

                    ${currentTheme.description}

                    sm:text-base

                    sm:leading-8
                  `}
                >
                  {description}
                </p>
              )}

              {/* =================================================
                  ACCENT LINE
              ================================================= */}

              {showAccent && (
                <div
                  className={`
                    mt-5

                    h-[3px]

                    w-12

                    rounded-full

                    ${currentAccent.bg}

                    sm:w-14
                  `}
                />
              )}

              {/* =================================================
                  BUTTONS
              ================================================= */}

              {(buttonText ||
                secondaryButtonText) && (
                  <div
                    className="
                    mt-7

                    flex
                    flex-wrap
                    items-center

                    gap-3
                  "
                  >
                    {/* PRIMARY BUTTON */}

                    {buttonText && (
                      <a
                        href={buttonHref}
                        className={`
                        group

                        inline-flex

                        items-center
                        gap-2

                        rounded-lg

                        ${currentAccent.bg}

                        px-5
                        py-3

                        text-xs

                        font-semibold

                        text-white

                        shadow-sm

                        transition-all
                        duration-300

                        hover:-translate-y-0.5

                        hover:shadow-lg

                        sm:text-sm
                      `}
                      >
                        {buttonText}

                        <ArrowRight
                          size={16}

                          className="
                          transition-transform
                          duration-300

                          group-hover:translate-x-1
                        "
                        />
                      </a>
                    )}

                    {/* SECONDARY BUTTON */}

                    {secondaryButtonText && (
                      <a
                        href={secondaryButtonHref}
                        className={`
                        inline-flex

                        items-center
                        gap-2

                        rounded-lg

                        border

                        ${theme === "light" ||
                            theme === "white"
                            ? "border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white"
                            : "border-white/30 text-white hover:bg-white hover:text-brand-navy"
                          }

                        bg-transparent

                        px-5
                        py-3

                        text-xs

                        font-semibold

                        transition-all
                        duration-300

                        hover:-translate-y-0.5

                        sm:text-sm
                      `}
                      >
                        {secondaryButtonText}
                      </a>
                    )}
                  </div>
                )}
            </div>
          </div>

          {/* =================================================
              VALUES PANEL
          ================================================= */}

          {values.length > 0 && (
            <div
              className="
                absolute

                bottom-3
                left-3
                right-3

                z-20

                overflow-hidden

                rounded-xl

                border
                border-white/15

                bg-brand-navy/75

                shadow-[0_12px_35px_rgba(0,0,0,0.18)]

                backdrop-blur-xl

                sm:bottom-5

                sm:left-8
                sm:right-8

                lg:left-14
                lg:right-14
              "
            >
              <div
                className="
                  grid
                  grid-cols-2

                  lg:grid-cols-4
                "
              >
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={`${value.title}-${index}`}
                      className={`
                        flex

                        items-center
                        gap-2

                        px-3
                        py-3

                        sm:gap-3

                        sm:px-5
                        sm:py-4

                        lg:py-5

                        ${index % 2 !== 0
                          ? "border-l border-white/10"
                          : ""
                        }

                        ${index >= 2
                          ? "border-t border-white/10 lg:border-t-0"
                          : ""
                        }
                      `}
                    >
                      {/* ICON */}

                      <div
                        className="
                          flex

                          h-8
                          w-8

                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          bg-brand-teal/10

                          text-brand-teal-light

                          ring-1
                          ring-brand-teal/20

                          sm:h-10
                          sm:w-10
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.7}

                          className="
                            sm:h-5
                            sm:w-5
                          "
                        />
                      </div>

                      {/* TEXT */}

                      <div className="min-w-0">
                        <h2
                          className="
                            truncate

                            text-[10px]

                            font-bold

                            text-white

                            sm:text-xs

                            lg:text-sm
                          "
                        >
                          {value.title}
                        </h2>

                        <p
                          className="
                            mt-0.5

                            line-clamp-2

                            text-[8px]

                            leading-3

                            text-white/60

                            sm:mt-1

                            sm:text-[10px]

                            sm:leading-4
                          "
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionHero;