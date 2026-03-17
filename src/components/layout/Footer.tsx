import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import bornaLogo from "@/assets/borna-logo.svg";

const Footer = () => {
  const columns = [
    {
      title: "Products",
      links: products.map((p) => ({ label: p.name, href: p.href })),
    },
    {
      title: "Solutions",
      links: [
        { label: "Dental clinics", href: "/solutions" },
        { label: "Multi-location", href: "/solutions" },
        { label: "Specialist practices", href: "/solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Security", href: "/security" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms of service", href: "/terms" },
        { label: "HIPAA compliance", href: "/security" },
      ],
    },
  ];

  return (
    <footer className="border-t border-glass-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={bornaLogo} alt="Borna" className="h-6 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The operating system for modern clinics.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Stay updated with Borna.ai</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-glass border border-glass-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-64"
              aria-label="Email for newsletter"
            />
            <button className="gradient-btn text-sm px-4 py-2">Subscribe</button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Borna.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
