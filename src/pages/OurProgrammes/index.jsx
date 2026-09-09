import React, { useEffect } from "react";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Leaf,
  PawPrint,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";
import ProgrammeAreaCard from "../../components/ProgrammeAreaCard"


function Programmes() {

  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {

    const title =
      "Our Programmes | Amisankalp Social Foundation";

    const description =
      "Explore Amisankalp Social Foundation's programmes focused on empowering communities, creating opportunities and building a sustainable future.";

    document.title = title;


    /* META DESCRIPTION */

    let metaDescription =
      document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");

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


    /* CANONICAL */

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical = document.createElement("link");

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
      `${window.location.origin}/programmes`
    );


    /* OPEN GRAPH */

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
      `${window.location.origin}/programmes`
    );


    /* TWITTER */

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

      {/* =================================================
          PROGRAMMES HERO
      ================================================= */}

      <SectionHero
      eyebrow="Programmes"
        title="Empowering Communities. Transforming Lives.."
        highlight=""
        description="
          Our programmes are designed to address critical
          needs, create opportunities and build a
          sustainable future for all.
        "
        image="/images/hero/programmes.jpg"
      />



      {/* =================================================
          PROGRAMME CARDS WILL COME HERE
      ================================================= */}


      {/* =====================================================
    OUR PROGRAMMES
===================================================== */}

<section
  id="programmes"
  aria-labelledby="programmes-heading"
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

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-12">

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
        Our Focus Areas
      </p>


      {/* HEADING */}

      <h2
        id="programmes-heading"
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
        Our Programmes
      </h2>


      {/* ACCENT */}

      <div
        className="
          mx-auto
          mt-4

          h-[3px]
          w-12

          rounded-full

          bg-brand-teal

          sm:w-14
        "
      />


      {/* DESCRIPTION */}

      <p
        className="
          mt-5

          text-sm
          leading-7

          text-gray-600

          sm:text-base
          sm:leading-8
        "
      >
        Our programmes focus on creating meaningful
        opportunities, strengthening communities and
        building a more sustainable future for all.
      </p>

    </div>


    {/* =================================================
        PROGRAMME GRID
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

      {/* =================================================
          EDUCATION
      ================================================= */}

      <ProgrammeAreaCard
        title="Education"
        description="
          Providing quality education and learning
          opportunities to children and youth for a
          brighter future.
        "
        image="https://media.istockphoto.com/id/1126130554/photo/row-of-old-books-with-colorful-covers-on-pastel-blue-background-education-concept-mock-up-for.jpg?b=1&s=1024x1024&w=0&k=20&c=eu3qD7Dt8Oojc2ikPNHR2L7kzqQw0VzYocBO-Fmmuc4="
        icon={GraduationCap}
        color="teal"
        href="/programmes/education"
        points={[
          "School Support",
          "Digital Learning",
          "Scholarships",
          "Skill Development",
        ]}
      />


      {/* =================================================
          HEALTH
      ================================================= */}

      <ProgrammeAreaCard
        title="Health"
        description="
          Improving healthcare access and promoting
          well-being for healthier communities.
        "
        image="https://static.vecteezy.com/system/resources/thumbnails/070/374/058/small/medical-equipment-on-blue-background-with-stethoscope-clipboard-and-gloves-free-photo.jpg"
        icon={HeartPulse}
        color="teal"
        href="/programmes/health"
        points={[
          "Health Camps",
          "Maternal & Child Care",
          "Nutrition Support",
          "Sanitation & Hygiene",
        ]}
      />


      {/* =================================================
          LIVELIHOOD
      ================================================= */}

      <ProgrammeAreaCard
        title="Livelihood"
        description="
          Creating sustainable livelihood opportunities
          and skills for economic independence.
        "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAGdLj5yOMAb5lnpFffFk171_VQPjJUIDJK3v-Jl3fFb0Ar50O5B2jWVT&s=10"
        icon={BriefcaseBusiness}
        color="orange"
        href="/programmes/livelihood"
        points={[
          "Skill Training",
          "Entrepreneurship",
          "Financial Inclusion",
          "Market Linkages",
        ]}
      />


      {/* =================================================
          WOMEN EMPOWERMENT
      ================================================= */}

      <ProgrammeAreaCard
        title="Women Empowerment"
        description="
          Empowering women to lead independent,
          dignified and meaningful lives.
        "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab1pxj7DlTtgE0h2odZIQf9ryAvT432elUnZQCYMavQ&s=10"
        icon={Users}
        color="pink"
        href="/programmes/women-empowerment"
        points={[
          "Self Help Groups",
          "Leadership Training",
          "Rights & Awareness",
          "Livelihood Support",
        ]}
      />


      {/* =================================================
          ANIMAL WELFARE
      ================================================= */}

      <ProgrammeAreaCard
        title="Animal Welfare"
        description="
          Promoting compassionate care, protection and
          well-being for animals and their communities.
        "
        image="https://thumbs.dreamstime.com/b/wildlife-conservation-day-wild-animals-to-home-wildlife-protection-wildlife-conservation-day-wild-animals-to-home-167494159.jpg"
        icon={PawPrint}
        color="orange"
        href="/programmes/animal-welfare"
        points={[
          "Animal Care",
          "Rescue & Rehabilitation",
          "Health & Vaccination",
          "Community Awareness",
        ]}
      />


      {/* =================================================
          TREE PLANTATION
      ================================================= */}

      <ProgrammeAreaCard
        title="Tree Plantation"
        description="
          Supporting greener communities through tree
          plantation, environmental awareness and
          sustainable practices.
        "
        image="https://static.vecteezy.com/system/resources/thumbnails/074/135/901/small/young-plant-soil-hand-nature-growth-environment-green-forest-sunlight-outdoor-person-gently-holds-rich-soil-and-small-seedling-symbolizing-hope-sustainability-and-environmental-care-photo.jpeg"
        icon={Leaf}
        color="green"
        href="/programmes/tree-plantation"
        points={[
          "Tree Plantation",
          "Community Participation",
          "Environmental Awareness",
          "Green Communities",
        ]}
      />

    </div>

  </div>
</section>


    </main>
  );
}


export default Programmes;