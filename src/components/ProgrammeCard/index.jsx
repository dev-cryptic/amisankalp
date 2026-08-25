import { ArrowRight } from "lucide-react";

function ProgrammeCard({
  icon,
  title,
  description,
  iconColor,
  arrowColor,
  href,
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        flex
        min-h-[250px]
        flex-col
        rounded-xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-[0_5px_20px_rgba(6,43,70,0.07)]
        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:border-gray-200
        hover:shadow-[0_15px_35px_rgba(6,43,70,0.12)]
      "
    >

      {/* ICON */}

      <div
        className={`
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-gray-50
          ${iconColor}
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-gray-100
        `}
      >
        {icon}
      </div>


      {/* TITLE */}

      <h3
        className="
          mt-5
          min-h-[44px]
          text-base
          font-bold
          leading-5
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-brand-teal
        "
      >
        {title}
      </h3>


      {/* DESCRIPTION */}

      <p
        className="
          mt-3
          flex-1
          text-xs
          leading-5
          text-gray-500
        "
      >
        {description}
      </p>


      {/* ARROW */}

      <div
        className={`
          mt-4
          flex
          h-7
          w-7
          items-center
          justify-center
          self-end
          rounded-full
          text-white
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:scale-110
          ${arrowColor}
        `}
      >
        <ArrowRight size={14} />
      </div>

    </a>
  );
}

export default ProgrammeCard;