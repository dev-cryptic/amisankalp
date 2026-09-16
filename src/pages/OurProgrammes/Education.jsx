import React, { useEffect } from "react";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Laptop,
  School,
  Sparkles,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function Education() {
  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const title =
      "Education Programme | Amisankalp Social Foundation";

    const description =
      "Amisankalp Social Foundation works to improve access to quality education, digital learning, scholarships and skill development for children and young people.";

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

    /* CANONICAL */

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
      `${window.location.origin}/programmes/education`
    );
  }, []);


  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <SectionHero
        eyebrow="Our Programmes"
        title="Empowering Through Education."
        subtitle="Creating opportunities to learn, grow and dream."
        highlight="Every child deserves the chance to build a brighter future."
        description="
          
        "
        image="/images/programmes/education.jpeg"

        theme="light"
        accentColor="teal"

        buttonText="Support Education"
        buttonHref="#support"

        secondaryButtonText="Our Focus Areas"
        secondaryButtonHref="#focus"
      />


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="education-intro-heading"
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

        {/* DECORATIVE CIRCLE */}

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-10

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
                src="/images/programmes/education-story.jpg"
                alt="Children learning together"
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
                  from-brand-navy/60
                  via-transparent
                  to-transparent
                "
              />


              {/* FLOATING STAT */}

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

                    text-brand-teal-light
                  "
                >
                  Learn
                </div>

                <div
                  className="
                    mt-1

                    text-xs

                    text-white/70
                  "
                >
                  Grow • Create • Lead
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
                Education & Learning
              </p>


              <h2
                id="education-intro-heading"
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
                Opening doors through
                <span className="text-brand-teal">
                  {" "}learning.
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
                Education can create opportunities that
                extend far beyond the classroom. We aim
                to support children and young people by
                helping make learning more accessible,
                engaging and meaningful.
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
                Our work combines educational support,
                digital learning, scholarships and
                skill development to encourage confidence,
                independence and lifelong learning.
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
                  icon={<BookOpen size={18} />}
                  text="Accessible Learning"
                />

                <MiniHighlight
                  icon={<Laptop size={18} />}
                  text="Digital Skills"
                />

                <MiniHighlight
                  icon={<GraduationCap size={18} />}
                  text="Scholarships"
                />

                <MiniHighlight
                  icon={<Sparkles size={18} />}
                  text="Future Skills"
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
        aria-labelledby="education-focus-heading"
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
            right-[-100px]
            top-[-100px]

            h-80
            w-80

            rounded-full

            bg-brand-teal/[0.04]

            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            left-[-100px]

            h-80
            w-80

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
              What We Do
            </p>


            <h2
              id="education-focus-heading"
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
              <span className="text-brand-teal">
                {" "}learning pathways.
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
              Our education initiatives address different
              stages of learning and help create pathways
              towards greater opportunity.
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

            <EducationCard
              image="/images/programmes/education-school.jpg"
              icon={<School size={22} />}
              title="School Support"
              description="
                Supporting children with educational
                resources and opportunities to learn.
              "
              color="teal"
            />


            <EducationCard
              image="/images/programmes/education-digital.jpg"
              icon={<Laptop size={22} />}
              title="Digital Learning"
              description="
                Helping young learners access digital
                tools and develop essential skills.
              "
              color="teal"
            />


            <EducationCard
              image="/images/programmes/education-scholarship.jpg"
              icon={<GraduationCap size={22} />}
              title="Scholarships"
              description="
                Supporting learners with opportunities
                to continue their education.
              "
              color="orange"
            />


            <EducationCard
              image="/images/programmes/education-skills.jpg"
              icon={<Sparkles size={22} />}
              title="Skill Development"
              description="
                Encouraging practical skills that can
                support future opportunities.
              "
              color="green"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING JOURNEY
      ===================================================== */}

      <section
        aria-labelledby="journey-heading"
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
                id="journey-heading"
                className="
                  mt-3

                  text-3xl
                  font-bold
                  leading-tight

                  text-brand-navy

                  sm:text-4xl
                "
              >
                Supporting every step
                <span className="text-brand-teal">
                  {" "}of the journey.
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
                Meaningful education is more than access
                to a classroom. It is about creating an
                environment where learners can develop
                confidence, curiosity and practical skills.
              </p>


              <div className="mt-8 space-y-5">

                <JourneyItem
                  number="01"
                  title="Access"
                  description="
                    Helping create opportunities for
                    children to participate in learning.
                  "
                />

                <JourneyItem
                  number="02"
                  title="Engagement"
                  description="
                    Encouraging active, meaningful and
                    enjoyable learning experiences.
                  "
                />

                <JourneyItem
                  number="03"
                  title="Growth"
                  description="
                    Supporting skills and confidence
                    that can continue beyond school.
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
                src="/images/programmes/education-learning.jpg"
                alt="Students learning together"
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
                  from-brand-navy/75
                  via-brand-navy/15
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

                  Learning with purpose
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
                  Knowledge creates possibility.
                </h3>

              </div>

            </div>

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

          <div
            className="
              mx-auto

              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-brand-teal/15

              text-brand-teal-light

              ring-1
              ring-brand-teal/20
            "
          >
            <GraduationCap size={28} />
          </div>


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
            Help create brighter opportunities.
          </h2>


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
            Your support can help children and young
            people access learning opportunities,
            resources and skills for their future.
          </p>


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
            Support Education

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
   EDUCATION CARD
========================================================= */

function EducationCard({
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
        to-brand-teal/[0.045]

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


        {/* IMAGE LABEL */}

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
          Education
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

      {/* NUMBER */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0

          items-center
          justify-center

          rounded-xl

          bg-brand-teal/10

          text-xs
          font-bold

          text-brand-teal

          transition-all
          duration-300

          group-hover:bg-brand-teal
          group-hover:text-white
        "
      >
        {number}
      </div>


      {/* CONTENT */}

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


export default Education;