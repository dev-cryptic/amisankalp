import React from "react";
import { Mail } from "lucide-react";

function LeaderCard({
  name,
  role,
  image,
  linkedin = "#",
  email,
}) {
  return (
    <article
      className="
        group
        relative

        flex
        min-h-[205px]

        overflow-hidden

        rounded-2xl

        border
        border-brand-navy/10

        bg-[#F7FAF9]

        shadow-[0_6px_25px_rgba(6,43,70,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-brand-teal/20

        hover:shadow-[0_15px_35px_rgba(6,43,70,0.10)]

        sm:min-h-[220px]
      "
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          w-[46%]
          shrink-0
          overflow-hidden

          bg-brand-navy
        "
      >

        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            h-full
            w-full

            object-cover
            object-top

            transition-transform
            duration-500

            group-hover:scale-105
          "
        />

        {/* IMAGE OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-transparent
            to-brand-navy/20
          "
        />

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          justify-center

          p-4

          sm:p-5
        "
      >

        {/* NAME */}

        <h3
          className="
            text-sm
            font-bold
            leading-tight

            text-brand-navy

            sm:text-base
          "
        >
          {name}
        </h3>


        {/* ROLE */}

        <p
          className="
            mt-1

            text-[10px]
            font-medium
            leading-4

            text-brand-teal

            sm:text-xs
            sm:leading-5
          "
        >
          {role}
        </p>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div
          className="
            mt-4

            flex
            items-center
            gap-2
          "
        >

          {/* LINKEDIN */}

          <a
            href={linkedin}
            aria-label={`${name} LinkedIn`}
            className="
              flex
              h-7
              w-7
              items-center
              justify-center

              rounded-full

              bg-white

              text-[10px]
              font-bold
              text-brand-navy

              shadow-sm

              ring-1
              ring-brand-navy/10

              transition-all
              duration-300

              hover:bg-brand-teal
              hover:text-white
            "
          >
            in
          </a>


          {/* EMAIL */}

          <a
            href={email}
            aria-label={`Email ${name}`}
            className="
              flex
              h-7
              w-7
              items-center
              justify-center

              rounded-full

              bg-white

              text-brand-navy

              shadow-sm

              ring-1
              ring-brand-navy/10

              transition-all
              duration-300

              hover:bg-brand-orange
              hover:text-white
            "
          >
            <Mail size={13} />
          </a>

        </div>

      </div>


      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0

          h-[3px]
          w-0

          bg-brand-teal

          transition-all
          duration-500

          group-hover:w-full
        "
      />

    </article>
  );
}

export default LeaderCard;