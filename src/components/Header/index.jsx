import { useEffect, useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    HeartHandshake,
} from "lucide-react";

const navItems = [
    {
        label: "Home",
        href: "/",
    },

    {
        label: "About Us",
        href: "/about-us",
        dropdown: [
            {
                label: "Our Story",
                href: "/about-us#our-story",
            },
            {
                label: "Our Values",
                href: "/about-us#our-value",
            },
            {
                label: "Leadership",
                href: "/about-us#leadership",
            },
            {
                label: "Governance",
                href: "/about-us#governance",
            },
        ],
    },

    {
        label: "Our Programmes",
        href: "/programmes",
        dropdown: [
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
        ],
    },

    {
        label: "Impact",
        href: "/impact",
    },

    {
        label: "Volunteer",
        href: "/get-involved",
        dropdown: [
            {
                label: "Individual Giving / Donation",
                href: "/get-involved/donation",
            },
            {
                label: "Corporate Partnerships (CSR)",
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
                label: "Careers / Work With Us",
                href: "/get-involved/careers",
            },
        ],
    },

    //   {
    //     label: "Media Centre",
    //     href: "/media",
    //     dropdown: [
    //       {
    //         label: "Press Releases",
    //         href: "/media/press-releases",
    //       },
    //       {
    //         label: "Media Coverage",
    //         href: "/media/coverage",
    //       },
    //       {
    //         label: "Events / Workshops",
    //         href: "/media/events",
    //       },
    //       {
    //         label: "Notable Supporters / Personalities",
    //         href: "/media/supporters",
    //       },
    //     ],
    //   },

    {
        label: "Resource Center",
        href: "/resources",
        dropdown: [
            {
                label: "Blog",
                href: "/resources#blog",
            },
            {
                label: "Films / Videos",
                href: "/resources#films-videos",
            },
            {
                label: "Stories of Change",
                href: "/resources#stories",
            },
        ],
    },

    {
        label: "Contact",
        href: "/contact",
    },
];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    /* -----------------------------------------
       CLOSE MOBILE MENU ON DESKTOP
    ----------------------------------------- */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
                setOpenDropdown(null);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* -----------------------------------------
       LOCK BODY SCROLL WHEN MOBILE MENU OPEN
    ----------------------------------------- */

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    /* -----------------------------------------
       CLOSE MENU
    ----------------------------------------- */

    const closeMenu = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    /* -----------------------------------------
       TOGGLE MOBILE DROPDOWN
    ----------------------------------------- */

    const toggleDropdown = (index) => {
        setOpenDropdown((current) =>
            current === index ? null : index
        );
    };

    return (
        <header className="sticky top-0 z-[1000] w-full bg-white">

            {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}

            <div className="hidden bg-brand-navy text-white lg:block">
                <div
                    className="
            mx-auto
            flex
            min-h-[34px]
            max-w-[1400px]
            items-center
            justify-between
            px-6
            text-xs
          "
                >

                    {/* LEFT - CONTACT */}

                    <div className="flex items-center gap-6">

                        <a
                            href="tel:+919876543210"
                            className="
                flex
                items-center
                gap-2
                opacity-90
                transition
                hover:opacity-100
              "
                        >
                            <Phone size={13} />

                            <span>
                                +91 ABC
                            </span>
                        </a>

                        <a
                            href="mailto:amisankalp2026@gmail.com"
                            className="
                flex
                items-center
                gap-2
                opacity-90
                transition
                hover:opacity-100
              "
                        >
                            <Mail size={13} />

                            <span>
                                amisankalp2026@gmail.com
                            </span>
                        </a>

                    </div>

                    {/* RIGHT - MESSAGE */}

                    <span className="opacity-70">
                        Building communities. Creating change.
                    </span>

                </div>
            </div>

            {/* =====================================================
          MAIN HEADER
      ===================================================== */}

            <div className="border-b border-gray-100 bg-white">

                <div
                    className="
            mx-auto
            flex
            h-[64px]
            max-w-[1400px]
            items-center
            gap-2
            px-3

            sm:h-[72px]
            sm:px-5
            sm:gap-3

            lg:h-[78px]
            lg:px-6
          "
                >

                    {/* =================================================
              LOGO
          ================================================= */}

                    <a
                        href="/"
                        onClick={closeMenu}
                        className="
    flex
    shrink-0
    items-center
    gap-2
    sm:gap-2.5
  "
                    >
                        {/* Circular logo mark */}
                        <div
                            className="
      relative
      h-[38px]
      w-[38px]
      shrink-0
      overflow-hidden
      sm:h-[43px]
      sm:w-[43px]
      md:h-[46px]
      md:w-[46px]
    "
                        >
                            <img
                                src="/images/amisankalp-logo.png"
                                alt=""
                                aria-hidden="true"
                                className="
        absolute
        left-0
        top-0
        h-full
        w-auto
        max-w-none
      "
                            />
                        </div>

                        {/* Text logo */}
                        <div className="flex flex-col leading-none">

                            <div
                                className="
        whitespace-nowrap
        text-[15px]
        font-bold
        tracking-[0.015em]
        text-brand-navy

        sm:text-[17px]
        md:text-[18px]
      "
                            >
                                AMISAN
                                <span className="text-brand-orange">
                                    KALP
                                </span>
                            </div>

                            <div
                                className="
        mt-1
        whitespace-nowrap
        text-[7px]
        font-semibold
        tracking-[0.07em]
        text-brand-green

        sm:text-[8px]
        md:text-[8.5px]
      "
                            >
                                SOCIAL FOUNDATION
                            </div>

                        </div>
                    </a>

                    {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

                    <nav
                        className="
              ml-auto
              hidden
              lg:block
            "
                    >

                        <ul
                            className="
                flex
                items-center
              "
                        >

                            {navItems.map((item, index) => (

                                <li
                                    key={item.label}
                                    className="group relative"
                                >

                                    {/* NAV LINK */}

                                    <a
                                        href={item.href}
                                        className="
                      relative
                      flex
                      min-h-[78px]
                      items-center
                      justify-center
                      gap-1
                      px-2

                      text-[11px]
                      font-medium
                      text-gray-800

                      transition
                      duration-200

                      hover:text-brand-teal

                      xl:px-2.5
                      xl:text-xs

                      2xl:px-3
                      2xl:text-[13px]
                    "
                                    >

                                        <span>
                                            {item.label}
                                        </span>

                                        {item.dropdown && (
                                            <ChevronDown
                                                size={13}
                                                strokeWidth={2}
                                                className="
                          transition-transform
                          duration-200
                          group-hover:rotate-180
                        "
                                            />
                                        )}

                                        {/* ACTIVE / HOVER LINE */}

                                        <span
                                            className="
                        absolute
                        bottom-0
                        left-2
                        right-2
                        h-[3px]
                        origin-center
                        scale-x-0
                        bg-brand-teal
                        transition-transform
                        duration-200
                        group-hover:scale-x-100

                        xl:left-2.5
                        xl:right-2.5
                      "
                                        />

                                    </a>

                                    {/* =================================================
                      DESKTOP DROPDOWN
                  ================================================= */}

                                    {item.dropdown && (

                                        <div
                                            className="
                        invisible
                        absolute
                        left-1/2
                        top-full
                        z-[1100]
                        w-[255px]
                        -translate-x-1/2
                        translate-y-2

                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        p-2

                        opacity-0

                        shadow-[0_18px_50px_rgba(6,43,70,0.14)]

                        transition-all
                        duration-200

                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                                        >

                                            {item.dropdown.map(
                                                (subItem) => (

                                                    <a
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="
                              block
                              rounded-lg
                              px-3
                              py-2.5

                              text-[13px]
                              leading-5
                              text-gray-700

                              transition

                              hover:bg-teal-50
                              hover:text-brand-teal
                            "
                                                    >
                                                        {subItem.label}
                                                    </a>

                                                )
                                            )}

                                        </div>

                                    )}

                                </li>

                            ))}

                        </ul>

                    </nav>

                    {/* =================================================
              DONATE + MOBILE MENU
          ================================================= */}

                    <div className="ml-auto flex items-center gap-2">

                        {/* =================================================
                DONATE BUTTON
            ================================================= */}

                        <a
                            href="/donate"
                            onClick={closeMenu}
                            aria-label="Donate Now"
                            className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center

                rounded-lg

                bg-gradient-to-br
                from-brand-orange
                to-brand-orange-light

                text-white

                shadow-[0_5px_16px_rgba(245,130,32,0.20)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(245,130,32,0.28)]

                active:scale-95

                sm:h-10
                sm:w-auto
                sm:px-3.5
              "
                        >

                            <HeartHandshake
                                size={16}
                                strokeWidth={2}
                                className="sm:size-[17px]"
                            />

                            <span
                                className="
                  hidden
                  pl-1.5
                  text-xs
                  font-semibold

                  sm:inline
                "
                            >
                                Donate
                            </span>

                        </a>


                        {/* =================================================
                MOBILE HAMBURGER
            ================================================= */}

                        <button
                            type="button"
                            onClick={() =>
                                setMobileOpen((current) => !current)
                            }
                            aria-label={
                                mobileOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={mobileOpen}
                            className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center

                rounded-lg

                border
                border-gray-200

                bg-white

                text-brand-navy

                transition-all
                duration-300

                hover:border-brand-teal
                hover:bg-brand-teal/[0.04]
                hover:text-brand-teal

                active:scale-95

                sm:h-10
                sm:w-10

                lg:hidden
              "
                        >

                            {mobileOpen ? (
                                <X
                                    size={20}
                                    strokeWidth={2}
                                />
                            ) : (
                                <Menu
                                    size={20}
                                    strokeWidth={2}
                                />
                            )}

                        </button>

                    </div>

                </div>

                {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

                {mobileOpen && (

                    <button
                        type="button"
                        aria-label="Close navigation"
                        onClick={closeMenu}
                        className="
            fixed
            inset-0
            top-[64px]
            z-[1001]
            cursor-default

            bg-brand-navy/35
            backdrop-blur-[2px]

            lg:hidden

            sm:top-[72px]
          "
                    />

                )}

                {/* =====================================================
          MOBILE NAVIGATION DRAWER
      ===================================================== */}

                <aside
                    className={`
          fixed
          right-0
          top-[64px]
          z-[1002]

          h-[calc(100vh-64px)]

          w-[min(88vw,390px)]

          overflow-y-auto

          bg-white

          shadow-[-15px_0_45px_rgba(6,43,70,0.12)]

          transition-transform
          duration-300
          ease-out

          sm:top-[72px]
          sm:h-[calc(100vh-72px)]

          lg:hidden

          ${mobileOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                        }
        `}
                >

                    <div className="p-5">

                        {/* =================================================
              MOBILE NAVIGATION ITEMS
          ================================================= */}

                        {navItems.map((item, index) => (

                            <div
                                key={item.label}
                                className="
                border-b
                border-gray-100
              "
                            >

                                {/* MAIN ROW */}

                                <div
                                    className="
                  flex
                  min-h-[55px]
                  items-center
                "
                                >

                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="
                    flex-1

                    py-3

                    text-[15px]
                    font-medium
                    text-brand-navy

                    transition

                    hover:text-brand-teal
                  "
                                    >
                                        {item.label}
                                    </a>

                                    {/* DROPDOWN TOGGLE */}

                                    {item.dropdown && (

                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleDropdown(index)
                                            }
                                            aria-label={`Toggle ${item.label} submenu`}
                                            aria-expanded={
                                                openDropdown === index
                                            }
                                            className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center

                      rounded-lg

                      text-brand-navy

                      transition

                      hover:bg-teal-50
                      hover:text-brand-teal
                    "
                                        >

                                            <ChevronDown
                                                size={19}
                                                className={`
                        transition-transform
                        duration-200

                        ${openDropdown === index
                                                        ? "rotate-180 text-brand-teal"
                                                        : ""
                                                    }
                      `}
                                            />

                                        </button>

                                    )}

                                </div>

                                {/* =================================================
                  MOBILE SUBMENU
              ================================================= */}

                                {item.dropdown && (

                                    <div
                                        className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    ${openDropdown === index
                                                ? "grid-rows-[1fr] pb-2"
                                                : "grid-rows-[0fr]"
                                            }
                  `}
                                    >

                                        <div className="overflow-hidden">

                                            {item.dropdown.map(
                                                (subItem) => (

                                                    <a
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        onClick={closeMenu}
                                                        className="
                            mb-1
                            block

                            border-l-2
                            border-transparent

                            rounded-r-lg

                            px-3
                            py-2.5

                            text-[13px]
                            leading-5
                            text-gray-500

                            transition

                            hover:border-brand-teal
                            hover:bg-teal-50
                            hover:text-brand-teal
                          "
                                                    >
                                                        {subItem.label}
                                                    </a>

                                                )
                                            )}

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                        {/* =================================================
              MOBILE CONTACT INFORMATION
          ================================================= */}

                        <div
                            className="
              mt-6
              rounded-xl
              bg-[#f3f9fa]
              p-4
            "
                        >

                            <p
                                className="
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-brand-teal
              "
                            >
                                Contact Us
                            </p>

                            <div className="space-y-3">

                                <a
                                    href="tel:+919876543210"
                                    className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-brand-navy
                  transition
                  hover:text-brand-teal
                "
                                >

                                    <Phone
                                        size={17}
                                        className="shrink-0 text-brand-teal"
                                    />

                                    <span>
                                        +91 ABC
                                    </span>

                                </a>

                                <a
                                    href="mailto:amisankalp2026@gmail.com"
                                    className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-brand-navy
                  transition
                  hover:text-brand-teal
                "
                                >

                                    <Mail
                                        size={17}
                                        className="shrink-0 text-brand-teal"
                                    />

                                    <span className="break-all">
                                        amisankalp2026@gmail.com
                                    </span>

                                </a>

                            </div>

                        </div>

                        {/* =================================================
              MOBILE DONATE
          ================================================= */}

                        <a
                            href="/donate"
                            onClick={closeMenu}
                            className="
              mt-4

              flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2

              rounded-lg

              bg-gradient-to-r
              from-brand-orange
              to-brand-orange-light

              text-sm
              font-semibold
              text-white

              shadow-[0_8px_20px_rgba(245,130,32,0.2)]

              transition

              hover:-translate-y-0.5
            "
                        >

                            <HeartHandshake size={19} />

                            Donate Now

                        </a>

                    </div>

                </aside>
            </div >
        </header>


    );
}

export default Header;