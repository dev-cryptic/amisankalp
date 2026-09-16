import React, { useEffect } from "react";

import {
  ArrowRight,
  Droplets,
  Globe2,
  HeartHandshake,
  Leaf,
  Sprout,
  TreePine,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function Trees() {
  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const title =
      "Tree Plantation Programme | Amisankalp Social Foundation";

    const description =
      "Amisankalp Social Foundation promotes tree plantation, environmental awareness and community participation to create greener and healthier communities.";

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
      `${window.location.origin}/programmes/tree-plantation`
    );
  }, []);


  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <SectionHero
        eyebrow="Our Programmes"
        title="Growing a Greener Future."
        subtitle="Planting trees today for healthier communities tomorrow."
        highlight="Every tree can become part of a healthier, greener and more resilient environment."
        description="
          
        "
        image="/images/programmes/tree-plantation.jpeg"
        theme="light"
        accentColor="green"
        buttonText="Support Tree Plantation"
        buttonHref="#support"
        secondaryButtonText="Our Focus Areas"
        secondaryButtonHref="#focus"
      />


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="trees-intro-heading"
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

            bg-brand-green/[0.055]

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
                src="/images/programmes/trees-story.jpg"
                alt="Tree plantation and environmental restoration"
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

                    text-brand-green
                  "
                >
                  Grow Green
                </div>

                <div
                  className="
                    mt-1

                    text-xs

                    text-white/70
                  "
                >
                  Plant • Protect • Restore
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
                Tree Plantation & Environment
              </p>


              <h2
                id="trees-intro-heading"
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
                Growing greener
                <span className="text-brand-green">
                  {" "}communities.
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
                Trees are an important part of healthy
                environments and resilient communities.
                Our plantation initiatives aim to create
                greener spaces while encouraging people
                to take an active role in environmental
                stewardship.
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
                We focus not only on planting trees but
                also on awareness, community participation
                and caring for planted areas so that
                environmental action can become a lasting
                part of community life.
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
                  icon={<TreePine size={18} />}
                  text="Tree Plantation"
                />

                <MiniHighlight
                  icon={<Leaf size={18} />}
                  text="Green Spaces"
                />

                <MiniHighlight
                  icon={<Users size={18} />}
                  text="Community Action"
                />

                <MiniHighlight
                  icon={<Globe2 size={18} />}
                  text="Environment Awareness"
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
        aria-labelledby="trees-focus-heading"
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

            bg-brand-green/[0.055]

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
              id="trees-focus-heading"
              className="
                mt-3

                text-3xl
                font-bold
                leading-tight

                text-brand-navy

                sm:text-4xl
              "
            >
              Creating greener
              <span className="text-brand-green">
                {" "}spaces together.
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
              Our environmental initiatives combine
              plantation, community participation and
              awareness to encourage long-term care
              for green spaces.
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

            <TreeCard
              image="/images/programmes/tree-plantation.jpg"
              icon={<TreePine size={22} />}
              title="Tree Plantation"
              description="
                Creating greener spaces by encouraging
                tree planting in suitable community areas.
              "
              color="green"
            />


            <TreeCard
              image="/images/programmes/community-plantation.jpg"
              icon={<Users size={22} />}
              title="Community Participation"
              description="
                Bringing people together to participate
                in environmental initiatives and action.
              "
              color="teal"
            />


            <TreeCard
              image="/images/programmes/green-awareness.jpg"
              icon={<Leaf size={22} />}
              title="Environmental Awareness"
              description="
                Encouraging greater understanding of
                trees, nature and responsible environmental
                practices.
              "
              color="green"
            />


            <TreeCard
              image="/images/programmes/tree-care.jpg"
              icon={<Droplets size={22} />}
              title="Tree Care"
              description="
                Promoting continued care and protection
                of planted trees and green spaces.
              "
              color="teal"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          GREEN JOURNEY
      ===================================================== */}

      <section
        aria-labelledby="trees-journey-heading"
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

            {/* LEFT CONTENT */}

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
                id="trees-journey-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold
                  leading-tight

                  text-brand-navy

                  sm:text-4xl
                "
              >
                Planting is only
                <span className="text-brand-green">
                  {" "}the beginning.
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
                A meaningful plantation initiative goes
                beyond putting a tree in the ground.
                Awareness, participation and continued
                care all contribute to creating lasting
                environmental value.
              </p>


              <div className="mt-8 space-y-5">

                <JourneyItem
                  number="01"
                  title="Plant"
                  description="
                    Identify suitable spaces and encourage
                    responsible tree plantation.
                  "
                />

                <JourneyItem
                  number="02"
                  title="Participate"
                  description="
                    Involve communities and individuals
                    in environmental action.
                  "
                />

                <JourneyItem
                  number="03"
                  title="Protect"
                  description="
                    Encourage continued care and protection
                    of planted trees and green spaces.
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
                src="/images/programmes/trees-community.jpg"
                alt="Community members participating in tree plantation"
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

                  Community-led action
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
                  Small actions can grow into lasting change.
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENVIRONMENTAL IMPACT
      ===================================================== */}

      <section
        aria-labelledby="environment-heading"
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
              id="environment-heading"
              className="
                mt-3

                text-3xl
                font-bold

                text-brand-navy

                sm:text-4xl
              "
            >
              Growing a healthier
              <span className="text-brand-green">
                {" "}environment.
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
              icon={<Leaf size={23} />}
              title="Greener Communities"
              description="
                Supporting the creation and care of
                greener spaces where communities live,
                work and gather.
              "
            />


            <ImpactCard
              icon={<Droplets size={23} />}
              title="Environmental Care"
              description="
                Encouraging people to understand and
                care for the natural environment around
                them.
              "
            />


            <ImpactCard
              icon={<Globe2 size={23} />}
              title="Long-Term Thinking"
              description="
                Building environmental awareness that
                encourages responsible choices for
                the future.
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

            bg-brand-green/10

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

              bg-brand-green/15

              text-brand-green

              ring-1
              ring-brand-green/20
            "
          >
            <Sprout size={28} />
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
            Help grow a greener future.
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
            Your support can help create greener spaces,
            encourage environmental awareness and
            strengthen community participation in
            tree plantation initiatives.
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
            Support Tree Plantation

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
        border-brand-green/10

        bg-brand-green/[0.035]

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

          bg-brand-green/10

          text-brand-green
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
   TREE CARD
