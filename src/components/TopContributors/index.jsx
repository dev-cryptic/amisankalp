import { useEffect, useRef } from "react";

function TopContributors() {
  const contributors = [
    {
      id: 1,
      name: "Rakesh Kumar",
      initials: "RK",
      amount: "₹10,000",
      category: "Tree Plantation",
    },
    {
      id: 2,
      name: "Jeetendra Rajput",
      initials: "JR",
      amount: "₹7,500",
      category: "Tree Plantation",
    },
    {
      id: 3,
      name: "Neeraj Singh",
      initials: "NS",
      amount: "₹5,000",
      category: "Education",
    },
    {
      id: 4,
      name: "Ayush Verma",
      initials: "AV",
      amount: "₹4,500",
      category: "Tree Plantation",
    },
    {
      id: 5,
      name: "Anirudh Upadhyay",
      initials: "AU",
      amount: "₹3,000",
      category: "Healthcare",
    },
    {
      id: 6,
      name: "Rudraa Singh Rajpoot",
      initials: "RS",
      amount: "₹2,500",
      category: "Education",
    },
    {
      id: 7,
      name: "Rohit",
      initials: "R",
      amount: "₹2,000",
      category: "Tree Plantation",
    },
    {
      id: 8,
      name: "Priya Sharma",
      initials: "PS",
      amount: "₹1,500",
      category: "Women Empowerment",
    },
  ];

  /*
    Duplicate the list so the animation can
    continuously move without a visible gap.
  */
  const scrollingContributors = [
    ...contributors,
    ...contributors,
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame;
    let position = 0;

    const speed = 0.45;

    const animate = () => {
      position -= speed;

      /*
        Half of the track contains the original
        contributor list.
      */
      const resetPoint = track.scrollWidth / 2;

      if (Math.abs(position) >= resetPoint) {
        position = 0;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F7FAF9]

        py-10

        sm:py-12
        lg:py-14
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

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
            flex
            items-center
            justify-between
          "
        >

          {/* LEFT */}

          <div>

            <div
              className="
                flex
                items-center
                gap-2

                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-brand-teal

                sm:text-xs
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-brand-orange
                "
              />

              Our Top Contributors

            </div>


            <h2
              className="
                mt-1.5

                text-xl
                font-bold
                tracking-tight
                text-brand-navy

                sm:text-2xl
                lg:text-3xl
              "
            >
            </h2>

          </div>


          {/* VIEW ALL */}

          {/* <a
            href="/contributors"
            className="
              hidden

              text-xs
              font-semibold
              text-brand-teal

              transition-colors
              duration-300

              hover:text-brand-orange

              sm:block
            "
          >
            View All
          </a> */}

        </div>

      </div>


      {/* =================================================
          AUTO SCROLLING AREA
      ================================================= */}

      <div
        className="
          relative
          mt-6

          w-full
          overflow-hidden

          sm:mt-7
        "
      >

        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-20

            w-10

            bg-gradient-to-r
            from-[#F7FAF9]
            to-transparent

            sm:w-20
            lg:w-28
          "
        />


        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            z-20

            w-10

            bg-gradient-to-l
            from-[#F7FAF9]
            to-transparent

            sm:w-20
            lg:w-28
          "
        />


        {/* =================================================
            TRACK
        ================================================= */}

        <div
          ref={trackRef}
          className="
            flex
            w-max
            items-stretch
            gap-3

            will-change-transform

            sm:gap-4
          "
        >

          {scrollingContributors.map((person, index) => (
            <ContributorCard
              key={`${person.id}-${index}`}
              person={person}
            />
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CONTRIBUTOR CARD
========================================================= */

function ContributorCard({ person }) {

  return (
    <div
      className="
        group
        flex
        w-[235px]
        shrink-0
        items-center
        gap-3

        rounded-xl

        border
        border-brand-navy/[0.06]

        bg-white

        px-4
        py-3.5

        shadow-[0_4px_18px_rgba(6,43,70,0.045)]

        transition-all
        duration-300

        hover:border-brand-teal/20
        hover:shadow-[0_8px_25px_rgba(6,43,70,0.08)]

        sm:w-[255px]
        sm:px-4.5
      "
    >

      {/* =================================================
          INITIALS
      ================================================= */}

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

          text-xs
          font-bold
          text-brand-teal

          ring-1
          ring-brand-teal/10

          transition-all
          duration-300

          group-hover:bg-brand-orange/10
          group-hover:text-brand-orange
          group-hover:ring-brand-orange/10
        "
      >
        {person.initials}
      </div>


      {/* =================================================
          INFORMATION
      ================================================= */}

      <div className="min-w-0 flex-1">

        {/* NAME */}

        <h3
          className="
            truncate

            text-sm
            font-semibold
            leading-5
            text-brand-navy
          "
        >
          {person.name}
        </h3>


        {/* CATEGORY */}

        <p
          className="
            mt-0.5
            truncate

            text-[10px]
            font-medium
            text-gray-400
          "
        >
          {person.category}
        </p>

      </div>


      {/* =================================================
          AMOUNT
      ================================================= */}

      <div
        className="
          shrink-0

          text-right
        "
      >

        <p
          className="
            text-sm
            font-bold
            leading-5
            text-brand-teal
          "
        >
          {person.amount}
        </p>

        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-gray-300
          "
        >
          Donated
        </p>

      </div>

    </div>
  );
}


export default TopContributors;