<section className="w-full bg-white py-14 sm:py-16 lg:py-20">

  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <div
      className="
        flex
        flex-col
        gap-5

        lg:flex-row
        lg:items-end
        lg:justify-between
      "
    >

      <div className="max-w-[720px]">

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

          Aligning With UN SDGs

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
          Working Towards
          <span className="text-brand-teal">
            {" "}Global Goals
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
          Our programmes contribute to the Sustainable
          Development Goals by creating meaningful,
          measurable and lasting impact across communities.
        </p>

      </div>


      {/* IMPACT BUTTON */}

      <a
        href="/impact"
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

        Explore Our Impact

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
        SDG CARDS
    ================================================= */}

    <div
      className="
        mt-9

        grid
        grid-cols-2
        gap-3

        sm:mt-10
        sm:grid-cols-3
        sm:gap-4

        lg:grid-cols-7
        lg:gap-4
      "
    >

      <SDGCard
        number="01"
        title="No Poverty"
        description="Reducing poverty and creating opportunities."
        color="red"
      />

      <SDGCard
        number="03"
        title="Good Health"
        description="Promoting healthier communities."
        color="green"
      />

      <SDGCard
        number="04"
        title="Quality Education"
        description="Expanding access to quality learning."
        color="orange"
      />

      <SDGCard
        number="05"
        title="Gender Equality"
        description="Creating equal opportunities for women."
        color="pink"
      />

      <SDGCard
        number="08"
        title="Decent Work"
        description="Supporting sustainable livelihoods."
        color="teal"
      />

      <SDGCard
        number="10"
        title="Reduced Inequalities"
        description="Building inclusive communities."
        color="purple"
      />

      <SDGCard
        number="17"
        title="Partnerships"
        description="Working together for greater impact."
        color="navy"
      />

    </div>

  </div>

</section>