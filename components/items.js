// Note: any changes to this list should also be added
// to mobile_nav_items.js for the mobile nav menu. We needed
// two separate 'items' objects to enable header links on
// smaller screens to drop down their items instead of
// directly navigating to the page linked to the header link.

export const items = [
  {
    title: "Introduction",
    itemId: "/introduction",
    subNav: [
      {
        title: "Activities",
        itemId: "/activities",
      },
      {
        title: "Glossary",
        itemId: "/glossary",
      },
    ],
  },
  {
    title: "Gravity",
    itemId: "/gravity",
    subNav: [
      {
        title: "Measure",
        itemId: "/gravity/measure",
      },
      {
        title: "+ Growth",
        itemId: "/gravity/growth",
      },
    ],
  },
  {
    title: "Love",
    itemId: "/love",
    subNav: [
      {
        title: "Orbit Levels",
        itemId: "/love/orbit-levels",
      },
      {
        title: "Roles",
        itemId: "/love/roles",
      },
    ],
  },
  {
    title: "Reach",
    itemId: "/reach",
    subNav: [
      {
        title: "Measure",
        itemId: "/reach/measure",
      },
      {
        title: "Clout",
        itemId: "/reach/clout",
      },
    ],
  },
  {
    title: "Impact",
    itemId: "/impact",
    subNav: [
      {
        title: "Growth & CLG",
        itemId: "/impact/community-led-growth",
      },
      {
        title: "⚙️ Success",
        itemId: "/impact/flywheels/success",
      },
      {
        title: "⚙️ Sales",
        itemId: "/impact/flywheels/sales",
      },
      {
        title: "⚙️ Marketing",
        itemId: "/impact/flywheels/marketing",
      },
      {
        title: "⚙️ Hiring",
        itemId: "/impact/flywheels/hiring",
      },
    ],
  },
  {
    title: "Examples",
    itemId: "--examples",
    subNav: [
      {
        title: "Open Source",
        itemId: "/examples/open-source",
      },
      {
        title: "SaaS & Enterprise",
        itemId: "/examples/saas",
      },
      {
        title: "web3",
        itemId: "/examples/web3",
      },
      {
        title: "Accelerators",
        itemId: "/examples/accelerators",
      },
    ],
  },
  {
    title: "More",
    itemId: "--more",
    subNav: [
      {
        title: "Community",
        itemId: "/community",
      },
      {
        title: "Resources",
        itemId: "/resources",
      },
      {
        title: "Privacy",
        itemId: "/privacy",
      },
    ],
  },
  {
    title: "About",
    itemId: "/about",
  },
];
