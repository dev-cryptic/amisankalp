import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const programmeLinks = [
  {
    label: "Education",
    href: "/programmes/education",
  },
  {
    label: "Health",
    href: "/programmes/health",
  },
  {
    label: "Livelihood",
    href: "/programmes/livelihood",
  },
  {
    label: "Women Empowerment",
    href: "/programmes/women-empowerment",
  },
  {
    label: "Animal Welfare",
    href: "/programmes/animal-welfare",
  },
  {
    label: "Tree Plantation",
    href: "/programmes/tree-plantation",
  },
];

const involvementLinks = [
  {
    label: "Individual Giving",
    href: "/get-involved/donation",
  },
  {
    label: "Corporate Partnerships",
    href: "/get-involved/csr",
  },
  {
    label: "Cause Marketing & Events",
    href: "/get-involved/events",
  },
  {
    label: "Employee Engagement",
    href: "/get-involved/employee-engagement",
  },
  {
    label: "School Partnerships",
    href: "/get-involved/school-partnerships",
  },
  {
    label: "Volunteer / Internships",
    href: "/get-involved/volunteer",
  },
  {
    label: "Careers",
    href: "/get-involved/careers",
  },
];

const resourceLinks = [
  {
    label: "Blog",
    href: "/resources/blog",
  },
  {
    label: "Newsletter Archive",
    href: "/resources/newsletters",
  },
  {
    label: "Annual Reports",
    href: "/resources/reports",
  },
  {
    label: "Films / Videos",
    href: "/resources/videos",
  },
  {
    label: "Stories of Change",
    href: "/resources/stories",
  },
];

