import React, { useEffect } from "react";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  HandCoins,
  VenusAndMars,
  PawPrint,
  Trees,
  Users,
  MapPin,
  Quote,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function Impact() {
  useEffect(() => {
    const title = "Our Impact | Amisankalp Social Foundation";

    const description =
      "Discover the impact of Amisankalp Social Foundation across education, health, livelihoods, women empowerment, animal welfare and environmental sustainability.";

    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/impact`
    );
  }, []);

  const impactAreas = [
    {
      title: "Education",
      eyebrow: "Learning & Opportunity",
      description:
        "Creating access to learning opportunities, educational support and skills that help children and young people build a stronger future.",
      image:
        "/images/impact/education.jpg",
      icon: GraduationCap,
      color: "teal",
      points: [
        "Improved access to educational opportunities",
        "Support for children and young learners",
        "Digital and practical learning initiatives",
      ],
    },

    {
      title: "Health",
      eyebrow: "Health & Wellbeing",
      description:
        "Working towards healthier communities through awareness, preventive care, health camps, nutrition and access to essential support.",
      image:
        "/images/impact/health.jpg",
      icon: HeartPulse,
      color: "teal",
      points: [
        "Health awareness and preventive care",
        "Community health initiatives",
        "Nutrition and wellbeing awareness",
      ],
    },

    {
      title: "Livelihood",
      eyebrow: "Economic Opportunity",
      description:
        "Supporting individuals and families with skills, livelihood opportunities and pathways towards greater economic independence.",
      image:
        "/images/impact/livelihood.jpg",
      icon: HandCoins,
      color: "orange",
      points: [
        "Skill development and vocational training",
        "Support for entrepreneurship",
        "Improved access to livelihood opportunities",
      ],
    },

    {
      title: "Women Empowerment",
      eyebrow: "Empowerment & Inclusion",
      description:
        "Creating opportunities for women to develop skills, strengthen livelihoods, participate in leadership and build greater independence.",
      image:
        "/images/impact/women-empowerment.jpg",
      icon: VenusAndMars,
      color: "orange",
      points: [
        "Skills and capacity building",
        "Livelihood and entrepreneurship support",
        "Awareness and leadership opportunities",
      ],
    },

    {
      title: "Animal Welfare",
      eyebrow: "Compassion & Care",
      description:
        "Promoting compassionate care for animals through welfare initiatives, awareness and community participation.",
      image:
        "/images/impact/animal-welfare.jpg",
      icon: PawPrint,
      color: "green",
      points: [
        "Animal welfare and care",
        "Community awareness",
        "Responsible and compassionate practices",
      ],
    },

    {
      title: "Tree Plantation",
      eyebrow: "Environment & Sustainability",
      description:
        "Encouraging communities to participate in tree plantation, environmental awareness and long-term ecological care.",
      image:
        "/images/impact/tree-plantation.jpg",
      icon: Trees,
      color: "green",
      points: [
        "Community tree plantation",
        "Environmental awareness",
        "Long-term care of planted trees",
      ],
    },
  ];

  const programmeLinks = {
    Education: "/programmes/education",
    Health: "/programmes/health",
    Livelihood: "/programmes/livelihood",
    "Women Empowerment": "/programmes/women-empowerment",
    "Animal Welfare": "/programmes/animal-welfare",
    "Tree Plantation": "/programmes/tree-plantation",
  };

  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <SectionHero
        eyebrow="Our Impact"
        title="Creating Change."
        subtitle=""
        description="From education and healthcare to livelihoods, empowerment, animal welfare and environmental action, our work is focused on creating meaningful and sustainable change."
        image="/Impact/Impact hero.jpg"
        imagePosition="center"
        theme="navy"
        accentColor="teal"
        showAccent={true}
      />

      {/* IMPACT APPROACH */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
          px-4
          py-14
          sm:px-6
          sm:py-18
          lg:px-8
          lg:py-20
        "
      >
        {/* Decorative background */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-brand-teal/[0.055]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-32
            h-80
            w-80
            rounded-full
            bg-brand-orange/[0.045]
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-10
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-20
            "
          >
            {/* LEFT */}
            <div>
              <h2
                className="
                  mt-5
                  max-w-xl
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-brand-navy
                  sm:text-5xl
                  lg:text-[52px]
                "
              >
                Impact that goes{" "}
                <span className="text-brand-teal">
                  beyond numbers.
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div
              className="
                lg:border-l
                lg:border-gray-100
                lg:pl-12
              "
            >
              <p
                className="
                  max-w-2xl
                  text-base
                  leading-8
                  text-gray-600
                "
              >
                For us, impact is not simply about how many people we reach.
                It is about creating opportunities, strengthening communities,
                building confidence and helping people move towards a more
                secure and sustainable future.
              </p>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Every programme is designed around meaningful participation,
                practical action and long-term community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERALL IMPACT */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f5f9fa]
          px-4
          py-14
          sm:px-6
          sm:py-18
          lg:px-8
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">
          {/* Heading */}
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  tracking-tight
                  text-brand-teal
                  sm:text-4xl
                "
              >
                Our Impact So Far
              </h2>
            </div>
          </div>

          {/* Overall Impact Dashboard */}
          <div
            className="
              relative
              mt-8
              overflow-hidden
              rounded-3xl
              bg-brand-navy
              shadow-[0_20px_60px_rgba(6,43,70,0.12)]
            "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-brand-teal/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                left-1/3
                h-64
                w-64
                rounded-full
                bg-brand-teal/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* Top Message */}
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  border-b
                  border-white/10
                  px-6
                  py-7
                  sm:px-8
                  sm:py-8
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  lg:px-10
                "
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-brand-teal-light
                        shadow-[0_0_12px_rgba(22,166,168,0.7)]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white/60
                      "
                    >
                      Creating Meaningful Change
                    </span>
                  </div>

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Every action contributes to a bigger impact.
                  </h3>
                </div>

                <div
                  className="
                    hidden
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-brand-teal-light
                    sm:flex
                  "
                >
                  ↗
                </div>
              </div>

              {/* Overall Stats */}
              <div
                className="
                  grid
                  grid-cols-2
                  lg:grid-cols-4
                "
              >
                {/* People */}
                <div
                  className="
                    group
                    border-b
                    border-white/10
                    p-6
                    sm:p-8
                    lg:border-b-0
                    lg:border-r
                    lg:p-9
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-teal/10
                      text-brand-teal-light
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Users size={21} strokeWidth={1.7} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-4xl
                      font-bold
                      tracking-tight
                      text-white
                      sm:text-5xl
                    "
                  >
                    1K+
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white/65
                    "
                  >
                    People Reached
                  </p>

                  <div
                    className="
                      mt-5
                      h-[2px]
                      w-8
                      rounded-full
                      bg-brand-teal
                    "
                  />
                </div>

                {/* Communities */}
                <div
                  className="
                    group
                    border-b
                    border-white/10
                    p-6
                    sm:p-8
                    lg:border-b-0
                    lg:border-r
                    lg:p-9
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-teal/10
                      text-brand-teal-light
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <MapPin size={21} strokeWidth={1.7} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-4xl
                      font-bold
                      tracking-tight
                      text-white
                      sm:text-5xl
                    "
                  >
                    100+
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white/65
                    "
                  >
                    Communities
                  </p>

                  <div
                    className="
                      mt-5
                      h-[2px]
                      w-8
                      rounded-full
                      bg-brand-teal
                    "
                  />
                </div>

                {/* Initiatives */}
                <div
                  className="
                    group
                    border-r
                    border-white/10
                    p-6
                    sm:p-8
                    lg:p-9
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-teal/10
                      text-brand-teal-light
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <HeartPulse size={21} strokeWidth={1.7} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-4xl
                      font-bold
                      tracking-tight
                      text-white
                      sm:text-5xl
                    "
                  >
                    58+
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white/65
                    "
                  >
                    Initiatives
                  </p>

                  <div
                    className="
                      mt-5
                      h-[2px]
                      w-8
                      rounded-full
                      bg-brand-teal
                    "
                  />
                </div>

                {/* Environment */}
                <div
                  className="
                    group
                    p-6
                    sm:p-8
                    lg:p-9
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-teal/10
                      text-brand-teal-light
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Trees size={21} strokeWidth={1.7} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-4xl
                      font-bold
                      tracking-tight
                      text-white
                      sm:text-5xl
                    "
                  >
                    32+
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-white/65
                    "
                  >
                    Environmental Actions
                  </p>

                  <div
                    className="
                      mt-5
                      h-[2px]
                      w-8
                      rounded-full
                      bg-brand-teal
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME IMPACTS */}
      <section className="w-full bg-white">
        {impactAreas.map((area, index) => {
          const Icon = area.icon;

          return (
            <section
              key={area.title}
              id={area.title.toLowerCase().replace(/\s+/g, "-")}
              className={`
                relative
                w-full
                overflow-hidden
                border-t
                border-gray-100
                px-4
                py-12
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-[#f7fafb]"
                }
              `}
            >
              <div className="mx-auto max-w-[1200px]">
                <div
                  className={`
                    grid
                    grid-cols-1
                    items-center
                    gap-8
                    sm:gap-10
                    lg:grid-cols-2
                    lg:gap-16
                    ${
                      index % 2 !== 0
                        ? "lg:[&>div:first-child]:order-2"
                        : ""
                    }
                  `}
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        shadow-[0_18px_50px_rgba(6,43,70,0.10)]
                      "
                    >
                      <img
                        src={area.image}
                        alt={`${area.title} impact`}
                        className="
                          aspect-[4/3]
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />

                      {/* Image overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-brand-navy/35
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Floating Icon */}
                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/60
                          bg-white/95
                          text-brand-teal
                          shadow-[0_10px_30px_rgba(6,43,70,0.18)]
                          backdrop-blur
                        "
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div
                      className="
                        absolute
                        -bottom-2
                        left-8
                        h-1
                        w-16
                        rounded-full
                        bg-brand-teal
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="max-w-xl lg:py-4">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          h-[2px]
                          w-7
                          rounded-full
                          bg-brand-teal
                        "
                      />

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-brand-teal
                          sm:text-xs
                        "
                      >
                        {area.eyebrow}
                      </p>
                    </div>

                    {/* Title */}
                    <h2
                      className="
                        mt-4
                        text-3xl
                        font-bold
                        leading-tight
                        tracking-[-0.025em]
                        text-brand-navy
                        sm:text-4xl
                        lg:text-[42px]
                      "
                    >
                      {area.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-sm
                        leading-7
                        text-gray-600
                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {area.description}
                    </p>

                    {/* Impact Points */}
                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-1
                        gap-2.5
                        sm:grid-cols-2
                        sm:gap-3
                      "
                    >
                      {area.points.map((point) => (
                        <div
                          key={point}
                          className="
                            flex
                            items-start
                            gap-2.5
                            text-sm
                            leading-6
                            text-gray-600
                          "
                        >
                          <span
                            className="
                              mt-[9px]
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-brand-teal
                            "
                          />

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Button */}
                    <a
                      href={programmeLinks[area.title]}
                      className="
                        group
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-brand-navy
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_8px_20px_rgba(6,43,70,0.12)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-brand-teal
                        hover:shadow-[0_10px_25px_rgba(0,143,149,0.18)]
                      "
                    >
                      Explore {area.title}

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
                </div>
              </div>
            </section>
          );
        })}
      </section>

      {/* IMPACT STORIES */}
      <section
        className="
          w-full
          bg-brand-navy
          px-4
          py-14
          sm:px-6
          sm:py-18
          lg:px-8
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-brand-teal-light
              "
            >
              Stories Behind The Impact
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              Every Number Represents a Story.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-white/65
                sm:text-base
              "
            >
              Behind every programme, initiative and number are people,
              communities and experiences that remind us why this work
              matters.
            </p>
          </div>

          {/* Stories */}
          <div
            className="
              mt-9
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >
            {/* Story 1 */}
            <article
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              <img
                src="/images/impact/impact-story-1.jpg"
                alt="Impact story"
                className="
                  aspect-[16/10]
                  w-full
                  object-cover
                "
              />

              <div className="p-6">
                <Quote
                  size={22}
                  className="text-brand-teal"
                />

                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-brand-navy
                  "
                >
                  A Story of Opportunity
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >
                  Real change begins when people have the opportunity,
                  support and confidence to move forward.
                </p>
              </div>
            </article>

            {/* Story 2 */}
            <article
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              <img
                src="/images/impact/impact-story-2.jpg"
                alt="Community impact story"
                className="
                  aspect-[16/10]
                  w-full
                  object-cover
                "
              />

              <div className="p-6">
                <Quote
                  size={22}
                  className="text-brand-teal"
                />

                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-brand-navy
                  "
                >
                  Stronger Together
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >
                  When communities participate and work together,
                  meaningful change becomes possible.
                </p>
              </div>
            </article>

            {/* Story 3 */}
            <article
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              <img
                src="/images/impact/impact-story-3.jpg"
                alt="Community transformation story"
                className="
                  aspect-[16/10]
                  w-full
                  object-cover
                "
              />

              <div className="p-6">
                <Quote
                  size={22}
                  className="text-brand-teal"
                />

                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-brand-navy
                  "
                >
                  Change That Continues
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >
                  Sustainable impact is built through consistent action,
                  local participation and long-term commitment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* IMPACT CTA */}
      {/* CTA intentionally kept commented as in the original file */}
    </main>
  );
}

export default Impact;