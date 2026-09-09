import React, { useEffect } from "react";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  HandCoins,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Store,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function Livelihood() {
  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const title =
      "Livelihood Programme | Amisankalp Social Foundation";

    const description =
      "Amisankalp Social Foundation supports sustainable livelihoods through skill development, entrepreneurship, financial inclusion and economic opportunities.";

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
      `${window.location.origin}/programmes/livelihood`
    );
  }, []);

  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <SectionHero
        eyebrow="Our Programmes"
        title="Creating Sustainable Livelihoods."
        subtitle="Turning skills and opportunities into greater independence."
        highlight="A stronger livelihood can create a stronger future for families and communities."
        description="
          We support individuals and communities through
          skill development, entrepreneurship and access
          to opportunities that can contribute to sustainable
          economic independence.
        "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAGdLj5yOMAb5lnpFffFk171_VQPjJUIDJK3v-Jl3fFb0Ar50O5B2jWVT&s=10"
        theme="light"
        accentColor="orange"
        buttonText="Support Livelihoods"
        buttonHref="#support"
        secondaryButtonText="Our Focus Areas"
        secondaryButtonHref="#focus"
      />


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="livelihood-intro-heading"
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

        {/* BACKGROUND DECORATION */}

        <div
          className="
            pointer-events-none

            absolute
            -left-24
            top-10

            h-72
            w-72

            rounded-full

            bg-brand-orange/[0.035]

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

            bg-brand-teal/[0.035]

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
                src="/images/programmes/livelihood-story.jpg"
                alt="Community member working towards a sustainable livelihood"
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


              {/* OVERLAY */}

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

                    text-brand-orange-light
                  "
                >
                  Skills
                </div>

                <div
                  className="
                    mt-1

                    text-xs

                    text-white/70
                  "
                >
                  Learn • Earn • Grow
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
                Livelihood & Economic Opportunity
              </p>


              <h2
                id="livelihood-intro-heading"
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
                Creating pathways to
                <span className="text-brand-orange">
                  {" "}independence.
                </span>
              </h2>


              <div
                className="
                  mt-5

                  h-[3px]
                  w-14

                  rounded-full

                  bg-brand-teal
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
                A sustainable livelihood can give
                individuals and families greater
                confidence and independence. We work
                to create opportunities where people
                can build useful skills and strengthen
                their economic prospects.
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
                Our approach brings together skill
                development, entrepreneurship, financial
                awareness and market opportunities to
                help people move towards more sustainable
                sources of income.
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
                  icon={<BriefcaseBusiness size={18} />}
                  text="Skill Training"
                />

                <MiniHighlight
                  icon={<Lightbulb size={18} />}
                  text="Entrepreneurship"
                />

                <MiniHighlight
                  icon={<HandCoins size={18} />}
                  text="Financial Inclusion"
                />

                <MiniHighlight
                  icon={<Store size={18} />}
                  text="Market Linkages"
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
        aria-labelledby="livelihood-focus-heading"
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

        {/* DECORATIVE GLOWS */}

        <div
          className="
            pointer-events-none

            absolute
            -right-24
            -top-24

            h-80
            w-80

            rounded-full

            bg-brand-orange/[0.045]

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

            bg-brand-teal/[0.035]

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
              What We Do
            </p>


            <h2
              id="livelihood-focus-heading"
              className="
                mt-3

                text-3xl
                font-bold
                leading-tight

                text-brand-navy

                sm:text-4xl
              "
            >
              Building stronger
              <span className="text-brand-orange">
                {" "}livelihoods.
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
              We focus on practical pathways that help
              people develop skills, explore opportunities
              and strengthen their economic independence.
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

            <LivelihoodCard
              image="/images/programmes/skill-training.jpg"
              icon={<BriefcaseBusiness size={22} />}
              title="Skill Training"
              description="
                Developing practical and relevant skills
                that can support future employment and
                income opportunities.
              "
              color="teal"
            />


            <LivelihoodCard
              image="/images/programmes/entrepreneurship.jpg"
              icon={<Lightbulb size={22} />}
              title="Entrepreneurship"
              description="
                Encouraging individuals to explore
                small businesses and entrepreneurial
                opportunities.
              "
              color="orange"
            />


            <LivelihoodCard
              image="/images/programmes/financial-inclusion.jpg"
              icon={<HandCoins size={22} />}
              title="Financial Inclusion"
              description="
                Promoting financial awareness and
                access to tools that can support
                economic participation.
              "
              color="green"
            />


            <LivelihoodCard
              image="/images/programmes/market-linkages.jpg"
              icon={<Store size={22} />}
              title="Market Linkages"
              description="
                Helping connect skills, products and
                enterprises with wider opportunities.
              "
              color="teal"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LIVELIHOOD JOURNEY
      ===================================================== */}

      <section
        aria-labelledby="livelihood-journey-heading"
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
                Our Approach
              </p>


              <h2
                id="livelihood-journey-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold
                  leading-tight

                  text-brand-navy

                  sm:text-4xl
                "
              >
                From skills to
                <span className="text-brand-orange">
                  {" "}opportunity.
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
                Sustainable livelihoods are built over
                time. Our approach supports people through
                different stages of their journey towards
                greater economic opportunity.
              </p>


              <div className="mt-8 space-y-5">

                <JourneyItem
                  number="01"
                  title="Learn"
                  description="
                    Develop practical skills and knowledge
                    relevant to available opportunities.
                  "
                />

                <JourneyItem
                  number="02"
                  title="Build"
                  description="
                    Turn skills into employment,
                    enterprise or income-generating
                    opportunities.
                  "
                />

                <JourneyItem
                  number="03"
                  title="Grow"
                  description="
                    Strengthen livelihoods through better
                    resources, connections and market access.
                  "
                />

              </div>

            </div>


            {/* RIGHT IMAGE */}

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
                src="/images/programmes/livelihood-community.jpg"
                alt="Community members working together"
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
                  <Users size={14} />

                  Opportunity through skills
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
                  Stronger livelihoods. Greater independence.
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT PILLARS
      ===================================================== */}

      <section
        aria-labelledby="impact-heading"
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
              mb-10

              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

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
                Our Impact
              </p>


              <h2
                id="impact-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold

                  text-brand-navy

                  sm:text-4xl
                "
              >
                What sustainable opportunity can create.
              </h2>

            </div>


            <p
              className="
                max-w-[500px]

                text-sm
                leading-6

                text-gray-500
              "
            >
              We believe livelihood programmes should
              create pathways that can continue beyond
              individual interventions.
            </p>

          </div>


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
              icon={<LineChart size={23} />}
              title="Economic Resilience"
              description="
                Supporting people in developing more
                sustainable and adaptable sources of income.
              "
            />

            <ImpactCard
              icon={<Building2 size={23} />}
              title="Local Enterprise"
              description="
                Encouraging local businesses and
                community-led economic activity.
              "
            />

            <ImpactCard
              icon={<HeartHandshake size={23} />}
              title="Community Strength"
              description="
                Helping individuals and communities
                build greater confidence and independence.
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

        {/* DECORATIVE GLOWS */}

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

              text-brand-orange-light

              ring-1
              ring-brand-orange/20
            "
          >
            <BriefcaseBusiness size={27} />
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
            Help create sustainable opportunities.
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
            Your support can help people gain skills,
            explore opportunities and work towards
            greater economic independence.
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
            Support Livelihoods

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
        border-brand-teal/10

        bg-brand-teal/[0.035]

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

          bg-brand-teal/10

          text-brand-teal
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
   LIVELIHOOD CARD
========================================================= */

function LivelihoodCard({
  image,
  icon,
  title,
  description,
  color = "teal",
}) {

  const themes = {

    teal: {
      icon: "bg-brand-teal",
      accent: "bg-brand-teal",
      text: "text-brand-teal",
      glow: "bg-brand-teal/10",
    },

    orange: {
      icon: "bg-brand-orange",
      accent: "bg-brand-orange",
      text: "text-brand-orange",
      glow: "bg-brand-orange/10",
    },

    green: {
      icon: "bg-brand-green",
      accent: "bg-brand-green",
      text: "text-brand-green",
      glow: "bg-brand-green/10",
    },

  };

  const theme =
    themes[color] || themes.teal;


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
        to-brand-orange/[0.04]

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
          Livelihood
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
          className="
            relative
            z-10

            text-lg
            font-bold

            text-brand-navy

            transition-colors
            duration-300

            group-hover:text-brand-teal
          "
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

      {/* DECORATIVE GLOW */}

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

          bg-brand-teal/10

          text-brand-teal

          ring-1
          ring-brand-teal/10

          transition-all
          duration-300

          group-hover:bg-brand-teal
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


export default Livelihood;