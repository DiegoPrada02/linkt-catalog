export type Brand = {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  slogans: string[];
};

export const BRAND: Brand = {
  name: "Link'T Systems",
  tagline: "Browse our catalog by category",
  email: "JUANPRADA@GRUPOELLIOT.COM",
  phone: "+1 (754)423-5958 / +1 (225)360-5760",
  address: "10930 NW 138TH ST UNIT 2 - HIALEAH GARDENS FL, 33018",
  slogans:['Built to Protect. Designed to Perform.','Packaging That Works as Hard as You Do','Custom Cardboard. Serious Strength.',
    'Precision Packaging, Every Box Counts', 'Smart Packaging Starts Here','Boxes Built Around Your Brand','Your Product. Your Box. Your Way.',
    'From Flat Sheet to Finished Solution', 'Boxing Ideas Into Reality', 'Where Your Product Finds Its Home'
  ],
};


export const ABOUT_DATA = {
  description: [
    ""
  ],

  values: [
    {
      title: "Quality & Consistency",
      text:
        "Every product is manufactured to meet consistent quality standards, ensuring reliability across every order.",
    },
    {
      title: "Custom Solutions",
      text:
        "We offer flexible customization options, from sizing and materials to printing and finishes.",
    },
    {
      title: "Scalable Production",
      text:
        "Our processes are designed to support both short runs and large-scale production.",
    },
    {
      title: "Sustainable Materials",
      text:
        "We prioritize recyclable and responsibly sourced paper materials wherever possible.",
    },
  ],

  highlights: [
    "Standard and custom cardboard boxes",
    "Retail, food, and e-commerce packaging",
    "Paper bags with multiple handle and finish options",
    "Short-run and bulk production capabilities",
  ],

  stats: [
    { label: "Years of experience", value: "10+" },
    { label: "Products delivered", value: "5M+" },
    { label: "Business clients", value: "1,000+" },
    { label: "Countries served", value: "15+" },
  ],

  closing:
    "Whether you need off-the-shelf packaging or a fully custom solution, Link’T Systems is built to support your growth with dependable production and clear communication.",
};
