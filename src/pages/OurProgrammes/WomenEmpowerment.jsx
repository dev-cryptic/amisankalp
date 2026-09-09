import React, { useEffect } from "react";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function WomenEmpowerment() {
  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const title =
      "Women Empowerment Programme | Amisankalp Social Foundation";

    const description =
      "Amisankalp Social Foundation works towards women's empowerment through skills, education, livelihoods, financial awareness and community participation.";

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
      `${window.location.origin}/programmes/women-empowerment`
    );
  }, []);


  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <SectionHero
        eyebrow="Our Programmes"
        title="Empowering Women."
        subtitle="Creating opportunities for confidence, independence and growth."
        highlight="When women have access to opportunities, skills and support, families and communities can move forward together."
        description="
          Our women empowerment initiatives focus on
          building skills, strengthening livelihoods,
          encouraging education and creating opportunities
          for women to participate more actively in their
          communities.
        "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab1pxj7DlTtgE0h2odZIQf9ryAvT432elUnZQCYMavQ&s=10"
        theme="light"
        accentColor="orange"
        buttonText="Support Women Empowerment"
        buttonHref="#support"
        secondaryButtonText="Our Focus Areas"
        secondaryButtonHref="#focus"
      />


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="women-intro-heading"
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

        {/* DECORATIVE GLOWS */}

        <div
          className="
            pointer-events-none

            absolute
            -left-24
            top-10

            h-72
            w-72

            rounded-full

            bg-brand-orange/[0.055]

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -right-24
            bottom-0

            h-72
            w-72

            rounded-full

            bg-brand-teal/[0.04]

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

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                group
                relative

                overflow-hidden

                rounded-3xl

                shadow-[0_15px_45px_rgba(6,43,70,0.10)]
              "
            >

              <img
                src="/images/programmes/women-empowerment-story.jpg"
                alt="Women participating in a community empowerment initiative"
                loading="lazy"
                className="
                  h-[300px]
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105

                  sm:h-[380px]

                  lg:h-[450px]
                "
              />


              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-brand-navy/70
                  via-transparent
                  to-transparent
                "
              />


              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5

                  rounded-2xl

                  border
                  border-white/20

                  bg-brand-navy/75

                  px-5
                  py-4

                  text-white

                  shadow-xl

                  backdrop-blur-md
                "
              >

                <div
                  className="
                    text-2xl
                    font-bold

                    text-brand-orange
                  "
                >
                  Empower
                </div>

                <div
                  className="
                    mt-1

                    text-xs

                    text-white/70
                  "
                >
                  Learn • Grow • Lead
                </div>

              </div>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

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
                Women Empowerment
              </p>


              <h2
                id="women-intro-heading"
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
                Creating opportunities
                <span className="text-brand-orange">
                  {" "}for women to thrive.
                </span>
              </h2>


              <div
                className="
                  mt-5

                  h-[3px]
                  w-14

                  rounded-full

                  bg-brand-orange
                "
              />


              <p
                className="
                  mt-6

                  text-sm
                  leading-7

                  text-gray-600

                  sm:text-base
                  sm:leading-8
                "
              >
                Women play a vital role in families,
                communities and the wider economy.
                Empowerment begins by creating access
                to knowledge, skills, opportunities and
                support.
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
                Through our initiatives, we aim to
                encourage greater participation,
                confidence and economic independence
                while creating pathways for women to
                shape their own futures.
              </p>


              {/* HIGHLIGHTS */}

              <div
                className="
                  mt-7

                  grid
                  grid-cols-2

                  gap-3
                "
              >

                <MiniHighlight
                  icon={<GraduationCap size={18} />}
                  text="Skills & Education"
                />

                <MiniHighlight
                  icon={<BriefcaseBusiness size={18} />}
                  text="Livelihoods"
                />

                <MiniHighlight
                  icon={<HandCoins size={18} />}
                  text="Financial Awareness"
                />

                <MiniHighlight
                  icon={<Users size={18} />}
                  text="Community Participation"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}

      <section
        id="focus"
        aria-labelledby="women-focus-heading"
        className="
          relative
          w-full
          overflow-hidden

          bg-[#FBF9F7]

          py-14
          sm:py-16
          lg:py-20
        "
      >

        {/* BACKGROUND GLOWS */}

        <div
          className="
            pointer-events-none

            absolute
            -right-24
            -top-24

            h-80
            w-80

            rounded-full

            bg-brand-orange/[0.05]

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -bottom-24
            -left-24

            h-80
            w-80

            rounded-full

            bg-brand-teal/[0.04]

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

              max-w-[720px]

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
              What We Focus On
            </p>


            <h2
              id="women-focus-heading"
              className="
                mt-3

                text-3xl
                font-bold
                leading-tight

                text-brand-navy

                sm:text-4xl
              "
            >
              Building confidence,
              <span className="text-brand-orange">
                {" "}skills and independence.
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
              Our approach connects learning and
              opportunity with practical pathways
              towards greater independence.
            </p>

          </div>


          {/* =================================================
              IMAGE CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1

              gap-5

              md:grid-cols-2

              lg:grid-cols-4
            "
          >

            <WomenCard
              image="/images/programmes/women-skills.jpg"
              icon={<GraduationCap size={22} />}
              title="Skills Development"
              description="
                Supporting opportunities for women to
                develop practical skills and strengthen
                their confidence.
              "
              color="orange"
            />


            <WomenCard
              image="/images/programmes/women-livelihood.jpg"
              icon={<BriefcaseBusiness size={22} />}
              title="Livelihood Opportunities"
              description="
                Encouraging pathways that can help women
                build sustainable sources of income and
                greater economic independence.
              "
              color="teal"
            />


            <WomenCard
              image="/images/programmes/women-entrepreneurship.jpg"
              icon={<Store size={22} />}
              title="Entrepreneurship"
              description="
                Encouraging women to explore enterprise,
                self-employment and opportunities to
                turn skills into livelihoods.
              "
              color="orange"
            />


            <WomenCard
              image="/images/programmes/women-awareness.jpg"
              icon={<ShieldCheck size={22} />}
              title="Awareness & Participation"
              description="
                Promoting awareness, confidence and
                participation so women can play a stronger
                role in their communities.
              "
              color="teal"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          EMPOWERMENT JOURNEY
      ===================================================== */}

      <section
        aria-labelledby="women-journey-heading"
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

            {/* LEFT IMAGE */}

            <div
              className="
                group
                relative

                min-h-[380px]

                overflow-hidden

                rounded-3xl

                bg-brand-navy

                shadow-[0_15px_45px_rgba(6,43,70,0.10)]
              "
            >

              <img
                src="/images/programmes/women-community.jpg"
                alt="Women participating in a community programme"
                loading="lazy"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />


              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-brand-navy/80
                  via-brand-navy/10
                  to-transparent
                "
              />


              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  right-6

                  sm:left-8
                  sm:right-8
                "
              >

                <div
                  className="
                    inline-flex

                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/20

                    bg-white/10

                    px-3
                    py-1.5

                    text-xs
                    font-semibold

                    text-white

                    backdrop-blur-md
                  "
                >
                  <HeartHandshake size={14} />

                  Women supporting women
                </div>


                <h3
                  className="
                    mt-3

                    text-2xl
                    font-bold

                    text-white

                    sm:text-3xl
                  "
                >
                  Opportunity creates the foundation for independence.
                </h3>

              </div>

            </div>


            {/* RIGHT CONTENT */}

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
                Our Approach
              </p>


              <h2
                id="women-journey-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold
                  leading-tight

                  text-brand-navy

                  sm:text-4xl
                "
              >
                From learning to
                <span className="text-brand-orange">
                  {" "}greater independence.
                </span>
              </h2>


              <p
                className="
                  mt-5

                  max-w-[600px]

                  text-sm
                  leading-7

                  text-gray-600

                  sm:text-base
                  sm:leading-8
                "
              >
                Empowerment is a journey. We focus on
                creating practical opportunities that can
                help women build knowledge, confidence
                and the ability to make informed choices
                about their futures.
              </p>


              <div className="mt-8 space-y-5">

                <JourneyItem
                  number="01"
                  title="Learn"
                  description="
                    Create access to knowledge, education
                    and practical skills.
                  "
                />

                <JourneyItem
                  number="02"
                  title="Build"
                  description="
                    Strengthen confidence and develop
                    pathways towards sustainable livelihoods.
                  "
                />

                <JourneyItem
                  number="03"
                  title="Lead"
                  description="
                    Encourage women to participate,
                    contribute and take an active role
                    within their communities.
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT AREAS
      ===================================================== */}

      <section
        aria-labelledby="women-impact-heading"
        className="
          relative
          w-full
          overflow-hidden

          bg-[#F8FAFA]

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

          {/* HEADER */}

          <div
            className="
              mb-10

              max-w-[700px]
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
              Why It Matters
            </p>


            <h2
              id="women-impact-heading"
              className="
                mt-3

                text-3xl
                font-bold

                text-brand-navy

                sm:text-4xl
              "
            >
              Empowerment that can
              <span className="text-brand-orange">
                {" "}strengthen communities.
              </span>
            </h2>

          </div>


          {/* IMPACT CARDS */}

          <div
            className="
              grid
              grid-cols-1

              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >

            <ImpactCard
              icon={<Lightbulb size={23} />}
              title="Confidence & Skills"
              description="
                Supporting women in developing knowledge,
                practical skills and greater confidence.
              "
            />


            <ImpactCard
              icon={<BriefcaseBusiness size={23} />}
              title="Economic Opportunity"
              description="
                Encouraging pathways towards livelihoods,
                enterprise and greater economic participation.
              "
            />


            <ImpactCard
              icon={<Users size={23} />}
              title="Stronger Communities"
              description="
                Encouraging women's participation can
                contribute to more inclusive and resilient
                communities.
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

        {/* GLOWS */}

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

            bg-brand-orange/10

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

            bg-brand-teal/10

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
            <HeartHandshake size={28} />
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
            Help create more opportunities for women.
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
            Your support can contribute towards initiatives
            that create opportunities for women to learn,
            develop skills, strengthen livelihoods and
            participate more actively in their communities.
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
            Support Women Empowerment

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
   MINI HIGHLIGHT
========================================================= */

function MiniHighlight({
  icon,
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        rounded-xl

        border
        border-brand-orange/10

        bg-brand-orange/[0.035]

        px-4
        py-3
      "
    >

      <div
        className="
          flex
          h-8
          w-8
          shrink-0

          items-center
          justify-center

          rounded-lg

          bg-brand-orange/10

          text-brand-orange
        "
      >
        {icon}
      </div>


      <span
        className="
          text-xs
          font-semibold

          text-brand-navy
        "
      >
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   WOMEN CARD
========================================================= */

function WomenCard({
  image,
  icon,
  title,
  description,
  color = "orange",
}) {

  const themes = {

    orange: {
      icon: "bg-brand-orange",
      accent: "bg-brand-orange",
      glow: "bg-brand-orange/10",
      hover: "group-hover:text-brand-orange",
    },

    teal: {
      icon: "bg-brand-teal",
      accent: "bg-brand-teal",
      glow: "bg-brand-teal/10",
      hover: "group-hover:text-brand-teal",
    },

  };

  const theme =
    themes[color] || themes.orange;


  return (
    <article
      className="
        group
        relative

        overflow-hidden

        rounded-2xl

        border
        border-gray-100

        bg-gradient-to-br
        from-white
        via-white
        to-brand-orange/[0.045]

        shadow-[0_8px_28px_rgba(6,43,70,0.055)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:shadow-[0_18px_42px_rgba(6,43,70,0.12)]
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative

          h-[190px]

          overflow-hidden

          bg-brand-navy
        "
      >

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-700

            group-hover:scale-110
          "
        />


        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-brand-navy/60
            via-transparent
            to-transparent
          "
        />


        {/* ICON */}

        <div
          className={`
            absolute
            left-5
            top-5

            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-xl

            ${theme.icon}

            text-white

            shadow-[0_8px_20px_rgba(0,0,0,0.16)]

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          {icon}
        </div>


        {/* LABEL */}

        <div
          className="
            absolute
            bottom-4
            left-5

            text-xs
            font-semibold

            text-white/90
          "
        >
          Women Empowerment
        </div>

      </div>


      {/* CONTENT */}

      <div className="relative p-5 sm:p-6">

        {/* GLOW */}

        <div
          className={`
            pointer-events-none

            absolute
            -right-10
            -top-10

            h-24
            w-24

            rounded-full

            ${theme.glow}

            blur-2xl

            transition-transform
            duration-500

            group-hover:scale-150
          `}
        />


        <h3
          className={`
            relative
            z-10

            text-lg
            font-bold

            text-brand-navy

            transition-colors
            duration-300

            ${theme.hover}
          `}
        >
          {title}
        </h3>


        <p
          className="
            relative
            z-10

            mt-3

            min-h-[72px]

            text-sm
            leading-6

            text-gray-600
          "
        >
          {description}
        </p>


        {/* ACCENT */}

        <div
          className={`
            relative
            z-10

            mt-5

            h-[2px]
            w-10

            ${theme.accent}

            rounded-full

            transition-all
            duration-500

            group-hover:w-16
          `}
        />

      </div>

    </article>
  );
}


/* =========================================================
   JOURNEY ITEM
========================================================= */

function JourneyItem({
  number,
  title,
  description,
}) {
  return (
    <div
      className="
        group

        flex
        gap-4
      "
    >

      <div
        className="
          flex
          h-10
          w-10
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-brand-orange/10

          text-xs
          font-bold

          text-brand-orange

          transition-all
          duration-300

          group-hover:bg-brand-orange
          group-hover:text-white
        "
      >
        {number}
      </div>


      <div>

        <h3
          className="
            text-base
            font-bold

            text-brand-navy
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-1

            text-sm
            leading-6

            text-gray-500
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   IMPACT CARD
========================================================= */

function ImpactCard({
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
        border-brand-orange/10

        bg-gradient-to-br
        from-brand-orange/[0.035]
        via-white
        to-brand-teal/[0.045]

        p-6

        shadow-[0_6px_25px_rgba(6,43,70,0.045)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:border-brand-orange/20

        hover:shadow-[0_16px_38px_rgba(6,43,70,0.10)]
      "
    >

      {/* GLOW */}

      <div
        className="
          pointer-events-none

          absolute
          -right-8
          -top-8

          h-24
          w-24

          rounded-full

          bg-brand-orange/5

          blur-xl

          transition-transform
          duration-500

          group-hover:scale-150
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

          bg-brand-orange/10

          text-brand-orange

          ring-1
          ring-brand-orange/10

          transition-all
          duration-300

          group-hover:bg-brand-orange
          group-hover:text-white
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

          text-brand-navy

          transition-colors
          duration-300

          group-hover:text-brand-orange
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
          from-brand-orange
          to-brand-teal

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />

    </article>
  );
}


export default WomenEmpowerment;