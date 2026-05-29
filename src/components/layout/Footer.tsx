import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  MessageSquare,
  Youtube,
  Globe,
  Quote,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: <Facebook size={18} />,
    href: "https://www.facebook.com/profile.php?id=61588228018738",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/zently-it-soulution-4716323b0/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: <Twitter size={18} />,
    href: "https://x.com/it_zently",
    label: "Twitter",
    color: "#FFFFFF",
  },
  {
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/zently.itsolution/",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: <MessageSquare size={18} />,
    href: "https://www.threads.com/@zently.itsolution",
    label: "Threads",
    color: "#FFFFFF",
  },
  {
    icon: <MessageCircle size={18} />,
    href: "https://wa.me/917871418371",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: <Youtube size={18} />,
    href: "https://www.youtube.com/@ZentlyITSoulution",
    label: "YouTube",
    color: "#FF0000",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40 relative z-10 px-4">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-8">
            <Link to="/" className="flex items-center group">
              <img
                src="\aeyveruo.jpeg"
                alt="Aeyvan Logo"
                className="w-[10.2em] h-[3.2em] flex object-contain logo-glow group-hover:scale-110 transition-all duration-500 -mb-2 mr-[-0.80em]"
              />
              <h3 className="font-display text-xl font-bold tracking-tight ">
                <span className="text-primary">Aeyvan</span> Technologies
              </h3>
            </Link>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {COMPANY.tagline}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60 tracking-wider">
                <Globe size={14} className="text-primary/50" />
                {COMPANY.location1}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60 tracking-wider">
                <Globe size={14} className="text-primary/50" />
                {COMPANY.location2}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground transition-all duration-300 group shadow-sm hover:glass-strong"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.borderColor = `${social.color}80`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-display font-bold mb-6 text-foreground tracking-wide uppercase text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground tracking-wide uppercase text-xs">
              Services
            </h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-6 text-foreground tracking-wide uppercase text-xs">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-70">
                  Email
                </span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-70">
                  Phone
                </span>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex flex-col gap-1 text-sm text-muted-foreground">
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-70">
                  Office Hours
                </span>
                {COMPANY.workingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
          {/* Simple Single-Line Quote */}
          <p className="text-[10px] text-muted-foreground/40 italic text-white-900 hover:text-orange-500 tracking-[0.15em] uppercase">
            "Turning code into connection, and ideas into innovation."
          </p>

          {/* Copyright Area */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
            <div className="opacity-60">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
