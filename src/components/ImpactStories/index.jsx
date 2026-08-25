import {
  ArrowRight,
  Play,
} from "lucide-react";

function ImpactStories() {
  const stories = [
    {
      image: "/images/stories/education.jpg",
      category: "Education",
      title: "A New Beginning Through Education",
      duration: "2:45",
      href: "/stories/education",
    },
    {
      image: "/images/stories/women.jpg",
      category: "Women Empowerment",
      title: "Empowering Women, Empowering Communities",
      duration: "2:10",
      href: "/stories/women-empowerment",
    },
    {
      image: "/images/stories/health.jpg",
      category: "Healthcare",
      title: "Healthcare at the Last Mile",
      duration: "2:30",
      href: "/stories/healthcare",
    },
    {
      image: "/images/stories/disaster.jpg",
      category: "Community Resilience",
      title: "Hope in Times of Crisis",
      duration: "2:55",
      href: "/stories/community-resilience",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5

            sm:mb-10

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}

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

              Stories in Motion

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
              Real Stories.
              <span className="text-brand-teal">
                {" "}Real Impact.
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
              Discover the people, communities and moments
              behind the change we are creating together.
            </p>

          </div>


          {/* VIEW ALL */}

          <a
            href="/media/videos"
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

            View All Videos

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
            STORIES GRID
        ================================================= */}

        <div
          className="
            mt-8

            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:mt-10
            lg:grid-cols-4
            lg:gap-6
          "
        >

          {stories.map((story, index) => (
            <a
              key={story.title}
              href={story.href}
              className="
                group
                relative
                overflow-hidden

                rounded-2xl
                bg-brand-navy

                shadow-[0_8px_30px_rgba(6,43,70,0.10)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-[0_20px_45px_rgba(6,43,70,0.18)]
              "
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden

                  sm:aspect-[16/10]
                "
              >

                <img
                  src={story.image}
                  alt={story.title}
                  className="
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-110
                  "
                />


                {/* DARK GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-brand-navy
                    via-brand-navy/35
                    to-transparent

                    opacity-90

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />


                {/* TOP CATEGORY */}

                <div
                  className="
                    absolute
                    left-4
                    top-4

                    rounded-full

                    border
                    border-white/20

                    bg-black/20
                    px-3
                    py-1.5

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white

                    backdrop-blur-md
                  "
                >
                  {story.category}
                </div>


                {/* PLAY BUTTON */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/50

                    bg-white/90
                    text-brand-navy

                    shadow-[0_8px_25px_rgba(0,0,0,0.20)]

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:bg-brand-orange
                    group-hover:text-white
                  "
                >
                  <Play
                    size={17}
                    fill="currentColor"
                    className="ml-0.5"
                  />
                </div>


                {/* DURATION */}

                <div
                  className="
                    absolute
                    right-4
                    top-4

                    rounded-full

                    bg-black/45
                    px-2.5
                    py-1

                    text-[10px]
                    font-medium
                    text-white

                    backdrop-blur-md
                  "
                >
                  {story.duration}
                </div>


                {/* =================================================
                    TEXT OVER IMAGE
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0

                    p-5
                  "
                >

                  <h3
                    className="
                      max-w-[280px]

                      text-lg
                      font-bold
                      leading-6
                      text-white

                      transition-transform
                      duration-500

                      group-hover:-translate-y-1

                      sm:text-[17px]
                    "
                  >
                    {story.title}
                  </h3>


                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2

                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/60

                      transition-colors
                      duration-300

                      group-hover:text-brand-orange-light
                    "
                  >
                    Watch Story

                    <ArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ImpactStories;