========================================================= */

function TreeCard({
  image,
  icon,
  title,
  description,
  color = "green",
}) {

  const themes = {

    green: {
      icon: "bg-brand-green",
      accent: "bg-brand-green",
      text: "text-brand-green",
      glow: "bg-brand-green/10",
    },

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

  };

  const theme =
    themes[color] || themes.green;


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
        to-brand-green/[0.045]

        shadow-[0_8px_28px_rgba(6,43,70,0.055)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:shadow-[0_18px_42px_rgba(6,43,70,0.12)]
      "
    >

      {/* =================================================
          IMAGE
      ================================================= */}

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


        {/* IMAGE OVERLAY */}

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
          Tree Plantation
        </div>

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

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

            group-hover:text-brand-green
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

          bg-brand-green/10

          text-xs
          font-bold

          text-brand-green

          transition-all
          duration-300

          group-hover:bg-brand-green
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
        border-brand-green/10

        bg-gradient-to-br
        from-brand-green/[0.035]
        via-white
        to-brand-teal/[0.045]

        p-6

        shadow-[0_6px_25px_rgba(6,43,70,0.045)]

        transition-all
        duration-500

        hover:-translate-y-1.5

        hover:border-brand-green/20

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

          bg-brand-green/5

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

          bg-brand-green/10

          text-brand-green

          ring-1
          ring-brand-green/10

          transition-all
          duration-300

          group-hover:bg-brand-green
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

          group-hover:text-brand-green
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
          from-brand-green
          to-brand-teal

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />

    </article>
  );
}


export default Trees;