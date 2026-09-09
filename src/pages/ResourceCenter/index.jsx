import React, { useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Lightbulb,
  Newspaper,
  Search,
  HeartHandshake,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function ResourceCenter() {
  useEffect(() => {
    const title = "Resource Center | Amisankalp Social Foundation";
    const description =
      "Explore reports, stories, insights and resources from Amisankalp Social Foundation.";

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
      `${window.location.origin}/resource-center`
    );
  }, []);

  const resources = [
    {
      title: "Annual Reports",
      description:
        "Explore our annual reports and learn about our work, progress and impact.",
      icon: FileText,
      image: "/images/resources/annual-report.jpg",
      category: "Reports",
    },
    {
      title: "Impact Stories",
      description:
        "Read stories that highlight the people, communities and initiatives behind our work.",
      icon: BookOpen,
      image: "/images/resources/impact-stories.jpg",
      category: "Stories",
    },
    {
      title: "Insights",
      description:
        "Discover perspectives, ideas and insights around social development and community action.",
      icon: Lightbulb,
      image: "/images/resources/insights.jpg",
      category: "Insights",
    },
    {
      title: "News & Updates",
      description:
        "Stay informed about our programmes, activities, campaigns and latest updates.",
      icon: Newspaper,
      image: "/images/resources/news.jpg",
      category: "Updates",
    },
  ];

  return (
    <main className="w-full">

      {/* =================================================
          HERO
      ================================================= */}

      <SectionHero
        eyebrow="Resource Center"
        title="Knowledge. Stories."
        subtitle=""
        description="Explore our resources, reports, stories and insights that drive change and inspire action."
        image="Resource-center\Resources-center-hero.jpg"
        imagePosition="center"
        theme="navy"
        accentColor="teal"
        showAccent={true}
      />

{/* =================================================
    BLOGS SECTION
================================================= */}

{/* =================================================
    BLOGS SECTION
================================================= */}

<section
  id="blogs"
  className="
    w-full
    bg-white
    px-4 py-16
    sm:px-6 sm:py-20
    lg:px-8 lg:py-24
  "
>
  <div className="mx-auto max-w-[1200px]">

    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
        Blogs
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        Ideas & Insights
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        Explore our latest thoughts, insights and perspectives on social
        development and community impact.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Blog 1 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(6,43,70,0.10)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/blog-1.jpg"
            alt="Blog title"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-brand-teal">
            September 05, 2026
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            Building Stronger Communities Together
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Exploring how collective action can create meaningful and
            sustainable change.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-all hover:gap-3"
          >
            Read More
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Blog 2 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(6,43,70,0.10)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/blog-2.jpg"
            alt="Blog title"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-brand-teal">
            August 22, 2026
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            The Power of Education
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            How access to quality education can create new opportunities.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Read More
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Blog 3 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(6,43,70,0.10)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/blog-3.jpg"
            alt="Blog title"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-brand-teal">
            August 10, 2026
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            Creating Sustainable Livelihoods
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Understanding the importance of skills and economic independence.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Read More
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

    </div>
  </div>
</section>


{/* =================================================
    FILMS & VIDEOS SECTION
================================================= */}

<section
  id="films-videos"
  className="
    w-full
    bg-[#f6fafb]
    px-4 py-16
    sm:px-6 sm:py-20
    lg:px-8 lg:py-24
  "
>
  <div className="mx-auto max-w-[1200px]">

    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
        Films & Videos
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        See the Impact
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        Watch films and videos that bring our programmes, people and stories
        to life.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Video 1 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src="/images/resources/video-1.jpg"
            alt="Community impact video"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-brand-navy/15" />

          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg transition-transform group-hover:scale-110">
            <span className="ml-1">▶</span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Film
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            A Journey of Community Change
          </h3>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Watch Video
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Video 2 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src="/images/resources/video-2.jpg"
            alt="Stories from the ground"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-brand-navy/15" />

          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg transition-transform group-hover:scale-110">
            <span className="ml-1">▶</span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Video
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            Stories From the Ground
          </h3>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Watch Video
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Video 3 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src="/images/resources/video-3.jpg"
            alt="Creating opportunities together"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-brand-navy/15" />

          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg transition-transform group-hover:scale-110">
            <span className="ml-1">▶</span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Video
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            Creating Opportunities Together
          </h3>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Watch Video
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

    </div>
  </div>
</section>


{/* =================================================
    STORIES SECTION
================================================= */}

<section
  id="stories"
  className="
    w-full
    bg-white
    px-4 py-16
    sm:px-6 sm:py-20
    lg:px-8 lg:py-24
  "
>
  <div className="mx-auto max-w-[1200px]">

    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
        Stories
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        Voices of Change
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        Real stories from people and communities connected to our work.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Story 1 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/story-1.jpg"
            alt="A new beginning through education"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Impact Story
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            A New Beginning Through Education
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            A story of opportunity, determination and the transformative
            power of learning.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Read Story
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Story 2 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/story-2.jpg"
            alt="From skills to independence"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Impact Story
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            From Skills to Independence
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            How access to skills and livelihood opportunities can transform
            a family's future.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Read Story
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

      {/* Story 3 */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,43,70,0.06)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src="/images/resources/story-3.jpg"
            alt="Growing a greener community"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-teal">
            Impact Story
          </p>

          <h3 className="mt-2 text-lg font-bold text-brand-navy">
            Growing a Greener Community
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Local communities coming together to create a healthier and
            greener environment.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
          >
            Read Story
            <ArrowRight size={15} />
          </a>
        </div>
      </article>

    </div>
  </div>
</section>

    </main>
  );
}

export default ResourceCenter;