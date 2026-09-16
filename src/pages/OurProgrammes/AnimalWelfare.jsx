import React, { useEffect } from "react";

import {
  ArrowRight,
  Heart,
  HeartHandshake,
  PawPrint,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function AnimalWelfare() {
  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const title =
      "Animal Welfare | Amisankalp Social Foundation";

    const description =
      "Supporting animal welfare through compassionate care, protection, health support and community awareness.";

    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      description
    );

    /* =====================================================
       CANONICAL
    ===================================================== */

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/programmes/animal-welfare`
    );
  }, []);

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <SectionHero
        eyebrow="Our Programmes"
        title="Protecting Animals."
        subtitle="Creating a more compassionate world."
        highlight="Every life deserves care, dignity and protection."
        description="
          
        "
        image="/images/programmes/animal-welfare.jpeg"
        theme="light"
        accentColor="orange"
        buttonText="Support Animal Welfare"
        buttonHref="#support"
        secondaryButtonText="Our Approach"
        secondaryButtonHref="#approach"
      />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="animal-welfare-heading"
        className="
          w-full
          bg-white

          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1400px]

            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10

              lg:grid-cols-2
              lg:items-center
              lg:gap-16
            "
          >
            {/* LEFT */}

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]

                  text-brand-teal

                  sm:text-xs
                "
              >
                Why Animal Welfare Matters
              </p>

              <h2
                id="animal-welfare-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight

                  text-brand-navy

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Compassion in
                <span className="text-brand-teal">
                  {" "}action.
                </span>
              </h2>

              <div
                className="
                  mt-4

                  h-[3px]
                  w-12

                  rounded-full

                  bg-brand-orange
                "
              />
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-sm
                  leading-7

                  text-gray-600

                  sm:text-base
                  sm:leading-8
                "
              >
                Animals are an important part of our
                communities and environment. Through
                compassionate intervention and community
                participation, we aim to support their
                well-being and protection.
              </p>

              <p
                className="
                  mt-4

                  text-sm
                  leading-7

                  text-gray-500

                  sm:text-base
                "
              >
                Our approach combines direct care,
                awareness and responsible community
                engagement to encourage a culture of
                compassion towards animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="
          relative
          w-full
          overflow-hidden

          bg-[#F7FAF9]

          py-14
          sm:py-16
          lg:py-20
        "
      >
        {/* BACKGROUND DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-10

            h-64
            w-64

            rounded-full

            bg-brand-teal/[0.035]

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            bottom-0

            h-72
            w-72

            rounded-full

            bg-brand-orange/[0.035]

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-[1400px]

            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* HEADER */}

          <div
            className="
              mx-auto
              mb-10

              max-w-[700px]

              text-center
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]

                text-brand-teal

                sm:text-xs
              "
            >
              Our Approach
            </p>

            <h2
              id="approach-heading"
              className="
                mt-3

                text-3xl
                font-bold
                leading-tight

                text-brand-navy

                sm:text-4xl
              "
            >
              Caring for animals,
              <span className="text-brand-teal">
                {" "}together.
              </span>
            </h2>

            <p
              className="
                mt-4

                text-sm
                leading-7

                text-gray-600

                sm:text-base
              "
            >
              We focus on practical, compassionate
              approaches that help improve animal
              welfare while encouraging communities
              to become part of the solution.
            </p>
          </div>

          {/* =================================================
              WELFARE CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1

              gap-5

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            <WelfareCard
              icon={<HeartHandshake size={24} />}
              title="Compassionate Care"
              description="
                Supporting animals with care, dignity
                and compassion when they need it most.
              "
            />

            <WelfareCard
              icon={<Stethoscope size={24} />}
              title="Health Support"
              description="
                Promoting access to appropriate health
                support and essential veterinary care.
              "
            />

            <WelfareCard
              icon={<ShieldCheck size={24} />}
              title="Protection"
              description="
                Supporting safer environments and
                responsible protection of animals.
              "
            />

            <WelfareCard
              icon={<PawPrint size={24} />}
              title="Awareness"
              description="
                Encouraging communities to understand
                and promote responsible animal welfare.
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}

      <section
        aria-labelledby="focus-heading"
        className="
          relative
          w-full
          overflow-hidden

          bg-white

          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0

            h-72
            w-72

            rounded-full

            bg-brand-teal/[0.025]

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-[1400px]

            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* HEADER */}

          <div className="mb-10">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]

                text-brand-teal

                sm:text-xs
              "
            >
              What We Focus On
            </p>

            <h2
              id="focus-heading"
              className="
                mt-3

                text-3xl
                font-bold

                text-brand-navy

                sm:text-4xl
              "
            >
              Areas of action
            </h2>
          </div>

          {/* FOCUS GRID */}

          <div
            className="
              grid
              grid-cols-1

              gap-5

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            <FocusCard
              number="01"
              title="Animal Rescue"
              description="
                Supporting timely intervention and
                compassionate assistance for animals
                in need.
              "
            />

            <FocusCard
              number="02"
              title="Health & Vaccination"
              description="
                Encouraging appropriate healthcare,
                preventive support and vaccination.
              "
            />

            <FocusCard
              number="03"
              title="Shelter & Care"
              description="
                Promoting safe and caring environments
                for vulnerable animals.
              "
            />

            <FocusCard
              number="04"
              title="Community Awareness"
              description="
                Building awareness around responsible
                and compassionate treatment of animals.
              "
            />

            <FocusCard
              number="05"
              title="Responsible Communities"
              description="
                Encouraging people to actively
                participate in animal welfare.
              "
            />

            <FocusCard
              number="06"
              title="Long-Term Welfare"
              description="
                Supporting sustainable approaches that
                improve animal well-being over time.
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT CTA
      ===================================================== */}

      <section
        id="support"
        aria-labelledby="support-heading"
        className="
          relative
          w-full
          overflow-hidden

          bg-brand-navy

          py-14
          sm:py-16
          lg:py-20
        "
      >
        {/* DECORATIVE GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-1/2

            h-72
            w-72

            -translate-y-1/2

            rounded-full

            bg-brand-teal/10

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            bottom-0

            h-72
            w-72

            rounded-full

            bg-brand-orange/10

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-[1000px]

            px-4
            text-center

            sm:px-6
            lg:px-8
          "
        >
          {/* ICON */}

          <div
            className="
              mx-auto

              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-brand-orange/15

              text-brand-orange

              ring-1
              ring-brand-orange/20
            "
          >
            <Heart size={27} />
          </div>

          {/* HEADING */}

          <h2
            id="support-heading"
            className="
              mt-5

              text-3xl
              font-bold

              text-white

              sm:text-4xl
            "
          >
            Help us make a difference.
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4

              max-w-[650px]

              text-sm
              leading-7

              text-white/70

              sm:text-base
              sm:leading-8
            "
          >
            Your support can help create safer,
            healthier and more compassionate
            communities for animals.
          </p>

          {/* BUTTON */}

          <a
            href="/donate"
            className="
              group

              mt-7

              inline-flex

              items-center
              gap-2

              rounded-lg

              bg-brand-orange

              px-6
              py-3

              text-sm
              font-bold

              text-white

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-brand-orange-light
              hover:shadow-xl
            "
          >
            Support the Cause

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </section>
    </main>
  );
}


/* =========================================================
   WELFARE CARD
========================================================= */

function WelfareCard({
  icon,
  title,
  description,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-brand-teal/10

        bg-gradient-to-br
        from-brand-teal/[0.07]
        via-white
        to-brand-orange/[0.035]

        p-6

        shadow-[0_8px_30px_rgba(6,43,70,0.055)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:border-brand-teal/20

        hover:shadow-[0_18px_40px_rgba(6,43,70,0.11)]
      "
    >
      {/* SOFT DECORATIVE GLOW */}

      <div
        className="
          pointer-events-none

          absolute
          -right-10
          -top-10

          h-28
          w-28

          rounded-full

          bg-brand-teal/10

          blur-2xl

          transition-all
          duration-500

          group-hover:scale-150
          group-hover:bg-brand-teal/15
        "
      />

      {/* SMALL ORANGE ACCENT */}

      <div
        className="
          absolute
          right-5
          top-5

          h-1.5
          w-1.5

          rounded-full

          bg-brand-orange

          opacity-50

          transition-all
          duration-300

          group-hover:scale-150
          group-hover:opacity-100
        "
      />

      {/* ICON */}

      <div
        className="
          relative
          z-10

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-xl

          bg-brand-teal/10

          text-brand-teal

          ring-1
          ring-brand-teal/10

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:bg-brand-teal
          group-hover:text-white

          group-hover:shadow-[0_8px_20px_rgba(0,143,149,0.20)]
        "
      >
        {icon}
      </div>

      {/* TITLE */}

      <h3
        className="
          relative
          z-10

          mt-5

          text-lg
          font-bold
          leading-tight

          text-brand-navy

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
          relative
          z-10

          mt-3

          text-sm
          leading-6

          text-gray-600
        "
      >
        {description}
      </p>

      {/* BOTTOM ACCENT */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-[3px]

          origin-left

          scale-x-0

          bg-gradient-to-r
          from-brand-teal
          to-brand-orange

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />
    </article>
  );
}


/* =========================================================
   FOCUS CARD
========================================================= */

function FocusCard({
  number,
  title,
  description,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-brand-navy/10

        bg-gradient-to-br
        from-brand-navy/[0.035]
        via-white
        to-brand-teal/[0.045]

        p-6

        shadow-[0_6px_25px_rgba(6,43,70,0.045)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:border-brand-teal/20

        hover:shadow-[0_16px_38px_rgba(6,43,70,0.10)]
      "
    >
      {/* DECORATIVE CIRCLE */}

      <div
        className="
          pointer-events-none

          absolute
          -right-8
          -top-8

          h-24
          w-24

          rounded-full

          bg-brand-teal/5

          blur-xl

          transition-all
          duration-500

          group-hover:scale-150
          group-hover:bg-brand-teal/10
        "
      />

      {/* NUMBER */}

      <div
        className="
          relative
          z-10

          flex
          h-9
          w-9

          items-center
          justify-center

          rounded-lg

          bg-brand-teal/10

          text-xs
          font-bold

          text-brand-teal

          ring-1
          ring-brand-teal/10

          transition-all
          duration-300

          group-hover:bg-brand-teal
          group-hover:text-white
        "
      >
        {number}
      </div>

      {/* TITLE */}

      <h3
        className="
          relative
          z-10

          mt-5

          text-lg
          font-bold
          leading-tight

          text-brand-navy

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
          relative
          z-10

          mt-3

          text-sm
          leading-6

          text-gray-600
        "
      >
        {description}
      </p>

      {/* BOTTOM ACCENT */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-[3px]

          origin-left

          scale-x-0

          bg-gradient-to-r
          from-brand-teal
          to-brand-orange

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />
    </article>
  );
}


export default AnimalWelfare;