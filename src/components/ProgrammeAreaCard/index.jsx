import React from "react";
import { ArrowRight } from "lucide-react";

function ProgrammeAreaCard({
  title,
  description,
  image,
  icon: Icon,
  color = "teal",
  href,
  points = [],
}) {
  const colors = {
    teal: {
      iconBg: "bg-brand-teal",
      iconText: "text-white",
      point: "text-brand-teal",
      line: "bg-brand-teal",
      hover: "group-hover:text-brand-teal",
    },

    orange: {
      iconBg: "bg-brand-orange",
      iconText: "text-white",
      point: "text-brand-orange",
      line: "bg-brand-orange",
      hover: "group-hover:text-brand-orange",
    },

    green: {
      iconBg: "bg-brand-green",
      iconText: "text-white",
      point: "text-brand-green",
      line: "bg-brand-green",
      hover: "group-hover:text-brand-green",
    },

    pink: {
      iconBg: "bg-pink-500",
      iconText: "text-white",
      point: "text-pink-500",
      line: "bg-pink-500",
      hover: "group-hover:text-pink-500",
    },
  };

  const theme = colors[color] || colors.teal;

  return (
    <article
      className="
        group
        relative

        overflow-hidden

        rounded-2xl

        border
        border-gray-100

        bg-white

        shadow-[0_6px_25px_rgba(6,43,70,0.055)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:border-gray-200

        hover:shadow-[0_18px_40px_rgba(6,43,70,0.11)]
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative

          h-[200px]

          overflow-hidden

          bg-gray-100

          sm:h-[215px]
        "
      >
        <img
          src={image}
          alt={`${title} programme`}
          loading="lazy"
          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-brand-navy/45
            via-transparent
            to-transparent
          "
        />

        {/* ICON */}

        {Icon && (
          <div
            className={`
              absolute
              left-5
              top-5

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              ${theme.iconBg}
              ${theme.iconText}

              shadow-[0_8px_20px_rgba(0,0,0,0.15)]

              transition-transform
              duration-500

              group-hover:scale-110
            `}
          >
            <Icon
              size={23}
              strokeWidth={1.8}
            />
          </div>
        )}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-5 sm:p-6">

        {/* TITLE */}

        <h3
          className={`
            text-xl
            font-bold
            leading-tight

            text-brand-navy

            transition-colors
            duration-300

            ${theme.hover}

            sm:text-2xl
          `}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3

            min-h-[72px]

            text-sm
            leading-6

            text-gray-500
          "
        >
          {description}
        </p>

        {/* =================================================
            POINTS
        ================================================= */}

        {points.length > 0 && (
          <div className="mt-4 space-y-2.5">

            {points.map((point) => (
              <div
                key={point}
                className="
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className={`
                    h-1.5
                    w-1.5
                    shrink-0

                    rounded-full

                    ${theme.line}
                  `}
                />

                <span
                  className="
                    text-xs
                    font-medium

                    text-gray-600
                  "
                >
                  {point}
                </span>
              </div>
            ))}

          </div>
        )}

        {/* =================================================
            EXPLORE LINK
        ================================================= */}

        {href && (
          <a
            href={href}
            className={`
              group/link

              mt-6

              inline-flex
              items-center
              gap-2

              text-sm
              font-bold

              ${theme.point}

              transition-all
              duration-300
            `}
          >
            Explore More

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300

                group-hover/link:translate-x-1
              "
            />
          </a>
        )}

      </div>

      {/* =================================================
          BOTTOM COLOR ACCENT
      ================================================= */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          right-0

          h-[3px]

          ${theme.line}

          opacity-80

          transition-all
          duration-300

          group-hover:h-1
        `}
      />
    </article>
  );
}

export default ProgrammeAreaCard;