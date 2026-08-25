function SDGCard({
  number,
  title,
  description,
  color,
}) {
  const colors = {
    red: {
      text: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-100",
      line: "bg-red-500",
      glow: "group-hover:bg-red-500/10",
    },

    green: {
      text: "text-brand-green",
      bg: "bg-brand-green/10",
      border: "border-brand-green/15",
      line: "bg-brand-green",
      glow: "group-hover:bg-brand-green/10",
    },

    orange: {
      text: "text-brand-orange",
      bg: "bg-brand-orange/10",
      border: "border-brand-orange/15",
      line: "bg-brand-orange",
      glow: "group-hover:bg-brand-orange/10",
    },

    pink: {
      text: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-100",
      line: "bg-pink-500",
      glow: "group-hover:bg-pink-500/10",
    },

    teal: {
      text: "text-brand-teal",
      bg: "bg-brand-teal/10",
      border: "border-brand-teal/15",
      line: "bg-brand-teal",
      glow: "group-hover:bg-brand-teal/10",
    },

    purple: {
      text: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100",
      line: "bg-purple-500",
      glow: "group-hover:bg-purple-500/10",
    },

    navy: {
      text: "text-brand-navy",
      bg: "bg-brand-navy/10",
      border: "border-brand-navy/15",
      line: "bg-brand-navy",
      glow: "group-hover:bg-brand-navy/10",
    },
  };

  const theme = colors[color] || colors.navy;

  return (
    <div
      className="
        group
        relative
        min-h-[190px]
        overflow-hidden

        rounded-2xl
        border
        border-gray-100

        bg-white

        p-4

        shadow-[0_5px_25px_rgba(6,43,70,0.045)]

        transition-all
        duration-500

        hover:-translate-y-1.5
        hover:shadow-[0_15px_40px_rgba(6,43,70,0.10)]

        sm:min-h-[205px]
        sm:p-5
      "
    >

      {/* Soft Background Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          blur-2xl
          transition-all
          duration-500
          ${theme.glow}
        `}
      />


      {/* Number */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
        "
      >

        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            ${theme.bg}
            ${theme.text}

            transition-transform
            duration-500

            group-hover:scale-110
          `}
        >
          <span
            className="
              text-sm
              font-bold
            "
          >
            {number}
          </span>
        </div>


        {/* Small Dot */}

        <span
          className={`
            mt-2
            h-1.5
            w-1.5
            rounded-full
            ${theme.line}

            opacity-50

            transition-all
            duration-300

            group-hover:scale-150
            group-hover:opacity-100
          `}
        />

      </div>


      {/* Title */}

      <h3
        className="
          relative
          z-10

          mt-5

          text-sm
          font-bold
          leading-5
          text-brand-navy

          transition-colors
          duration-300

          group-hover:text-brand-teal

          sm:text-[15px]
        "
      >
        {title}
      </h3>


      {/* Description */}

      <p
        className="
          relative
          z-10

          mt-2

          text-[11px]
          leading-5
          text-gray-500

          sm:text-xs
        "
      >
        {description}
      </p>


      {/* Bottom Accent */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0

          ${theme.line}

          transition-all
          duration-500

          group-hover:w-full
        `}
      />

    </div>
  );
}

export default SDGCard;