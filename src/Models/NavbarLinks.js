const links = [
  {
    linkTo: "/",
    linkText: "Home",
    sublinks: [],
  },
  {
    linkTo: "/about",
    linkText: "About Us",
    sublinks: [
      {
        linkTo: "/facilitites",
        linkText: "Facilities",
      },
      {
        linkTo: "/customers",
        linkText: "Customers",
      },
      {
        linkTo: "/investment",
        linkText: "Investment",
      },
      {
        linkTo: "/environment",
        linkText: "Environment & Sustainability",
      },
    ],
  },
  {
    linkTo: "/services",
    linkText: "Services",
    sublinks: [
      {
        linkTo: "/wallpaper",
        linkText: "Wallpaper",
      },
      {
        linkTo: "/self-adhesive-vinyl",
        linkText: "Self-Adhesive Vinyl",
      },
      {
        linkTo: "/canvas",
        linkText: "Canvas",
      },
      {
        linkTo: "/design-team",
        linkText: "Design Team",
      },
      {
        linkTo: "/trimming",
        linkText: "Trimming",
      },
    ],
  },
  {
    linkTo: "/contact",
    linkText: "Contact Us",
    sublinks: [],
  },
];

export default links;
