import {
  ArrowRight,
  Heart,
  Users,
} from "lucide-react";


function SupportCause() {

  // =====================================================
  // DUMMY CAMPAIGN DATA
  // Replace this later with backend/payment data
  // =====================================================

  const campaigns = [
    {
      id: 1,
      title: "Sponsor a Child's Education",
      image: "/images/campaigns/education.jpg",
      raised: 425000,
      goal: 600000,
      donors: 128,
      category: "Education",
    },

    {
      id: 2,
      title: "Healthcare for Rural India",
      image: "/images/campaigns/health.jpg",
      raised: 310000,
      goal: 500000,
      donors: 94,
      category: "Health",
    },

    {
      id: 3,
      title: "Livelihood for Families",
      image: "/images/campaigns/livelihood.jpg",
      raised: 275000,
      goal: 450000,
      donors: 76,
      category: "Livelihood",
    },

    {
      id: 4,
      title: "Animal Welfare Fund",
      image: "/images/campaigns/disaster.jpg",
      raised: 590000,
      goal: 700000,
      donors: 183,
      category: "Animal Welfare",
    },
  ];


  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">

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
            HEADER
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

          {/* LEFT CONTENT */}

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

              Support a Cause

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
              Be the
              <span className="text-brand-teal">
                {" "}Change.
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
              Your contribution can help create opportunities,
              strengthen communities and change lives.
            </p>

          </div>


          {/* VIEW ALL */}

          <a
            href="/campaigns"
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

            View All Campaigns

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
            CAMPAIGN GRID
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

          {campaigns.map((campaign) => {

            const raised = Number(campaign.raised);
            const goal = Number(campaign.goal);

            const percentage = Math.min(
              Math.round((raised / goal) * 100),
              100
            );

            return (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                raised={raised}
                goal={goal}
                percentage={percentage}
              />
            );
          })}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CAMPAIGN CARD
========================================================= */

function CampaignCard({
  campaign,
  raised,
  goal,
  percentage,
}) {

  return (
    <a
      href={`/campaigns/${campaign.id}`}
      className="
        group
        relative
        overflow-hidden

        rounded-2xl
        border
        border-gray-100
        bg-white

        shadow-[0_8px_30px_rgba(6,43,70,0.06)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(6,43,70,0.13)]
      "
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          aspect-[16/9]
          overflow-hidden
        "
      >

        <img
          src={campaign.image}
          alt={campaign.title}
          className="
            h-full
            w-full
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />


        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-brand-navy/60
            via-transparent
            to-transparent
          "
        />


        {/* CATEGORY */}

        <span
          className="
            absolute
            left-4
            top-4

            rounded-full
            border
            border-white/20

            bg-brand-navy/50

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
          {campaign.category}
        </span>

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-5">

        {/* TITLE */}

        <h3
          className="
            text-base
            font-bold
            leading-6
            text-brand-navy

            transition-colors
            duration-300

            group-hover:text-brand-teal
          "
        >
          {campaign.title}
        </h3>


        {/* =================================================
            DONATION AMOUNT
        ================================================= */}

        <div
          className="
            mt-4
            flex
            items-end
            justify-between
            gap-3
          "
        >

          <div>

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-gray-400
              "
            >
              Raised
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                text-brand-navy
              "
            >
              ₹{raised.toLocaleString("en-IN")}
            </p>

          </div>


          <p
            className="
              text-xs
              font-medium
              text-gray-400
            "
          >
            of ₹{goal.toLocaleString("en-IN")}
          </p>

        </div>


        {/* =================================================
            PROGRESS BAR
        ================================================= */}

        <div
          className="
            mt-3
            h-2
            overflow-hidden
            rounded-full
            bg-gray-100
          "
        >

          <div
            className="
              h-full
              rounded-full

              bg-gradient-to-r
              from-brand-teal
              to-brand-teal-light

              transition-all
              duration-700
            "
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>


        {/* =================================================
            PROGRESS INFO
        ================================================= */}

        <div
          className="
            mt-2
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-[10px]
              font-semibold
              text-brand-teal
            "
          >
            {percentage}% funded
          </span>


          <span
            className="
              flex
              items-center
              gap-1

              text-[10px]
              text-gray-400
            "
          >

            <Users size={12} />

            {campaign.donors.toLocaleString("en-IN")}

            {" "}donors

          </span>

        </div>


        {/* =================================================
            DONATE BUTTON
        ================================================= */}

        <div
          className="
            mt-5

            flex
            w-full
            items-center
            justify-center
            gap-2

            rounded-lg
            bg-brand-navy

            px-4
            py-3

            text-xs
            font-semibold
            text-white

            transition-all
            duration-300

            group-hover:bg-brand-teal
          "
        >

          <Heart
            size={14}
            className="
              transition-transform
              duration-300

              group-hover:scale-110
            "
          />

          Donate Now

        </div>

      </div>


      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0

          h-1
          w-0

          bg-brand-orange

          transition-all
          duration-500

          group-hover:w-full
        "
      />

    </a>
  );
}


export default SupportCause;