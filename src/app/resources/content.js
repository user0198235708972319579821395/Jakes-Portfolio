import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jake",
  lastName: "Diehl",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mechatronics Engineering Student",
  avatar: "/images/avatar.jpg",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/Jake-Diehl",
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jakediehl/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "jdiehl@uwaterloo.ca",
    icon: "email",
    link: "mailto:jdiehl@uwaterloo.ca",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mechatronics Engineer and Builder</>,
  subline: (
    <>
      I'm Jake, a Mechatronics Engineering student at UWaterloo, 
      focused on designing efficient systems. In my free time, 
      I build hands-on projects blending mechanical design and electronics.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jake is a Mechatronics engineering student at the University of Waterloo with a passion 
        for solving complex engineering challenges through innovative design and technology. 
        His work focuses on creating efficient, functional solutions that integrate mechanical 
        systems and electronics, aiming to simplify intricate problems with elegant, practical 
        designs.
      </>
    ),
  },
  portfolio: {
    display: false, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "Sigma Tool & Machine LTD.",
        timeframe: "Summer 2025",
        role: "Machine Design & Assembly Co-op Student",
        achievements: [
          <>
            Incoming Summer 2025
          </>,
          // <>
          //   Spearheaded the integration of AI tools into design  flows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sigmatool.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Waterloo Formula Electric Team",
        timeframe: "2024 - PRESENT",
        role: "Chassis Team Member",
        achievements: [
          <>
            The Chassis team is responsible for the base structural framework 
            of the car onto which all other systems mount, as well as the braking system, 
            firewalls, and impact attenuators. More importantly, It performs the carrier 
            role for various load transfers, such as ensuring minimal deflection while 
            enduring suspension compression. The chassis team strives to find the balance 
            between rigidity and weight reduction; rigidity decreases uncertainty during 
            energy transfer, improving efficiency. On the other hand, shaving weight in 
            areas with fewer rigidity requirements simultaneously enhances power-to-weight 
            efficiency. Deriving from the above, chassis development is closely tied with 
            communication to other systems to understand supporting requisites and play a 
            central role in making the concepts of other systems work efficaciously.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/UWFE.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Waterloo",
        description: <>Studying Mechatronics Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "CAD Modeling",
        description: <>Skilled in CAD modeling with SolidWorks and AutoCAD, creating precise and functional designs efficiently.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "3D-Printing",
        description: <>Check out some of my 3D prints on my Portfolio tab :)</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const portfolio = {
  label: "APortfolio",
  title: "BPortfolio",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   label: "Gallery",
//   title: "My photo gallery",
//   description: `A photo collection by ${person.name}`,
//   // Images from https://pexels.com
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

export { person, social, home, about, portfolio };
