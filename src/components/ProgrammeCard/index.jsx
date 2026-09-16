import { ArrowRight } from "lucide-react";

function ProgrammeCard({
  icon,
  title,
  description,
  iconColor,
  arrowColor,
  backgroundImage,
  gradient = "from-brand-navy/95 via-brand-navy/65 to-transparent",
  href,
}) {
  return (
    <a
      href={href}
      className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-brand-navy shadow-[0_5px_20px_rgba(6,43,70,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(6,43,70,0.18)]"
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

      {/* Card content */}
      <div className="relative z-10 flex min-h-[320px] flex-1 flex-col p-6">
        {/* Top section */}
        <div className="flex items-start justify-between">
          <span className="text-sm font-bold tracking-[0.2em] text-white/80">
            {title}
          </span>

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm ${iconColor} transition-transform duration-300 group-hover:scale-110`}
          >
            {icon}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-[330px] text-sm leading-6 text-white/85">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              Explore Programme
            </span>

            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full ${arrowColor} text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110`}
            >
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProgrammeCard;