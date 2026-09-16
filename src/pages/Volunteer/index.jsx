import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Megaphone,
  PawPrint,
  Users,
} from "lucide-react";

import SectionHero from "../../components/SectionHero";

const ORGANIZATION_EMAIL = "YOUR_ORGANIZATION_EMAIL";
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

const volunteerValues = [
  {
    icon: Users,
    title: "People First",
    description:
      "We put people and communities at the centre of everything we do.",
  },
  {
    icon: HandHeart,
    title: "Meaningful Service",
    description:
      "We encourage compassionate action that creates meaningful social impact.",
  },
  {
    icon: GraduationCap,
    title: "Learning Together",
    description:
      "We create opportunities to learn, grow, and share knowledge with others.",
  },
  {
    icon: Megaphone,
    title: "Community Action",
    description:
      "We believe positive change begins when people come together and take action.",
  },
];

const volunteerRoles = [
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Help children and young learners through teaching, mentoring, tutoring, and educational activities.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Support health awareness campaigns, medical camps, wellness activities, and community health initiatives.",
  },
  {
    icon: HandHeart,
    title: "Livelihood Development",
    description:
      "Help individuals and families build skills, access opportunities, and work towards financial independence.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Support women-focused programmes through skill development, awareness, mentorship, and community participation.",
  },
  {
    icon: PawPrint,
    title: "Animal Welfare",
    description:
      "Participate in animal care, rescue support, feeding drives, awareness campaigns, and adoption initiatives.",
  },
  {
    icon: Megaphone,
    title: "Community Outreach",
    description:
      "Spread awareness, coordinate local campaigns, engage communities, and support relief and social-impact activities.",
  },
];

function Volunteer() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    location: "",
    pinCode: "",
    whatsappPermission: false,
    emailPermission: false,
  });

  useEffect(() => {
    const title = "Volunteer With Us | Amisankalp Social Foundation";

    const description =
      "Join Amisankalp Social Foundation as a volunteer and contribute your time, skills, and energy to education, health, livelihood, women empowerment, animal welfare, and community development.";

    document.title = title;

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    setMeta("description", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/volunteer`
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute("content", title);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.setAttribute("content", description);
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRoleSelect = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormSubmitted(false);

    setTimeout(() => {
      document
        .getElementById("volunteer-registration")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const message = `
New Volunteer Registration

Name: ${fullName}
Mobile: ${formData.mobile}
Email: ${formData.email}
Location: ${formData.location}
PIN Code: ${formData.pinCode}
Interested Role: ${selectedRole || "Not selected"}

WhatsApp Permission: ${
      formData.whatsappPermission ? "Yes" : "No"
    }
Email Permission: ${formData.emailPermission ? "Yes" : "No"}
    `.trim();

    const encodedMessage = encodeURIComponent(message);

    if (
      formData.whatsappPermission &&
      WHATSAPP_NUMBER !== "YOUR_WHATSAPP_NUMBER"
    ) {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
        "_blank",
        "noopener,noreferrer"
      );
    }

    if (
      formData.emailPermission &&
      ORGANIZATION_EMAIL !== "YOUR_ORGANIZATION_EMAIL"
    ) {
      window.location.href = `mailto:${ORGANIZATION_EMAIL}?subject=${encodeURIComponent(
        "New Volunteer Registration"
      )}&body=${encodedMessage}`;
    }

    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white">
      {/* Hero Banner */}
      <SectionHero
        eyebrow=""
        title="Your Time Can Create Lasting Change"
        subtitle=""
       description="Join our volunteer community"
        badge="Become a Volunteer"
        badgeIcon={<HeartHandshake size={14} />}
        image="/images/volunteer/volunteer.jpeg"
        imagePosition="center"
        theme="navy"
        accentColor="orange"
        highlightColor="text-brand-orange"
        buttonText="Get Involved"
        buttonHref="#volunteer-roles"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#why-volunteer"
        values={volunteerValues}
      />

      {/* Volunteer Roles */}
      <section
        id="volunteer-roles"
        className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
              Find Your Role
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Ways You Can Volunteer
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose an area that matches your interests, skills, and
              availability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerRoles.map((role) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-brand-navy/10
                    bg-[#F7FAF9]
                    p-6
                    shadow-[0_6px_25px_rgba(6,43,70,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-teal/30
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(6,43,70,0.10)]
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-teal/10
                      text-brand-teal
                      transition-colors
                      duration-300
                      group-hover:bg-brand-teal
                      group-hover:text-white
                    "
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-brand-navy">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {role.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRoleSelect(role.title)}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-brand-orange
                      transition-all
                      duration-300
                      hover:gap-3
                    "
                  >
                    Get Involved
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section
        id="why-volunteer"
        className="bg-[#F7FAF9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
              Why Volunteer
            </p>

            <h2 className="text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Small Contributions Can Create Lasting Impact
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Volunteering is more than giving your time. It is an opportunity
              to connect with communities, understand real-world challenges,
              develop new skills, and contribute to meaningful change.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you can volunteer regularly or support a one-time
              activity, every contribution helps us move closer to a more
              inclusive and compassionate society.
            </p>

            <button
              type="button"
              onClick={() => handleRoleSelect("")}
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-brand-orange
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-brand-orange-light
                hover:gap-3
              "
            >
              Explore Opportunities
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                border-brand-teal/15
                bg-white
                p-6
                shadow-[0_6px_25px_rgba(6,43,70,0.05)]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Users size={23} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                Meet New People
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Build meaningful connections with people who share your
                passion for social change.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-brand-orange/15
                bg-white
                p-6
                shadow-[0_6px_25px_rgba(6,43,70,0.05)]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <GraduationCap size={23} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                Learn New Skills
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Gain practical experience through community work, campaigns,
                mentoring, and programme activities.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-brand-green/15
                bg-white
                p-6
                shadow-[0_6px_25px_rgba(6,43,70,0.05)]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <HeartHandshake size={23} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                Create Real Impact
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Turn your time and abilities into direct support for
                individuals, families, and communities.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-brand-navy/10
                bg-white
                p-6
                shadow-[0_6px_25px_rgba(6,43,70,0.05)]
              "
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                <HandHeart size={23} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                Grow With Purpose
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Become part of a purpose-driven community working towards
                positive and sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Registration */}
      <section
        id="volunteer-registration"
        className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
              Become A Part Of The Change
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Volunteer Registration
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Share your details and interests with us. Our team will connect
              with you and help you find a suitable volunteering opportunity.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-[0_12px_45px_rgba(6,43,70,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
            {/* Registration Introduction */}
            <div className="relative overflow-hidden bg-brand-navy px-6 py-10 text-white sm:px-10 lg:px-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[28px] border-brand-teal/20" />
              <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border-[35px] border-brand-orange/20" />

              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Your City Needs You
                </p>

                <h3 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                  Join the
                  <span className="mt-1 block text-brand-orange">
                    movement.
                  </span>
                </h3>

                <p className="mt-6 text-base leading-7 text-white/75">
                  Thousands of volunteers begin with one simple decision:
                  showing up. You do not need to have everything figured out.
                  You just need the willingness to begin.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                      <span className="text-xs">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-white/80">
                      Contribute according to your time and availability.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                      <span className="text-xs">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-white/80">
                      Choose a cause that matches your interests.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                      <span className="text-xs">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-white/80">
                      Stay connected with our volunteer community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
              <div className="mb-8 border-b border-brand-navy/10 pb-6">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Volunteer Registration
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fill in the details below and select the communication
                  channels through which you would like us to contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="selectedRole"
                    className="mb-2 block text-sm font-semibold text-brand-navy"
                  >
                    Interested Role
                  </label>

                  <select
                    id="selectedRole"
                    value={selectedRole}
                    onChange={(event) => setSelectedRole(event.target.value)}
                    className="
                      w-full
                      rounded-lg
                      border
                      border-brand-navy/15
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      focus:border-brand-teal
                      focus:ring-2
                      focus:ring-brand-teal/10
                    "
                  >
                    <option value="">Please select a role</option>

                    {volunteerRoles.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold text-brand-navy"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-brand-navy/15
                        px-4
                        py-3
                        text-sm
                        text-slate-700
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-brand-teal
                        focus:ring-2
                        focus:ring-brand-teal/10
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold text-brand-navy"
                    >
                      Last Name / Initials
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-brand-navy/15
                        px-4
                        py-3
                        text-sm
                        text-slate-700
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-brand-teal
                        focus:ring-2
                        focus:ring-brand-teal/10
                      "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-semibold text-brand-navy"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your 10 digit mobile number"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-brand-navy/15
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-brand-teal
                      focus:ring-2
                      focus:ring-brand-teal/10
                    "
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Please enter a valid 10 digit Indian mobile number.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-brand-navy"
                  >
                    E-mail <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-brand-navy/15
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-brand-teal
                      focus:ring-2
                      focus:ring-brand-teal/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-brand-navy"
                  >
                    Location <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your city or location"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-brand-navy/15
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-brand-teal
                      focus:ring-2
                      focus:ring-brand-teal/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="pinCode"
                    className="mb-2 block text-sm font-semibold text-brand-navy"
                  >
                    PIN Code <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="pinCode"
                    name="pinCode"
                    type="text"
                    required
                    pattern="[0-9]{6}"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    placeholder="Enter your 6 digit PIN code"
                    className="
                      w-full
                      max-w-sm
                      rounded-lg
                      border
                      border-brand-navy/15
                      px-4
                      py-3
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-brand-teal
                      focus:ring-2
                      focus:ring-brand-teal/10
                    "
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Your PIN code helps us understand your nearest service
                    location.
                  </p>
                </div>

                <div className="space-y-4 border-t border-brand-navy/10 pt-6">
                  <p className="text-sm font-semibold text-brand-navy">
                    Communication Preferences
                  </p>

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="whatsappPermission"
                      checked={formData.whatsappPermission}
                      onChange={handleInputChange}
                      className="
                        mt-1
                        h-4
                        w-4
                        accent-brand-teal
                      "
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      I give permission to be contacted over WhatsApp regarding
                      volunteering opportunities and updates.
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="emailPermission"
                      checked={formData.emailPermission}
                      onChange={handleInputChange}
                      className="
                        mt-1
                        h-4
                        w-4
                        accent-brand-teal
                      "
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      I give permission to receive volunteer-related messages
                      and updates by email.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-brand-orange
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-brand-orange-light
                    hover:gap-3
                    sm:w-auto
                  "
                >
                  Submit Registration
                  <ArrowRight size={17} />
                </button>

                {formSubmitted && (
                  <div className="rounded-xl border border-brand-green/20 bg-brand-green/10 px-4 py-4 text-sm leading-6 text-brand-green">
                    Your registration details have been prepared. If WhatsApp
                    or email permission was selected, the respective
                    communication window has been opened.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

export default Volunteer;