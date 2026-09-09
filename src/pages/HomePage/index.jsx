import React from 'react'
import Hero from '../../components/HeroSection'
import {
    ArrowRight,
    Target,
    HeartHandshake,
    Globe2,
    GraduationCap,
    HeartPulse,
    BriefcaseBusiness,
    Venus,
    PawPrint,
    Leaf,
} from "lucide-react";

import ProgrammeCard from '../../components/ProgrammeCard'
import SDGCard from "../../components/SDGCard";
import ImpactStories from "../../components/ImpactStories";
import SupportCause from "../../components/SupportCause";
import TopContributors from '../../components/TopContributors'
function index() {
    return (
        <>
            <Hero />


            <TopContributors />



            {/* =====================================================
          OUR MISSION
      ===================================================== */}

      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">

        <div className="w-full px-4 sm:px-6 lg:px-8">

          <div
            className="
              relative
              mx-auto
              max-w-[1400px]
              overflow-hidden
              rounded-2xl
              border
              border-gray-100
              bg-[#f7faf9]
              p-6

              shadow-[0_20px_70px_rgba(6,43,70,0.06)]

              transition-shadow
              duration-500

              hover:shadow-[0_25px_80px_rgba(6,43,70,0.10)]

              sm:p-8
              lg:p-12
              xl:p-14
            "
          >

            {/* =================================================
                DECORATIVE BACKGROUND
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                border
                border-brand-teal/10

                animate-[missionRotate_35s_linear_infinite]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-48
                w-48
                rounded-full
                border
                border-brand-orange/10

                animate-[missionRotate_25s_linear_infinite_reverse]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-28
                h-64
                w-64
                rounded-full
                bg-brand-teal/5
                blur-2xl

                animate-[missionPulse_7s_ease-in-out_infinite]
              "
            />


            {/* =================================================
                MISSION CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                grid
                grid-cols-1
                items-center
                gap-10

                lg:grid-cols-12
                lg:gap-14
              "
            >

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div
                className="
                  lg:col-span-7

                  animate-[missionReveal_0.8s_ease-out]
                "
              >

                {/* LABEL */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-brand-teal/15
                    bg-white
                    px-3
                    py-1.5

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-brand-teal

                    shadow-sm

                    transition
                    duration-300

                    hover:border-brand-teal/30
                    hover:shadow-md

                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-brand-orange

                      animate-[missionPulse_2.5s_ease-in-out_infinite]

                      sm:h-2
                      sm:w-2
                    "
                  />

                  Our Mission

                </div>


                {/* =================================================
                    MISSION HEADING
                ================================================= */}

                <h2
                  className="
                    mt-5
                    max-w-[720px]

                    text-3xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-brand-navy

                    sm:text-4xl

                    lg:text-5xl

                    xl:text-[52px]
                  "
                >

                  Creating opportunities.

                  <br />

                  <span className="text-brand-teal">
                    Transforming communities.
                  </span>

                </h2>


                {/* =================================================
                    MISSION DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-5
                    max-w-[650px]

                    text-sm
                    leading-7
                    text-gray-600

                    sm:mt-6
                    sm:text-base
                    sm:leading-8

                    lg:text-[17px]
                  "
                >
                  Our mission is to work alongside communities
                  to create meaningful opportunities, strengthen
                  livelihoods and improve access to essential
                  services so that individuals and communities
                  can build a more secure and sustainable future.
                </p>


                {/* =================================================
                    SECOND PARAGRAPH
                ================================================= */}

                <p
                  className="
                    mt-4
                    max-w-[650px]

                    text-sm
                    leading-7
                    text-gray-500

                    sm:text-base
                  "
                >
                  We believe lasting change happens when people,
                  communities, organisations and partners come
                  together with a shared purpose.
                </p>


                {/* =================================================
                    CTA
                ================================================= */}

                <a
                  href="/about"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-2

                    rounded-lg
                    bg-brand-navy

                    px-5
                    py-3

                    text-sm
                    font-semibold
                    text-white

                    shadow-[0_8px_25px_rgba(6,43,70,0.12)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-brand-teal
                    hover:shadow-[0_12px_30px_rgba(0,143,149,0.20)]

                    active:translate-y-0
                  "
                >

                  Read Our Story

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


              {/* =================================================
                  RIGHT VISUAL — ROTATING ORBIT
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[300px]
                  items-center
                  justify-center

                  sm:min-h-[340px]

                  lg:col-span-5
                  lg:min-h-[380px]
                "
              >

                {/* =================================================
                    OUTER STATIC RING
                ================================================= */}

                <div
                  className="
                    absolute
                    h-[260px]
                    w-[260px]
                    rounded-full
                    border
                    border-brand-teal/15

                    sm:h-[310px]
                    sm:w-[310px]

                    lg:h-[350px]
                    lg:w-[350px]
                  "
                />


                {/* =================================================
                    INNER STATIC RING
                ================================================= */}

                <div
                  className="
                    absolute
                    h-[210px]
                    w-[210px]
                    rounded-full
                    border
                    border-brand-orange/15

                    sm:h-[255px]
                    sm:w-[255px]

                    lg:h-[290px]
                    lg:w-[290px]
                  "
                />


                {/* =================================================
                    ROTATING ORBIT
                ================================================= */}

                <div
                  className="
                    absolute
                    h-[300px]
                    w-[300px]

                    animate-[missionOrbit_22s_linear_infinite]

                    sm:h-[340px]
                    sm:w-[340px]

                    lg:h-[380px]
                    lg:w-[380px]
                  "
                >

                  {/* TARGET */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0

                      flex
                      h-12
                      w-12
                      -translate-x-1/2
                      items-center
                      justify-center

                      rounded-full
                      bg-brand-navy
                      text-white

                      shadow-[0_8px_25px_rgba(6,43,70,0.20)]

                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Target size={22} />
                  </div>


                  {/* GLOBE */}

                  <div
                    className="
                      absolute
                      bottom-[8%]
                      right-[3%]

                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full
                      bg-brand-orange
                      text-white

                      shadow-[0_8px_25px_rgba(245,130,32,0.25)]

                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Globe2 size={22} />
                  </div>


                  {/* HEART */}

                  <div
                    className="
                      absolute
                      bottom-[8%]
                      left-[3%]

                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full
                      bg-brand-green
                      text-white

                      shadow-[0_8px_25px_rgba(104,168,47,0.22)]

                      sm:h-14
                      sm:w-14
                    "
                  >
                    <HeartHandshake size={21} />
                  </div>

                </div>


                {/* =================================================
                    FIXED CENTER
                ================================================= */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-[160px]
                    w-[160px]
                    flex-col
                    items-center
                    justify-center

                    rounded-full
                    bg-white

                    shadow-[0_20px_60px_rgba(6,43,70,0.14)]

                    animate-[missionFloat_5s_ease-in-out_infinite]

                    sm:h-[190px]
                    sm:w-[190px]

                    lg:h-[215px]
                    lg:w-[215px]
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full
                      bg-brand-teal/10
                      text-brand-teal

                      sm:h-14
                      sm:w-14
                    "
                  >

                    <HeartHandshake
                      size={28}
                      strokeWidth={1.7}
                    />

                  </div>


                  <span
                    className="
                      mt-3
                      text-sm
                      font-bold
                      text-brand-navy

                      sm:text-base
                    "
                  >
                    People First
                  </span>


                  <span
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    Sustainable Impact
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



{/* =====================================================
    OUR PROGRAMMES
===================================================== */}

<section className="w-full bg-white py-14 sm:py-16 lg:py-20">

  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <div
      className="
        mb-8
        flex
        flex-col
        gap-5

        sm:mb-10

        lg:mb-12
        lg:flex-row
        lg:items-end
        lg:justify-between
      "
    >

      <div className="max-w-[760px]">

        {/* EYEBROW */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-brand-teal/15
            bg-brand-teal/[0.04]
            px-3
            py-1.5

            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-brand-teal

            sm:px-4
            sm:py-2
            sm:text-xs
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-brand-orange

              sm:h-2
              sm:w-2
            "
          />

          Our Programmes

        </div>


        {/* HEADING */}

        <h2
          className="
            mt-4

            text-3xl
            font-bold
            leading-[1.12]
            tracking-tight
            text-brand-navy

            sm:text-4xl

            lg:text-5xl
          "
        >
          Creating change where it
          <span className="text-brand-teal">
            {" "}matters most.
          </span>
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mt-4
            max-w-[650px]

            text-sm
            leading-7
            text-gray-500

            sm:text-base
            sm:leading-7
          "
        >
          Our programmes focus on the areas that can create
          meaningful and lasting change for individuals,
          families and communities.
        </p>

      </div>


      {/* VIEW ALL */}

      <a
        href="/programmes"
        className="
          group
          inline-flex
          w-fit
          shrink-0
          items-center
          gap-2

          rounded-xl
          border
          border-brand-navy/15
          bg-white

          px-5
          py-3

          text-sm
          font-semibold
          text-brand-navy

          shadow-sm

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-brand-teal
          hover:bg-brand-teal
          hover:text-white
          hover:shadow-lg
        "
      >

        Explore All Programmes

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


    {/* =================================================
        PROGRAMME GRID — 3 PER ROW
    ================================================= */}

    <div
      className="
        grid
        grid-cols-1
        gap-5

        sm:grid-cols-2

        lg:grid-cols-3

        lg:gap-6
      "
    >

      {/* EDUCATION */}

      <ProgrammeCard
        number="01"
        icon={
          <GraduationCap
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Education"
        description="Creating access to quality education, learning opportunities and a stronger foundation for every child."
        iconColor="text-brand-navy"
        arrowColor="bg-brand-navy"
        accent="from-brand-navy/10"
        href="/programmes/education"
      />


      {/* HEALTH */}

      <ProgrammeCard
        number="02"
        icon={
          <HeartPulse
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Health"
        description="Improving access to healthcare and supporting healthier, more resilient communities."
        iconColor="text-brand-teal"
        arrowColor="bg-brand-teal"
        accent="from-brand-teal/10"
        href="/programmes/health"
      />


      {/* LIVELIHOOD */}

      <ProgrammeCard
        number="03"
        icon={
          <BriefcaseBusiness
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Livelihood"
        description="Building skills, opportunities and sustainable income pathways for individuals and families."
        iconColor="text-brand-orange"
        arrowColor="bg-brand-orange"
        accent="from-brand-orange/10"
        href="/programmes/livelihood"
      />


      {/* WOMEN EMPOWERMENT */}

      <ProgrammeCard
        number="04"
        icon={
          <Venus
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Women Empowerment"
        description="Supporting women with knowledge, skills and opportunities to lead independent lives."
        iconColor="text-pink-600"
        arrowColor="bg-pink-600"
        accent="from-pink-500/10"
        href="/programmes/women-empowerment"
      />


      {/* ANIMAL WELFARE */}

      <ProgrammeCard
        number="05"
        icon={
          <PawPrint
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Animal Welfare"
        description="Promoting compassionate care, protection and better lives for animals in our communities."
        iconColor="text-brand-orange"
        arrowColor="bg-brand-orange"
        accent="from-brand-orange/10"
        href="/programmes/animal-welfare"
      />


      {/* GRASSROOTS */}

      <ProgrammeCard
        number="06"
        icon={
          <Leaf
            size={34}
            strokeWidth={1.6}
          />
        }
        title="Tree Plantation"
        description="Planting trees to restore nature, improve air quality, and build a greener, healthier future."
        iconColor="text-brand-green"
        arrowColor="bg-brand-green"
        accent="from-brand-green/10"
        href="/programmes/grassroots-development"
      />

    </div>

  </div>

</section>













{/* =====================================================
    SDG ALIGNMENT
===================================================== */}













<ImpactStories />


<SupportCause />

        </>
    )
}

export default index