const organisationLinks = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Leadership",
    href: "/about-us#leadership",
  },
  {
    label: "Governance",
    href: "/about-us#governance",
  },
  
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "FAQs",
    href: "/contact#faq",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Refund / Cancellation",
    href: "/refund-cancellation-policy",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: "f",
    href: "#",
  },
  {
    label: "Instagram",
    icon: "◎",
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: "#",
  },
  {
    label: "YouTube",
    icon: "▶",
    href: "#",
  },
  {
    label: "Twitter",
    icon: "𝕏",
    href: "#",
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-brand-teal/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-brand-orange/10
            blur-3xl
          "
        />

      </div>

      <div className="relative">

        {/* =====================================================
            NEWSLETTER / CTA
        ===================================================== */}

        <section className="px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">

          <div
            className="
              mx-auto
              max-w-[1400px]
              overflow-hidden
              rounded-2xl
              bg-gradient-to-br
              from-brand-teal
              via-brand-teal
              to-brand-navy
              p-6
              shadow-2xl
              sm:p-8
              lg:p-10
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* CTA CONTENT */}

              <div className="max-w-2xl">

                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-sm
                  "
                >
                  <HeartHandshake size={15} />

                  Be part of the change
                </div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Together, we can create{" "}
                  <span className="text-brand-orange-light">
                    lasting change.
                  </span>
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-white/75
                    sm:text-base
                  "
                >
                  Stay connected with Amisankalp Social
                  Foundation and receive stories, updates,
                  impact reports and opportunities to make
                  a difference.
                </p>

              </div>

              {/* NEWSLETTER */}

              <div className="w-full lg:max-w-[470px]">

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >

                  <div
                    className="
                      flex
                      min-h-[50px]
                      flex-1
                      items-center
                      gap-3
                      rounded-xl
                      bg-white
                      px-4
                    "
                  >

                    <Mail
                      size={18}
                      className="shrink-0 text-brand-teal"
                    />

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        text-sm
                        text-gray-800
                        outline-none
                        placeholder:text-gray-400
                      "
                    />

                  </div>

                  <button
                    type="submit"
                    className="
                      min-h-[50px]
                      rounded-xl
                      bg-brand-orange
                      px-6
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-brand-orange-light
                    "
                  >
                    Subscribe
                  </button>

                </form>

                <p className="mt-2 text-xs text-white/50">
                  No spam. Just meaningful stories and updates.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">

          <div
            className="
              grid
              grid-cols-1
              gap-10
              border-b
              border-white/10
              pb-10
              sm:grid-cols-2
              lg:grid-cols-12
              lg:gap-8
            "
          >

            {/* =================================================
                ORGANISATION
            ================================================= */}

            <div className="lg:col-span-4">

              <a
                href="/"
                className="inline-block"
              >
                <img
                  src="/images/amisankalp-logo-Footer.png"
                  alt="Amisankalp Social Foundation"
                  className="
                    w-[175px]
                    rounded-lg
                    bg-white
                    p-2
                    sm:w-[190px]
                  "
                />
              </a>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-white/60
                "
              >
                Amisankalp Social Foundation works with
                communities to create sustainable
                opportunities, strengthen lives and build
                a more inclusive and resilient future.
              </p>

              {/* CONTACT */}

              <div className="mt-6 space-y-3">

                <a
                  href="tel:+919876543210"
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    text-white/70
                    transition
                    hover:text-white
                  "
                >
                  <Phone
                    size={17}
                    className="
                      mt-0.5
                      shrink-0
                      text-brand-teal-light
                    "
                  />

                  <span>
                    +91 98765 43210
                  </span>
                </a>

                <a
                  href="mailto:amisankalp2026@gmail.com"
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    text-white/70
                    transition
                    hover:text-white
                  "
                >
                  <Mail
                    size={17}
                    className="
                      mt-0.5
                      shrink-0
                      text-brand-teal-light
                    "
                  />

                  <span>
                    amisankalp2026@gmail.com
                  </span>
                </a>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-white/70
                  "
                >
                  <MapPin
                    size={17}
                    className="
                      mt-0.5
                      shrink-0
                      text-brand-teal-light
                    "
                  />

                  <span>
                    Amisankalp Social Foundation,
                    <br />
                    India
                  </span>
                </div>

              </div>

              {/* SOCIAL MEDIA */}

              <div className="mt-7">

                <p
                  className="
                    mb-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white/50
                  "
                >
                  Follow Us
                </p>

                <div className="flex items-center gap-2">

                  {socialLinks.map((social) => (

                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/10
                        bg-white/5
                        text-xs
                        font-semibold
                        text-white/70
                        transition
                        hover:border-brand-teal
                        hover:bg-brand-teal
                        hover:text-white
                      "
                    >
                      {social.icon}
                    </a>

                  ))}

                </div>

              </div>

            </div>

            {/* =================================================
                PROGRAMMES
            ================================================= */}

            <FooterColumn
              title="Our Programmes"
              links={programmeLinks}
            />

            {/* =================================================
                GET INVOLVED
            ================================================= */}

            <FooterColumn
              title="Get Involved"
              links={involvementLinks}
            />

            {/* =================================================
                RESOURCES
            ================================================= */}

            <FooterColumn
              title="Resources"
              links={resourceLinks}
            />

            {/* =================================================
                ORGANISATION
            ================================================= */}

            <FooterColumn
              title="Organisation"
              links={organisationLinks}
            />

          </div>

        </div>

        {/* =====================================================
            LOWER FOOTER
        ===================================================== */}

        <div className="border-t border-white/10">

          <div
            className="
              mx-auto
              flex
              max-w-[1400px]
              flex-col
              gap-4
              px-4
              py-6
              sm:px-6
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:px-8
            "
          >

            <p
              className="
                text-xs
                leading-5
                text-white/45
              "
            >
              © {new Date().getFullYear()} Amisankalp
              Social Foundation. All rights reserved.
            </p>

            {/* LEGAL */}

            <div
              className="
                flex
                flex-wrap
                gap-x-5
                gap-y-2
              "
            >

              {legalLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-xs
                    text-white/45
                    transition
                    hover:text-white
                  "
                >
                  {link.label}
                </a>

              ))}

            </div>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                self-start
                rounded-lg
                border
                border-white/10
                text-white/60
                transition
                hover:border-brand-teal
                hover:bg-brand-teal
                hover:text-white
                lg:self-auto
              "
            >
              <ArrowUp size={17} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div className="lg:col-span-2">

      <h3
        className="
          mb-5
          text-sm
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((link) => (

          <li key={link.label}>

            <a
              href={link.href}
              className="
                group
                flex
                items-start
                gap-1.5
                text-sm
                leading-5
                text-white/55
                transition
                hover:text-white
              "
            >

              <ChevronRight
                size={13}
                className="
                  mt-1
                  shrink-0
                  text-brand-teal
                  opacity-0
                  transition
                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />

              <span>
                {link.label}
              </span>

            </a>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Footer;