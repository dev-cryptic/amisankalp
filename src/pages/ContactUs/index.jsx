import React, { useEffect } from "react";
import {
  CircleHelp,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

function ContactUs() {
  useEffect(() => {
    const title =
      "Contact Us | Amisankalp Social Foundation";

    const description =
      "Get in touch with Amisankalp Social Foundation for questions, suggestions, support and partnership opportunities.";

    document.title = title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      description
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/contact-us`
    );
  }, []);

  /* =====================================================
     HERO BOTTOM NAVIGATION
  ===================================================== */

  const heroValues = [
    {
      title: "FAQs",
      description: "Find quick answers",
      icon: CircleHelp,
      href: "#faqs",
    },
    {
      title: "Privacy Policy",
      description: "Your privacy matters",
      icon: LockKeyhole,
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      description: "Our terms of use",
      icon: FileCheck2,
      href: "/terms-and-conditions",
    },
    {
      title: "Refund Policy",
      description: "Donation refund information",
      icon: FileCheck2,
      href: "/refund-policy",
    },
  ];

  return (
    <main>

      {/* =================================================
          CONTACT HERO
      ================================================= */}

      <SectionHero
      eyebrow="Contact Center"
        title="We're Here to Help."
        description="Have questions, suggestions, or need support? We'd love to hear from you."
        image="https://t4.ftcdn.net/jpg/05/04/78/25/360_F_504782581_LHwsDbXlrFiiadWC4i15yV2lhbJnB8g0.jpg"
        imagePosition="center"
        theme="navy"
        accentColor="teal"
        values={heroValues}
      />




      {/* =====================================================
    FAQ SECTION
===================================================== */}

<section
  id="faqs"
  aria-labelledby="faq-heading"
  className="
    w-full
    bg-white

    px-4
    py-12

    sm:px-6
    sm:py-16

    lg:px-8
    lg:py-20
  "
>
  <div
    className="
      relative
      mx-auto
      max-w-[1400px]

      overflow-hidden

      rounded-2xl

      border
      border-gray-200

      bg-gradient-to-br
      from-white
      via-white
      to-[#F7FAFA]

      px-5
      py-7

      shadow-[0_8px_30px_rgba(6,43,70,0.06)]

      sm:px-8
      sm:py-8

      lg:px-10
      lg:py-9
    "
  >

    {/* =================================================
        DECORATIVE BACKGROUND
    ================================================= */}

    <div
      className="
        pointer-events-none
        absolute

        -left-20
        bottom-0

        h-60
        w-60

        rounded-full

        bg-brand-teal/[0.035]

        blur-3xl
      "
    />

    <div
      className="
        pointer-events-none
        absolute

        -right-20
        -top-20

        h-60
        w-60

        rounded-full

        bg-brand-orange/[0.025]

        blur-3xl
      "
    />


    {/* =================================================
        HEADING
    ================================================= */}

    <div className="relative z-10">

      <h2
        id="faq-heading"
        className="
          text-2xl
          font-bold
          tracking-tight

          text-brand-navy

          sm:text-3xl
        "
      >
        Frequently Asked Questions
      </h2>


      <div
        className="
          mt-4

          h-[3px]
          w-8

          rounded-full

          bg-brand-teal

          sm:w-10
        "
      />

    </div>


    {/* =================================================
        FAQ CONTENT
    ================================================= */}

    <div
      className="
        relative
        z-10

        mt-7

        grid
        grid-cols-1

        gap-8

        lg:grid-cols-[240px_1fr]

        lg:gap-12
      "
    >


{/* =================================================
    LEFT INFO
================================================= */}

<div
  className="
    flex
    h-full
    w-full

    flex-col

    items-center
    justify-center

    text-center
  "
>
{/* FAQ IMAGE */}

<div
  className="
    relative

    aspect-square

    w-[405px]

    overflow-hidden

    rounded-2xl

    sm:w-[315px]
  "
>
  <img
    src="https://img.magnific.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?semt=ais_hybrid&w=740&q=80"
    alt="Frequently asked questions"
    className="
      h-full
      w-full

      object-cover

      transition-transform
      duration-500

      hover:scale-105
    "
  />
</div>


  {/* DESCRIPTION */}

  {/* <p
    className="
      mt-5

      max-w-[190px]

      text-center

      text-sm
      leading-6

      text-gray-600
    "
  >
    Find quick answers to
    <br />
    common questions.
  </p> */}

</div>


      {/* =================================================
          FAQ ACCORDION
      ================================================= */}

      <div className="w-full">

        <div className="space-y-1.5">

          {[
            {
              question:
                "How can I donate to Amisankalp Social Foundation?",
              answer:
                "You can support our initiatives through the donation options available on our website. Your contribution can help support our programmes and community initiatives.",
            },
            {
              question:
                "Is my donation eligible for tax benefits?",
              answer:
                "Tax benefit eligibility depends on the applicable laws and the organisation's relevant registration and documentation. Please contact us for the applicable details.",
            },
            {
              question:
                "How are my donations used?",
              answer:
                "Donations are intended to support the Foundation's social initiatives and programme activities across its various programme areas.",
            },
            {
              question:
                "Can I volunteer or intern with Amisankalp?",
              answer:
                "We welcome people interested in contributing their time, skills and energy to our initiatives. Contact us to learn about current volunteer and internship opportunities.",
            },
            {
              question:
                "How can my organization partner with you?",
              answer:
                "Organisations interested in partnerships, CSR initiatives or other forms of collaboration can get in touch with our team to discuss possible opportunities.",
            },
          ].map((faq, index) => (
            <details
              key={faq.question}
              className="
                group

                overflow-hidden

                rounded-lg

                border
                border-gray-200

                bg-white

                transition-all
                duration-300

                hover:border-brand-teal/20

                hover:shadow-sm
              "
            >

              {/* QUESTION */}

              <summary
                className="
                  flex
                  cursor-pointer

                  list-none

                  items-center
                  justify-between

                  gap-4

                  px-4
                  py-3.5

                  text-left

                  sm:px-5
                  sm:py-4

                  [&::-webkit-details-marker]:hidden
                "
              >

                <span
                  className="
                    text-sm
                    font-semibold

                    text-brand-navy

                    transition-colors
                    duration-300

                    group-hover:text-brand-teal

                    sm:text-[15px]
                  "
                >
                  {faq.question}
                </span>


                {/* CHEVRON */}

                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-gray-50

                    text-brand-navy

                    transition-all
                    duration-300

                    group-open:rotate-180
                    group-open:bg-brand-teal/10
                    group-open:text-brand-teal
                  "
                >
                  <ChevronDown size={16} />
                </span>

              </summary>


              {/* ANSWER */}

              <div
                className="
                  border-t
                  border-gray-100

                  px-4
                  pb-4
                  pt-3

                  sm:px-5
                "
              >

                <p
                  className="
                    max-w-[850px]

                    text-sm
                    leading-6

                    text-gray-500
                  "
                >
                  {faq.answer}
                </p>

              </div>

            </details>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>






{/* =================================================
    CONTACT SECTION
================================================= */}

<section
  id="contact"
  className="
    w-full
    bg-white
    px-4 py-16
    sm:px-6 sm:py-20
    lg:px-8 lg:py-24
  "
>
  <div className="mx-auto max-w-[1200px]">

    {/* Section Heading */}
    <div className="mb-10 text-center sm:mb-12">
      {/* <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.16em]
          text-brand-teal
        "
      >
        Contact Us
      </p> */}

      <h2
        className="
          mt-3
          text-3xl
          font-bold
          tracking-tight
          text-brand-navy
          sm:text-4xl
        "
      >
         Have a question, suggestion, or want to connect with us?
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-sm
          leading-7
          text-gray-500
          sm:text-base
        "
      >
       
        Send us a message and our team will get back to you.
      </p>
    </div>

    {/* Form + Google Map */}
    <div
      className="
        grid
        grid-cols-1
        overflow-hidden
        rounded-2xl
        border border-gray-100
        bg-white
        shadow-[0_10px_40px_rgba(6,43,70,0.07)]

        lg:grid-cols-[1fr_420px]
      "
    >

      {/* =================================================
          FORM
      ================================================= */}

      <div className="p-6 sm:p-8 lg:p-10">

        <h3
          className="
            text-2xl
            font-bold
            tracking-tight
            text-brand-navy
          "
        >
          Send Us a Message
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Fill out the form below and we'll get back to you.
        </p>

        <form className="mt-7 space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-brand-navy
              "
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="
                h-11
                w-full
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                text-sm
                text-brand-navy
                outline-none
                transition-all

                placeholder:text-gray-400

                focus:border-brand-teal
                focus:ring-2
                focus:ring-brand-teal/10
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-brand-navy
              "
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="
                h-11
                w-full
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                text-sm
                text-brand-navy
                outline-none
                transition-all

                placeholder:text-gray-400

                focus:border-brand-teal
                focus:ring-2
                focus:ring-brand-teal/10
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-brand-navy
              "
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="
                h-11
                w-full
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                text-sm
                text-brand-navy
                outline-none
                transition-all

                placeholder:text-gray-400

                focus:border-brand-teal
                focus:ring-2
                focus:ring-brand-teal/10
              "
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-brand-navy
              "
            >
              Subject
            </label>

            <select
              id="subject"
              name="subject"
              defaultValue=""
              className="
                h-11
                w-full
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                text-sm
                text-gray-400
                outline-none
                transition-all

                focus:border-brand-teal
                focus:ring-2
                focus:ring-brand-teal/10
              "
            >
              <option value="" disabled>
                Select a subject
              </option>

              <option value="general">
                General Inquiry
              </option>

              <option value="donation">
                Donation Support
              </option>

              <option value="volunteer">
                Volunteer
              </option>

              <option value="partnership">
                Partnership
              </option>

              <option value="programme">
                Programme Information
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-brand-navy
              "
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              className="
                w-full
                resize-none
                rounded-lg
                border border-gray-200
                bg-white
                px-4
                py-3
                text-sm
                text-brand-navy
                outline-none
                transition-all

                placeholder:text-gray-400

                focus:border-brand-teal
                focus:ring-2
                focus:ring-brand-teal/10
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-lg
              bg-brand-teal
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_6px_18px_rgba(0,143,149,0.18)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-brand-teal-light
              hover:shadow-[0_10px_24px_rgba(0,143,149,0.22)]

              active:translate-y-0
            "
          >
            Send Message

            <span>↗</span>
          </button>

        </form>
      </div>

      {/* =================================================
          GOOGLE MAP
      ================================================= */}

      <div
        className="
          relative
          min-h-[380px]
          border-t
          border-gray-100

          lg:min-h-full
          lg:border-l
          lg:border-t-0
        "
      >
        <iframe
          title="Amisankalp Social Foundation Location"
          src="https://www.google.com/maps?q=New%20Delhi%2C%20India&output=embed"
          className="
            absolute
            inset-0
            h-full
            w-full
            border-0
          "
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  </div>
</section>




{/* =================================================
    CONTACT INFORMATION — HORIZONTAL
================================================= */}

<div
  className="
    mx-auto
    mb-10
    max-w-[1200px]
    overflow-hidden
    rounded-2xl
    border border-gray-100
    bg-white
    shadow-[0_8px_30px_rgba(6,43,70,0.06)]
  "
>
  <div
    className="
      grid
      grid-cols-1

      sm:grid-cols-2

      lg:grid-cols-4
    "
  >

    {/* Visit Us */}
    <div
      className="
        flex
        items-center
        gap-4
        p-6

        border-b
        border-gray-100

        sm:border-r
        lg:border-b-0
        lg:p-7
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-brand-teal
          text-white
          shadow-[0_5px_15px_rgba(0,143,149,0.18)]
        "
      >
        <span className="text-lg">⌖</span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-brand-navy">
          Visit Us
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          123, Community Center,
          <br />
          New Delhi - 110001
        </p>
      </div>
    </div>

    {/* Call Us */}
    <div
      className="
        flex
        items-center
        gap-4
        p-6

        border-b
        border-gray-100

        lg:border-r
        lg:border-b-0
        lg:p-7
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-brand-teal
          text-white
          shadow-[0_5px_15px_rgba(0,143,149,0.18)]
        "
      >
        <span className="text-lg">⌕</span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-brand-navy">
          Call Us
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          +91 98765 43210
          <br />
          Mon - Sat: 9 AM - 6 PM
        </p>
      </div>
    </div>

    {/* Email Us */}
    <div
      className="
        flex
        items-center
        gap-4
        p-6

        border-b
        border-gray-100

        sm:border-r
        lg:border-b-0
        lg:p-7
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-brand-teal
          text-white
          shadow-[0_5px_15px_rgba(0,143,149,0.18)]
        "
      >
        <span className="text-base">✉</span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-brand-navy">
          Email Us
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          amisankalp2026@gmail.com
          <br />
          We reply within 24 hours
        </p>
      </div>
    </div>

    {/* Follow Us */}
    <div
      className="
        flex
        items-center
        gap-4
        p-6
        lg:p-7
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-brand-teal
          text-white
          shadow-[0_5px_15px_rgba(0,143,149,0.18)]
        "
      >
        <span className="text-base">••</span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-brand-navy">
          Follow Us
        </h3>

        <div className="mt-2 flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
          >
            f
          </a>

          <a
            href="#"
            className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
          >
            ◎
          </a>

          <a
            href="#"
            className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
          >
            in
          </a>

          <a
            href="#"
            className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
          >
            ▶
          </a>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
  );
}

export default ContactUs;