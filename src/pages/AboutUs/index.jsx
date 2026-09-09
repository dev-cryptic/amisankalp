

import React, { useEffect } from "react";

import {
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  Mail,
  Play,
  Target,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Users,
  
} from "lucide-react";


import SectionHero from "../../components/SectionHero";
import LeaderCard from "../../components/LeaderCard";


function AboutUs() {

  /* =====================================================
     ABOUT US HERO VALUES
  ===================================================== */

  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We put people and communities at the centre of everything we do.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "We believe in transparency, honesty and accountability.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "We focus on sustainable solutions that create real change.",
    },
    {
      icon: HeartHandshake,
      title: "Inclusion",
      description:
        "We respect diversity and promote equal opportunities.",
    },
  ];


  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {

    const title =
      "About Us | Amisankalp Social Foundation";

    const description =
      "Learn about Amisankalp Social Foundation, our story, values and commitment to creating meaningful and sustainable change through community-focused initiatives.";

    document.title = title;


    // Description
    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      "content",
      description
    );


    // Robots
    let robots =
      document.querySelector(
        'meta[name="robots"]'
      );

    if (!robots) {
      robots =
        document.createElement("meta");

      robots.setAttribute(
        "name",
        "robots"
      );

      document.head.appendChild(
        robots
      );
    }

    robots.setAttribute(
      "content",
      "index, follow"
    );


    // Canonical
    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/about-us`
    );


    // Open Graph
    const setOG = (property, content) => {

      let element =
        document.querySelector(
          `meta[property="${property}"]`
        );

      if (!element) {

        element =
          document.createElement("meta");

        element.setAttribute(
          "property",
          property
        );

        document.head.appendChild(
          element
        );
      }

      element.setAttribute(
        "content",
        content
      );
    };


    setOG(
      "og:title",
      title
    );

    setOG(
      "og:description",
      description
    );

    setOG(
      "og:type",
      "website"
    );

    setOG(
      "og:url",
      `${window.location.origin}/about-us`
    );


    // Twitter
    const setTwitter = (name, content) => {

      let element =
        document.querySelector(
          `meta[name="${name}"]`
        );

      if (!element) {

        element =
          document.createElement("meta");

        element.setAttribute(
          "name",
          name
        );

        document.head.appendChild(
          element
        );
      }

      element.setAttribute(
        "content",
        content
      );
    };


    setTwitter(
      "twitter:card",
      "summary_large_image"
    );

    setTwitter(
      "twitter:title",
      title
    );

    setTwitter(
      "twitter:description",
      description
    );

  }, []);


  return (
    <main>

      {/* =====================================================
          ABOUT US HERO
      ===================================================== */}

      <SectionHero
      eyebrow="Who We Are"
title="About Us"
        subtitle="Driven by compassion. Guided by values."
        highlight="Committed to lasting change."
        image="https://static.vecteezy.com/system/resources/thumbnails/056/690/718/small/human-connection-highlighting-an-ngo-mission-blending-symbolism-of-hands-with-the-globe-promoting-collaboration-transformative-power-of-collective-efforts-on-global-scale-photo.jpg"
        values={values}
      />


      {/* =====================================================
    OUR STORY
===================================================== */}

      <section
        aria-labelledby="our-story-heading"
        id="our-story"
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
      relative
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
        items-center

        gap-10

        lg:grid-cols-2
        lg:gap-16
        xl:gap-20
      "
          >

            {/* =================================================
          LEFT CONTENT
      ================================================= */}

            <div className="max-w-[600px]">

              {/* EYEBROW */}

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
                Our Story
              </p>


              {/* HEADING */}

              <h2
                id="our-story-heading"
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
                Our Story
              </h2>


              {/* ACCENT LINE */}

              <div
                className="
            mt-4

            h-[3px]
            w-11

            rounded-full

            bg-brand-teal

            sm:w-12
          "
              />


              {/* DESCRIPTION */}

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
                Amisankalp Social Foundation was born out of a
                simple belief — that every individual deserves
                the opportunity to live a life of dignity and
                self-respect.
              </p>


              <p
                className="
            mt-4

            text-sm
            leading-7

            text-gray-500

            sm:text-base
            sm:leading-8
          "
              >
                Since our inception, we have been working at
                the grassroots level to create sustainable
                change in the lives of children, families and
                communities across India.
              </p>


              {/* CTA */}

              <a
                href="/about-us"
                className="
            group
            mt-6

            inline-flex
            items-center
            gap-2

            rounded-lg

            border
            border-brand-navy/20

            bg-white

            px-4
            py-2.5

            text-xs
            font-semibold

            text-brand-navy

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-brand-teal
            hover:bg-brand-teal
            hover:text-white

            sm:px-5
            sm:py-3
            sm:text-sm
          "
              >
                Read More Our Journey

                <ArrowRight
                  size={16}
                  className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
                />
              </a>

            </div>


            {/* =================================================
          RIGHT IMAGE
      ================================================= */}

            <div className="relative">

              <div
                className="
            group
            relative

            aspect-[16/9]

            overflow-hidden

            rounded-2xl

            border
            border-brand-navy/10

            bg-brand-navy

            shadow-[0_12px_35px_rgba(6,43,70,0.12)]
          "
              >

                <img
                  src="/images/our-story.jpg"
                  alt="Children learning together as part of Amisankalp's community work"
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


                {/* IMAGE OVERLAY */}

                <div
                  className="
              absolute
              inset-0

              bg-gradient-to-t
              from-brand-navy/75
              via-brand-navy/10
              to-transparent
            "
                />


                {/* PLAY BUTTON */}

                <button
                  type="button"
                  aria-label="Play Our Journey in Motion"
                  className="
              absolute
              left-1/2
              top-1/2

              flex
              h-14
              w-14

              -translate-x-1/2
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              bg-white/95

              text-brand-navy

              shadow-[0_8px_30px_rgba(0,0,0,0.20)]

              transition-all
              duration-300

              hover:scale-110
              hover:bg-brand-teal
              hover:text-white

              sm:h-16
              sm:w-16
            "
                >
                  <Play
                    size={20}
                    fill="currentColor"
                    className="ml-0.5"
                  />
                </button>


                {/* VIDEO TITLE */}

                <div
                  className="
              absolute
              bottom-5
              left-5
              right-5

              sm:bottom-6
              sm:left-6
              sm:right-6
            "
                >
                  <p
                    className="
                text-sm
                font-semibold
                text-white

                sm:text-base
              "
                  >
                    Our Journey in Motion
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section
        aria-labelledby="values-heading"
        id="our-value"
        className="
          w-full
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

          <div className="mb-10">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]

                text-brand-teal

                sm:text-xs
              "
            >
              Our Values
            </p>


            <h2
              id="values-heading"
              className="
                mt-3

                text-3xl
                font-bold
                tracking-tight

                text-brand-navy

                sm:text-4xl
              "
            >
              What guides our work
            </h2>

          </div>


          {/* CARDS */}

          <div
            className="
              grid
              grid-cols-1

              gap-5

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >

            <ValueCard
              icon={<Users size={24} />}
              title="People First"
              description="We put people and communities at the centre of everything we do."
            />

            <ValueCard
              icon={<ShieldCheck size={24} />}
              title="Integrity"
              description="We believe in transparency, honesty and accountability."
            />

            <ValueCard
              icon={<Target size={24} />}
              title="Impact"
              description="We focus on sustainable solutions that create real change."
            />

            <ValueCard
              icon={<HeartHandshake size={24} />}
              title="Inclusion"
              description="We respect diversity and promote equal opportunities."
            />

          </div>

        </div>

      </section>








{/* =====================================================
    LEADERSHIP
===================================================== */}

<section
  aria-labelledby="leadership-heading"
  id="leadership"
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

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <div
      className="
        mb-7
        flex
        items-end
        justify-between

        sm:mb-9
      "
    >

      <div>

        {/* EYEBROW */}

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
          Leadership
        </p>


        {/* HEADING */}

        <h2
          id="leadership-heading"
          className="
            mt-2

            text-2xl
            font-bold
            leading-tight
            tracking-tight

            text-brand-navy

            sm:text-3xl

            lg:text-4xl
          "
        >
          Guiding with Vision.
          <span className="text-brand-teal">
            {" "}Leading with Values.
          </span>
        </h2>

      </div>


      {/* =================================================
          DESKTOP ARROWS
      ================================================= */}

      <div className="hidden gap-2 sm:flex">

        <button
          type="button"
          aria-label="Previous leaders"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-full

            border
            border-brand-navy/15

            bg-white

            text-brand-navy

            transition-all
            duration-300

            hover:border-brand-teal
            hover:bg-brand-teal
            hover:text-white
          "
        >
          <ArrowLeft size={16} />
        </button>


        <button
          type="button"
          aria-label="Next leaders"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-full

            border
            border-brand-navy/15

            bg-white

            text-brand-navy

            transition-all
            duration-300

            hover:border-brand-teal
            hover:bg-brand-teal
            hover:text-white
          "
        >
          <ArrowRight size={16} />
        </button>

      </div>

    </div>


    {/* =================================================
        LEADERSHIP CARDS
    ================================================= */}

    <div
      className="
        grid
        grid-cols-1

        gap-4

        sm:grid-cols-2

        lg:grid-cols-4
      "
    >

      <LeaderCard
        name="Amit"
        // role="Founder & CEO"
        image="/images/leadership/rajeev-sharma.jpg"
        linkedin="#"
        email="mailto:contact@amisankalp.org"
      />


      <LeaderCard
        name="Amarjeet "
        // role="Co-founder & Director"
        image="/images/leadership/anita-verma.jpg"
        linkedin="#"
        email="mailto:contact@amisankalp.org"
      />


      <LeaderCard
        name="Anubhuti"
        // role="Chief Operating Officer"
        image="/images/leadership/vikram-mehta.jpg"
        linkedin="#"
        email="mailto:contact@amisankalp.org"
      />


      <LeaderCard
        name="Aashish hooda"
        // role="Chief Program Officer"
        image="/images/leadership/neha-kapoor.jpg"
        linkedin="#"
        email="mailto:contact@amisankalp.org"
      />

    </div>

  </div>
</section>   


{/* =====================================================
    GOVERNANCE
===================================================== */}

<section
  aria-labelledby="governance-heading"
  id="governance"
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
      mx-auto
      max-w-[1400px]

      px-4
      sm:px-6
      lg:px-8
    "
  >

    <div
      className="
        relative
        overflow-hidden

        rounded-2xl

        border
        border-brand-navy/10

        bg-[#F9FCFB]

        px-5
        py-8

        shadow-[0_6px_30px_rgba(6,43,70,0.04)]

        sm:px-8
        sm:py-10

        lg:px-10
        lg:py-12
      "
    >

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[280px]
          w-[280px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-brand-teal/10

          sm:h-[350px]
          sm:w-[350px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[210px]
          w-[210px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-brand-teal/10

          sm:h-[270px]
          sm:w-[270px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[140px]
          w-[140px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-brand-teal/10
        "
      />


      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div
        className="
          relative
          z-10

          grid
          grid-cols-1

          gap-10

          lg:grid-cols-[1fr_0.8fr_1fr]

          lg:items-center
          lg:gap-8
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div>

          {/* EYEBROW */}

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
            Governance
          </p>


          {/* HEADING */}

          <h2
            id="governance-heading"
            className="
              mt-3

              text-2xl
              font-bold
              leading-tight
              tracking-tight

              text-brand-navy

              sm:text-3xl

              lg:text-4xl
            "
          >
            Commitment to Good
            <span className="block text-brand-teal">
              Governance
            </span>
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-[520px]

              text-sm
              leading-7

              text-gray-600

              sm:text-base
              sm:leading-8
            "
          >
            We are committed to the highest standards of
            transparency, accountability and ethical
            practices in everything we do.
          </p>


          {/* =================================================
              GOVERNANCE POINTS
          ================================================= */}

          <div className="mt-6 space-y-3">

            {[
              "Transparent Financial Management",
              "Accountable & Responsible Practices",
              "Ethical & Inclusive Governance",
              "Regular Monitoring & Evaluation",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <CheckCircle2
                  size={17}
                  strokeWidth={2}
                  className="
                    shrink-0
                    text-brand-teal
                  "
                />

                <span
                  className="
                    text-xs
                    font-medium
                    text-brand-navy

                    sm:text-sm
                  "
                >
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =================================================
            CENTER SHIELD
        ================================================= */}

        <div
          className="
            relative

            flex
            min-h-[240px]

            items-center
            justify-center

            sm:min-h-[280px]
          "
        >

          {/* OUTER RING */}

          <div
            className="
              absolute

              h-[210px]
              w-[210px]

              rounded-full

              border
              border-brand-teal/10

              sm:h-[250px]
              sm:w-[250px]
            "
          />

          {/* SECOND RING */}

          <div
            className="
              absolute

              h-[165px]
              w-[165px]

              rounded-full

              border
              border-brand-teal/15

              sm:h-[195px]
              sm:w-[195px]
            "
          />

          {/* SHIELD */}

          <div
            className="
              relative
              z-10

              flex
              h-28
              w-28

              items-center
              justify-center

              rounded-[2rem]

              bg-gradient-to-br
              from-brand-teal
              to-brand-navy

              text-white

              shadow-[0_15px_35px_rgba(0,143,149,0.20)]

              transition-transform
              duration-500

              hover:scale-105

              sm:h-32
              sm:w-32
            "
          >

            <ShieldCheck
              size={65}
              strokeWidth={1.5}
            />

          </div>

        </div>


        {/* =================================================
            RIGHT GOVERNANCE VALUES
        ================================================= */}

        <div
          className="
            flex
            flex-col

            gap-4

            sm:gap-5
          "
        >

          {/* TRANSPARENCY */}

          <div
            className="
              flex
              items-start
              gap-4

              rounded-xl

              border
              border-brand-navy/5

              bg-white

              p-4

              shadow-[0_5px_20px_rgba(6,43,70,0.035)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-brand-teal/15
              hover:shadow-[0_10px_25px_rgba(6,43,70,0.07)]
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

                rounded-full

                bg-brand-teal/10

                text-brand-teal
              "
            >
              <Eye size={19} />
            </div>


            <div>

              <h3
                className="
                  text-sm
                  font-bold

                  text-brand-navy
                "
              >
                Transparency
              </h3>

              <p
                className="
                  mt-1

                  text-xs
                  leading-5

                  text-gray-500
                "
              >
                We believe in open communication
                and clear reporting.
              </p>

            </div>

          </div>


          {/* ACCOUNTABILITY */}

          <div
            className="
              flex
              items-start
              gap-4

              rounded-xl

              border
              border-brand-navy/5

              bg-white

              p-4

              shadow-[0_5px_20px_rgba(6,43,70,0.035)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-brand-teal/15
              hover:shadow-[0_10px_25px_rgba(6,43,70,0.07)]
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

                rounded-full

                bg-brand-orange/10

                text-brand-orange
              "
            >
              <Users size={19} />
            </div>


            <div>

              <h3
                className="
                  text-sm
                  font-bold

                  text-brand-navy
                "
              >
                Accountability
              </h3>

              <p
                className="
                  mt-1

                  text-xs
                  leading-5

                  text-gray-500
                "
              >
                We take responsibility for our
                actions and outcomes.
              </p>

            </div>

          </div>


          {/* TRUST */}

          <div
            className="
              flex
              items-start
              gap-4

              rounded-xl

              border
              border-brand-navy/5

              bg-white

              p-4

              shadow-[0_5px_20px_rgba(6,43,70,0.035)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-brand-teal/15
              hover:shadow-[0_10px_25px_rgba(6,43,70,0.07)]
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

                rounded-full

                bg-brand-navy/10

                text-brand-navy
              "
            >
              <ShieldCheck size={19} />
            </div>


            <div>

              <h3
                className="
                  text-sm
                  font-bold

                  text-brand-navy
                "
              >
                Trust
              </h3>

              <p
                className="
                  mt-1

                  text-xs
                  leading-5

                  text-gray-500
                "
              >
                We build trust through integrity,
                consistency and impact.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>


    </main>
  );
}


/* =========================================================
   VALUE CARD
========================================================= */

function ValueCard({
  icon,
  title,
  description,
}) {
  return (
    <article
      className="
        group

        rounded-2xl

        border
        border-gray-100

        bg-white

        p-6

        shadow-[0_6px_25px_rgba(6,43,70,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-brand-teal/15

        hover:shadow-[0_15px_35px_rgba(6,43,70,0.10)]
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-xl

          bg-brand-teal/10

          text-brand-teal

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
          mt-2

          text-sm
          leading-6

          text-gray-500
        "
      >
        {description}
      </p>

    </article>
  );
}



















export default AboutUs;