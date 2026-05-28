// Site-wide constants
export const COMPANY = {
  name: "Aeyvan Technologies",
  tagline: "Transforming Ideas into Scalable Digital Products",
  location1: "Theni Odaipatti, India",
  location2: "Coimbatore South, India",
  phone: "+91 7871418371",
  email: "admin.aeyvantechnologies@gmail.com",
  whatsapp: "https://wa.me/917871418371?text=Hello%20Zently%20IT%20Solution%2C%20I%20would%20like%20to%20discuss%20my%20project.",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250758.19453882225!2d76.89609572891498!3d11.01187397498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f461b59%3A0x5d3d88ef04285a2!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "web-development",
    title: "Custom Web Development",
    icon: "Globe",
    description: "Enterprise-grade web applications built with cutting-edge technologies for maximum performance and scalability.",
    features: ["Progressive Web Apps", "SaaS Platforms", "API Development", "Microservices Architecture", "Real-time Applications"],
    impact: "3x faster time-to-market with our agile development process.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    icon: "Palette",
    description: "Transform outdated websites into modern, high-converting digital experiences that drive business growth.",
    features: ["UX Audit & Strategy", "Responsive Design", "Performance Optimization", "SEO Enhancement", "Conversion Optimization"],
    impact: "Average 180% increase in user engagement post-redesign.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
    features: ["iOS & Android Development", "React Native / Flutter", "App Store Optimization", "Push Notifications", "Offline Functionality"],
    impact: "50M+ combined downloads across client applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    icon: "Shield",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    features: ["Penetration Testing", "Security Audits", "Compliance (GDPR, HIPAA)", "Incident Response", "Vulnerability Management"],
    impact: "Zero security breaches across all managed clients.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Services",
    icon: "Cloud",
    description: "Scalable cloud infrastructure and automated deployment pipelines for continuous delivery.",
    features: ["AWS / Azure / GCP", "CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "24/7 Monitoring"],
    impact: "99.99% uptime SLA with automated scaling.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "IT Consulting",
    title: "IT Consulting",
    icon: "Globe",
    description: "Strategic guidance to align your IT infrastructure with business objectives and drive innovation.",
    features: ["Digital Transformation", "IT Roadmap Planning", "Tech Stack Strategy", "Cloud Migration Strategy", "Architecture Review"],
    impact: "Average 40% reduction in IT overhead costs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
  }
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: "Enterprise ERP System",
    category: "Enterprise",
    tags: ["React", "Node.js", "PostgreSQL"],
    problem: "Legacy ERP causing operational delays and data silos across 50+ departments.",
    solution: "Built a unified cloud-native ERP with real-time analytics, automated workflows, and modular architecture.",
    metrics: { efficiency: "+340%", cost: "-60%", users: "5,000+" },
    image: "https://www.appventurez.com/wp-content/uploads/2024/08/unnamed.png",
    liveLink: "https://demo-erp-enterprise.vercel.app"
  },
  {
    id: 2,
    title: "Advanced CRM Platform",
    category: "SaaS",
    tags: ["Next.js", "TypeScript", "AWS"],
    problem: "Fragmented customer data leading to poor sales pipeline visibility.",
    solution: "Developed AI-powered CRM with predictive analytics, automated lead scoring, and omni-channel integration.",
    metrics: { efficiency: "+250%", cost: "-45%", users: "12,000+" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://modern-crm-demo.vercel.app"
  },
  {
    id: 3,
    title: "Hostel Management System",
    category: "Management",
    tags: ["React", "Express", "MySQL"],
    problem: "Manual hostel operations causing booking errors and poor occupancy tracking.",
    solution: "Automated room allocation, payment processing, and real-time occupancy dashboard.",
    metrics: { efficiency: "+200%", cost: "-50%", users: "3,000+" },
    image: "https://plus.unsplash.com/premium_photo-1716767947952-42e8fe3a28a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "https://hostelmgt-pro.vercel.app"
  },
  {
    id: 4,
    title: "Hospital Management System",
    category: "Healthcare",
    tags: ["React", "Python", "PostgreSQL"],
    problem: "Paper-based patient records causing diagnostic delays and compliance issues.",
    solution: "HIPAA-compliant HMS with EMR, appointment scheduling, and pharmacy management.",
    metrics: { efficiency: "+280%", cost: "-55%", users: "8,000+" },
    image: "https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg",
    liveLink: "https://medicare-hms-portal.vercel.app"
  },
  {
    id: 5,
    title: "Multi-vendor E-commerce",
    category: "E-commerce",
    tags: ["Next.js", "Node.js", "Stripe"],
    problem: "Single-vendor platform limiting marketplace growth and vendor acquisition.",
    solution: "Scalable multi-vendor marketplace with admin dashboard, analytics, and payment splitting.",
    metrics: { efficiency: "+320%", cost: "-40%", users: "25,000+" },
    image: "https://www.code-brew.com/wp-content/uploads/2019/10/Header-Image.jpg",
    liveLink: "https://zently-marketplace.vercel.app"
  },
  {
    id: 6,
    title: "Finance Analytics Dashboard",
    category: "Fintech",
    tags: ["React", "D3.js", "Python"],
    problem: "Manual financial reporting consuming 40+ hours per week.",
    solution: "Real-time analytics dashboard with automated reporting, forecasting, and compliance tracking.",
    metrics: { efficiency: "+400%", cost: "-70%", users: "2,000+" },
    image: "https://www.geckoboard.com/uploads/Cashflow-dashboard-example.png",
    liveLink: "https://fin-analytics-suite.vercel.app"
  },
  {
    id: 7,
    title: "Food Delivery Mobile App",
    category: "Mobile",
    tags: ["React Native", "Firebase"],
    problem: "Local restaurants lacking digital presence and delivery capabilities.",
    solution: "Full-featured delivery app with real-time tracking, payment integration, and restaurant management.",
    metrics: { efficiency: "+180%", cost: "-35%", users: "50,000+" },
    image: "https://www.businessofapps.com/wp-content/uploads/2022/01/emizen_tech_food_deliver_img1.png",
    liveLink: "https://food-fast-deliver.vercel.app"
  },
  {
    id: 8,
    title: "Travel Booking Platform",
    category: "Travel",
    tags: ["Next.js", "GraphQL", "AWS"],
    problem: "Complex booking flow causing 60% cart abandonment rate.",
    solution: "Streamlined booking engine with dynamic pricing, itinerary builder, and multi-currency support.",
    metrics: { efficiency: "+220%", cost: "-42%", users: "15,000+" },
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://travel-ease-booking.vercel.app"
  }
];

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "Flutter", "React Native", "Tailwind CSS", "Figma",
];

export const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Support Available" },
];
