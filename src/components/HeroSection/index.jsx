import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";

const slides = [
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/058/476/154/small/diverse-hands-gathered-together-symbolizing-unity-and-collaboration-among-people-of-different-backgrounds-photo.jpg",
    title: "Empowering Communities.",
    highlight: "Building a Better Tomorrow.",
    description:
      "Join us in creating lasting change through education, healthcare, livelihood and grassroots development.",
  },

  {
    image:
      "https://www.mecharitabletrust.com/images/our_work/thumb/ccf4e6a69e9158771efdd32ba909b41de7662f5e.webp",
    title: "Empowering Women.",
    highlight: "Creating Stronger Communities.",
    description:
      "Supporting women with opportunities, skills and resources to build confident and sustainable futures.",
  },

  {
    image:
      "https://www.ceew.in/sites/default/files/Picture4_1.webp",
    title: "Creating Opportunities.",
    highlight: "Building Sustainable Livelihoods.",
    description:
      "Helping communities develop skills, income opportunities and pathways towards economic independence.",
  },

  {
    image:
      "https://citizensfoundation.org/assets/images/health/adani3.jpg",
    title: "Health For Every Community.",
    highlight: "Care That Reaches Further.",
    description:
      "Working towards accessible healthcare and healthier communities, especially where support is needed most.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const current = slides[currentSlide];

  /* ------------------------------------------
     NEXT
  ------------------------------------------ */

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  /* ------------------------------------------
     PREVIOUS
  ------------------------------------------ */

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* ------------------------------------------
     AUTO SLIDER
  ------------------------------------------ */

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">

      {/* ========================================
          HERO
      ======================================== */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-brand-navy

          h-[500px]

          sm:h-[540px]

          md:h-[570px]

          lg:h-[600px]

          xl:h-[620px]
        "
      >

        {/* ======================================
            IMAGE
        ====================================== */}

        <div
          key={currentSlide}
          className="
            absolute
            inset-0
            animate-[heroZoom_6s_ease-out]
          "
        >

          <img
            src={current.image}
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </div>

        {/* ======================================
            LEFT DARK GRADIENT
        ====================================== */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-black/80
            via-black/60
            to-black/5

            sm:from-brand-navy/90
            sm:via-brand-navy/65
            sm:to-transparent
          "
        />

        {/* ======================================
            BOTTOM GRADIENT
        ====================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black/40
            to-transparent
          "
        />

        {/* ======================================
            CONTENT
        ====================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1500px]
            items-center

            px-8

            sm:px-12

            md:px-16

            lg:px-20

            xl:px-24

            2xl:px-28
          "
        >

          <div
            key={currentSlide}
            className="
              max-w-[720px]
              animate-[heroContent_0.65s_ease-out]
            "
          >

            {/* ==================================
                LABEL
            ================================== */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2

                rounded-full
                border
                border-white/20
                bg-white/10

                px-3
                py-1.5

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]

                text-white

                backdrop-blur-md

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

              Amisankalp Social Foundation

            </div>

            {/* ==================================
                HEADING
            ================================== */}

            <h1
              className="
                text-[32px]
                font-bold
                leading-[1.08]
                tracking-tight
                text-white

                sm:text-[42px]

                md:text-[50px]

                lg:text-[58px]

                xl:text-[64px]

                2xl:text-[68px]
              "
            >

              {current.title}

              <br />

              <span className="text-brand-orange">
                {current.highlight}
              </span>

            </h1>

            {/* ==================================
                DESCRIPTION
            ================================== */}

            <p
              className="
                mt-5
                max-w-[590px]

                text-sm
                leading-6
                text-white/80

                sm:mt-6
                sm:text-base
                sm:leading-7

                lg:text-[17px]
                lg:leading-7
              "
            >
              {current.description}
            </p>

            {/* ==================================
                BUTTONS
            ================================== */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:mt-8
                sm:flex-row
              "
            >

              {/* PROGRAMMES */}

              <a
                href="/programmes"
                className="
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-2

                  rounded-lg

                  border
                  border-white/30

                  bg-brand-navy/90

                  px-5

                  text-xs
                  font-semibold
                  text-white

                  backdrop-blur-md

                  transition
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-brand-teal
                  hover:bg-brand-teal

                  sm:min-h-[50px]
                  sm:px-6
                  sm:text-sm
                "
              >

                Explore Our Programmes

                <ArrowRight size={17} />

              </a>

              {/* DONATE */}

              <a
                href="/get-involved/donation"
                className="
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-2

                  rounded-lg

                  border
                  border-white/40

                  bg-white/10

                  px-5

                  text-xs
                  font-semibold
                  text-white

                  backdrop-blur-md

                  transition
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-brand-orange
                  hover:bg-brand-orange

                  sm:min-h-[50px]
                  sm:px-6
                  sm:text-sm
                "
              >

                Donate Now

                <HeartHandshake size={17} />

              </a>

            </div>

          </div>

        </div>

        {/* ======================================
            PREVIOUS
        ====================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-4
            top-1/2
            z-20

            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center

            rounded-full

            border
            border-white/30

            bg-black/20

            text-white

            backdrop-blur-md

            transition

            hover:bg-white/20

            sm:left-6
            sm:h-10
            sm:w-10

            lg:left-8
            lg:h-11
            lg:w-11
          "
        >
          <ChevronLeft size={19} />
        </button>

        {/* ======================================
            NEXT
        ====================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-4
            top-1/2
            z-20

            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center

            rounded-full

            border
            border-white/30

            bg-black/20

            text-white

            backdrop-blur-md

            transition

            hover:bg-white/20

            sm:right-6
            sm:h-10
            sm:w-10

            lg:right-8
            lg:h-11
            lg:w-11
          "
        >
          <ChevronRight size={19} />
        </button>

        {/* ======================================
            SLIDER DOTS
        ====================================== */}

        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-20

            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >

          {slides.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2
                rounded-full
                border
                transition-all
                duration-300

                ${
                  currentSlide === index
                    ? "w-7 border-white bg-white"
                    : "w-2 border-white/70 bg-transparent"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;