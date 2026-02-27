import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.ico" alt="Zently Logo" className="w-6 h-6 object-contain" />
              <h3 className="font-display text-xl font-bold gradient-text">{COMPANY.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{COMPANY.tagline}</p>
            <p className="text-sm text-muted-foreground">{COMPANY.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{COMPANY.email}</li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.workingHours}</li>
              <li>{COMPANY.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
