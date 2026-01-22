export interface Project {
  slug: string;
  name: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  specs: {
    sqft: string;
    plot: string;
    parking: string;
    road: string;
  };
  mainImage: string;
  galleryImages: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "lake-garden",
    name: "LAKE GARDEN, MERADIA",
    location: "Meradia",
    shortDescription: "The essence of lakefront living with 14 dedicated car parking spaces",
    fullDescription: "Experience the pinnacle of luxury living in Lake Garden, Meradia. This exclusive 8-story building offers a limited collection of spacious 2400-2800 sq. ft. south-facing apartments on a 5 katha plot with a 25-foot front road. Enjoy the essence of lakefront living with 14 dedicated car parking spaces and contemporary design. Contact us today to schedule a viewing and make Lake Garden, Meradia your dream address.",
    specs: {
      sqft: "2400 sq. ft. - 2800 sq. ft.",
      plot: "5 Katha Plot",
      parking: "14 Car Parking Spaces",
      road: "25-foot Front Road"
    },
    mainImage: "/images/lake-garden-1.jpeg",
    galleryImages: [
      "/images/lake-garden-1.jpeg",
      "/images/lake-garden-2.jpeg"
    ],
    featured: true
  },
  {
    slug: "l-block-1446",
    name: "L BLOCK 1446",
    location: "Bashundhara R/A",
    shortDescription: "Picturesque residential neighborhood with convenient access",
    fullDescription: "Experience refined living in L Block 1446, Bashundhara RA. This exquisite building on a spacious 3 katha plot offers luxurious 1500 sq. ft. apartments with dedicated car parking with all modern lifestyle amenities. Enjoy the prestigious Bashundhara lifestyle with convenient access and a 25-foot front road. Contact us today to schedule a viewing and discover your dream home.",
    specs: {
      sqft: "1500 sq. ft.",
      plot: "3 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/l-block-1446.jpeg",
    galleryImages: ["/images/l-block-1446.jpeg"],
    featured: true
  },
  {
    slug: "j-block-536",
    name: "J BLOCK 536",
    location: "Bashundhara R/A",
    shortDescription: "Apartments with dedicated car parking with modern lifestyle",
    fullDescription: "Experience refined living in J Block 536, Bashundhara RA. This exquisite 9-story building on a spacious 5 katha south-facing plot offers 9 luxurious 2200 sq. ft. apartments with dedicated car parking with all modern lifestyle amenities. Enjoy the prestigious Bashundhara lifestyle with convenient access and a 25-foot front road. Contact us today to schedule a viewing and discover your dream home.",
    specs: {
      sqft: "2200 sq. ft.",
      plot: "5 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/j-block-536.jpeg",
    galleryImages: ["/images/j-block-536.jpeg"],
    featured: true
  },
  {
    slug: "l-block-1223-1224",
    name: "L BLOCK 1223-1224",
    location: "Bashundhara R/A",
    shortDescription: "25-foot front road with all modern lifestyle amenities",
    fullDescription: "Unveiling a prestigious address in Bashundhara RA: L Block 1223-1224. This exceptional development offers a unique blend of luxury and convenience. Spanning 6 katha of prime south-facing land, this 7-story building boasts 14 spacious 1500 sq. ft. apartments, each with dedicated car parking with all modern lifestyle amenities. Experience the coveted lifestyle at Bashundhara with easy access and a 25-foot front road with all modern lifestyle amenities.",
    specs: {
      sqft: "1500 sq. ft.",
      plot: "3 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/3D-View_page-0001.jpg",
    galleryImages: ["/images/3D-View_page-0001.jpg"],
    featured: false
  },
  {
    slug: "j-block-187",
    name: "J BLOCK 187",
    location: "Bashundhara R/A",
    shortDescription: "Enjoy the dream lifestyle with convenient access and front road",
    fullDescription: "Experience peaceful living in J Block 187, Bashundhara RA. This north facing modern 8-story building on a spacious 5 katha plot offers 8 luxurious 2000 sq. ft. apartments with dedicated car parking with all modern lifestyle amenities. Enjoy the dream lifestyle with convenient access and a 25-foot front road. Contact us today to schedule a viewing and discover your dream home.",
    specs: {
      sqft: "2000 sq. ft.",
      plot: "5 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/F-1.jpg",
    galleryImages: [
      "/images/F-1.jpg",
      "/images/E.jpg.jpeg"
    ],
    featured: false
  },
  {
    slug: "m-block-1084",
    name: "M BLOCK 1084",
    location: "Bashundhara R/A",
    shortDescription: "The perfect blend of comfort and convenience in this prime location",
    fullDescription: "Experience luxury living in M Block 1084, Bashundhara RA. This exceptional building on a spacious 5 katha plot offers luxurious 2200 sq. ft. apartments with dedicated car parking with all modern lifestyle amenities. The perfect blend of comfort and convenience in this prime location. Contact us today to schedule a viewing.",
    specs: {
      sqft: "2200 sq. ft.",
      plot: "5 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/m-block-1084.jpeg",
    galleryImages: ["/images/m-block-1084.jpeg"],
    featured: false
  },
  {
    slug: "k-block-791",
    name: "K BLOCK 791",
    location: "Bashundhara R/A",
    shortDescription: "25-foot building with all modern lifestyle amenities",
    fullDescription: "Experience refined living in K Block 791, Bashundhara RA. This exceptional building on a spacious 5 katha plot offers luxurious 2200 sq. ft. apartments with dedicated car parking with all modern lifestyle amenities. Enjoy the prestigious Bashundhara lifestyle with a 25-foot front road. Contact us today to schedule a viewing.",
    specs: {
      sqft: "2200 sq. ft.",
      plot: "5 Katha Plot",
      parking: "Dedicated Car Parking",
      road: "25-foot Front Road"
    },
    mainImage: "/images/WhatsApp-Image-2025-02-01-at-12.51.36-PM.jpeg",
    galleryImages: ["/images/WhatsApp-Image-2025-02-01-at-12.51.36-PM.jpeg"],
    featured: false
  }
];

export const companyInfo = {
  name: "Auroville",
  tagline: "Beautifully Designed For Everyday Living",
  email: "info@auroville.com.bd",
  phone: "+8801308653943",
  social: {
    facebook: "#",
    linkedin: "#",
    youtube: "#",
    twitter: "#"
  }
};

export const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "1,564+", label: "Satisfied Clients" },
  { value: "50", label: "Industry Awards" }
];

export const services = [
  {
    icon: "/images/icon-crop.svg",
    title: "Custom Build",
    description: "Bring your unique vision to life. Our bespoke design process transforms your ideas into a one-of-a-kind home tailored to your lifestyle and preferences."
  },
  {
    icon: "/images/icon-home.svg",
    title: "New Homes",
    description: "Create your dream home from the ground up. We blend innovative design with functionality to craft beautiful, efficient living spaces that stand the test of time."
  },
  {
    icon: "/images/icon-expand.svg",
    title: "Extensions",
    description: "Expand your horizons without changing address. Our extension designs seamlessly integrate with your existing property, and adding value to your home."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}
