import { useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import BornaLogo from "@/components/BornaLogo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();
  const isProductActive = location.pathname.startsWith("/products");
  const isPlatformActive = location.pathname.startsWith("/platform");
  const isResourcesActive = location.pathname.startsWith("/resources") || location.pathname.startsWith("/roadmap");

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
      isActive
        ? "text-foreground font-medium nav-spotlight"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border backdrop-blur-xl bg-background/70">
      <div className="container mx-auto flex flex-nowrap items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center text-foreground">
          <BornaLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-8">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className={cn(
                "relative flex items-center gap-1 text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
                isProductActive ? "text-foreground font-medium nav-spotlight" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Products <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 p-2 rounded-xl"
                  style={{
                    background: 'rgba(10, 15, 40, 0.97)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to={p.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ease-in-out focus:outline-2 focus:outline-offset-2"
                      style={{
                        outlineColor: '#00DEC4',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        const nameEl = e.currentTarget.querySelector('[data-name]') as HTMLElement;
                        if (nameEl) nameEl.style.color = '#00DEC4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        const nameEl = e.currentTarget.querySelector('[data-name]') as HTMLElement;
                        if (nameEl) nameEl.style.color = 'rgba(255, 255, 255, 1)';
                      }}
                    >
                      <div
                        className="shrink-0 rounded-full"
                        style={{ width: 8, height: 8, backgroundColor: p.accentColor, opacity: 1 }}
                      />
                      <div>
                        <div data-name className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: 500, transition: 'color 150ms ease' }}>{p.name}</div>
                        <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>{p.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <Link
              to="/platform"
              className={cn(
                "relative flex items-center gap-1 text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
                isPlatformActive ? "text-foreground font-medium nav-spotlight" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Platform <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {platformOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 p-2 rounded-xl"
                  style={{
                    background: 'rgba(10, 15, 40, 0.97)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {[
                    { to: "/platform", label: "Platform Overview" },
                    { to: "/platform/architecture", label: "Architecture" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#00DEC4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/solutions" className={navLinkClass}>Solutions</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <Link
              to="/resources"
              className={cn(
                "relative flex items-center gap-1 text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
                isResourcesActive ? "text-foreground font-medium nav-spotlight" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 p-2 rounded-xl"
                  style={{
                    background: 'rgba(10, 15, 40, 0.97)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {[
                    { to: "/resources", label: "Case Studies & Guides" },
                    { to: "/blog", label: "Blog" },
                    { to: "/roadmap", label: "Roadmap" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#00DEC4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a
            href="https://care.borna.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium rounded-lg px-3.5 lg:px-[18px] py-3 transition-all duration-150 ease-in-out whitespace-nowrap"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: 'rgba(255, 255, 255, 0.85)',
              outline: 'none',
              minWidth: '80px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #00DEC4';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            Sign in
          </a>
          <Link to="/demo" className="gradient-btn text-sm whitespace-nowrap">Book a demo</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-glass-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2">Products</p>
                {products.map((p) => (
                  <Link
                    key={p.id}
                    to={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground hover:bg-glass-hover rounded-lg"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
              <Link to="/platform" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Platform</Link>
              <Link to="/ecosystem" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Ecosystem</Link>
              <Link to="/solutions" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Solutions</Link>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Pricing</Link>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2 pt-3">Resources</p>
                <Link to="/resources" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Case Studies & Guides</Link>
                <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Blog</Link>
                <Link to="/roadmap" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Roadmap</Link>
              </div>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">About</Link>
              <a
                href="https://care.borna.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-lg mt-2 text-center transition-all duration-150 ease-in-out"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                Sign in
              </a>
              <Link to="/demo" onClick={() => setMobileOpen(false)} className="gradient-btn text-sm block text-center mt-2">Book a demo</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;