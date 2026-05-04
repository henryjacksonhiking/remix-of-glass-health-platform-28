import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BornaLogo from "@/components/BornaLogo";
import { cn } from "@/lib/utils";

const productItems = [
  {
    name: "Borna Care",
    href: "/products/care",
    accentColor: "#00479B",
    sub: "Patient engagement & portal software for healthcare",
    children: [
      { name: "Patient App", href: "/products/care/patient-app", sub: "Patient-facing scheduling, forms & payments" },
    ],
  },
  { name: "Borna Connect", href: "/products/connect", accentColor: "#00DEC4", sub: "AI-powered omnichannel patient communication platform" },
  { name: "Borna Engage", href: "/products/engage", accentColor: "#D6007F", sub: "Healthcare CRM & patient lifecycle management platform" },
  { name: "Borna Insight", href: "/products/insight", accentColor: "#818CF8", sub: "Healthcare analytics & AI-powered intelligence platform" },
  { name: "Borna Core", href: "/products/core", accentColor: "#4F6AFF", sub: "The AI engine powering every product in the Borna platform" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [careSubOpen, setCareSubOpen] = useState(false);
  const [mobileCareOpen, setMobileCareOpen] = useState(false);
  const location = useLocation();
  const isProductActive = location.pathname.startsWith("/products");
  const isPlatformActive = location.pathname.startsWith("/platform");
  const isEcosystemActive = location.pathname.startsWith("/ecosystem");
  const isSolutionsActive = location.pathname.startsWith("/solutions");
  const isResourcesActive = location.pathname.startsWith("/resources") || location.pathname.startsWith("/roadmap");

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
      isActive
        ? "text-foreground font-medium nav-spotlight"
        : "text-muted-foreground hover:text-foreground"
    );

  const dropdownStyle = {
    background: 'rgba(10, 15, 40, 0.97)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
    e.currentTarget.style.background = enter ? 'rgba(255, 255, 255, 0.08)' : 'transparent';
    e.currentTarget.style.color = enter ? '#00DEC4' : 'rgba(255, 255, 255, 0.85)';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border backdrop-blur-xl bg-background/70">
      <div className="container mx-auto flex flex-nowrap items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex shrink-0 items-center text-foreground">
          <BornaLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-8">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => { setProductsOpen(false); setCareSubOpen(false); }}
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
                  style={dropdownStyle}
                >
                  {productItems.map((p) => (
                    <div
                      key={p.name}
                      className="relative"
                      onMouseEnter={() => p.children && setCareSubOpen(true)}
                      onMouseLeave={() => p.children && setCareSubOpen(false)}
                    >
                      <Link
                        to={p.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ease-in-out"
                        style={{ outline: 'none' }}
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
                        <div className="flex-1">
                          <div data-name className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: 500, transition: 'color 150ms ease' }}>{p.name}</div>
                          <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{p.sub}</div>
                        </div>
                        {p.children && <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }} />}
                      </Link>
                      {/* Nested flyout for Borna Care */}
                      <AnimatePresence>
                        {p.children && careSubOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-full top-0 ml-1 w-60 p-2 rounded-xl"
                            style={dropdownStyle}
                          >
                            {p.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block px-3 py-2 rounded-lg text-sm transition-all duration-150"
                                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                                onMouseEnter={(e) => handleLinkHover(e, true)}
                                onMouseLeave={(e) => handleLinkHover(e, false)}
                              >
                                <div className="font-medium">{child.name}</div>
                                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{child.sub}</div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Platform dropdown */}
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
                  style={dropdownStyle}
                >
                  {[
                    { to: "/platform/architecture", label: "Architecture" },
                    { to: "/platform/integrations", label: "Integrations" },
                    { to: "/platform/security", label: "Security & Compliance" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      onMouseEnter={(e) => handleLinkHover(e, true)}
                      onMouseLeave={(e) => handleLinkHover(e, false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Ecosystem dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEcosystemOpen(true)}
            onMouseLeave={() => setEcosystemOpen(false)}
          >
            <Link
              to="/ecosystem"
              className={cn(
                "relative flex items-center gap-1 text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
                isEcosystemActive ? "text-foreground font-medium nav-spotlight" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Ecosystem <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {ecosystemOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl"
                  style={dropdownStyle}
                >
                  {[
                    { to: "/ecosystem", label: "Overview" },
                    { to: "/ecosystem/communication", label: "Communication Layer" },
                    { to: "/ecosystem/crm-lifecycle", label: "CRM & Lifecycle" },
                    { to: "/ecosystem/data-integration", label: "Data Integration" },
                    { to: "/ecosystem/ai-intelligence", label: "AI Intelligence" },
                    { to: "/ecosystem/dual-experience", label: "Dual Experience" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      onMouseEnter={(e) => handleLinkHover(e, true)}
                      onMouseLeave={(e) => handleLinkHover(e, false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <Link
              to="/solutions"
              className={cn(
                "relative flex items-center gap-1 text-[13px] lg:text-sm transition-all duration-300 whitespace-nowrap py-1 px-2 rounded-md",
                isSolutionsActive ? "text-foreground font-medium nav-spotlight" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Solutions <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 p-2 rounded-xl"
                  style={dropdownStyle}
                >
                  {[
                    { to: "/solutions/patient-acquisition", label: "Patient Acquisition", sub: "Attract & convert new patients at scale" },
                    { to: "/solutions/patient-retention", label: "Patient Retention", sub: "Keep patients engaged & returning" },
                    { to: "/solutions/practice-automation", label: "Practice Automation", sub: "Eliminate manual tasks & streamline ops" },
                    { to: "/solutions/revenue-optimization", label: "Revenue Optimization", sub: "Maximize revenue per patient visit" },
                    { to: "/solutions/multi-location", label: "Multi-location Management", sub: "Centralized control across all locations" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      onMouseEnter={(e) => handleLinkHover(e, true)}
                      onMouseLeave={(e) => handleLinkHover(e, false)}
                    >
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>

          {/* Resources dropdown */}
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
                  style={dropdownStyle}
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
                      onMouseEnter={(e) => handleLinkHover(e, true)}
                      onMouseLeave={(e) => handleLinkHover(e, false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
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
                {/* Borna Care with expandable sub-items */}
                <button
                  onClick={() => setMobileCareOpen(!mobileCareOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-foreground hover:bg-glass-hover rounded-lg"
                >
                  <span>Borna Care</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", mobileCareOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileCareOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      <Link to="/products/care" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground">Overview</Link>
                      <Link to="/products/care/patient-app" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground">Patient App</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                {productItems.filter(p => p.name !== "Borna Care").map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground hover:bg-glass-hover rounded-lg"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2 pt-3">Platform</p>
                <Link to="/platform" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Platform</Link>
                <Link to="/platform/architecture" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Architecture</Link>
                <Link to="/platform/integrations" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Integrations</Link>
                <Link to="/platform/security" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Security & Compliance</Link>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2 pt-3">Solutions</p>
                <Link to="/solutions" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Overview</Link>
                <Link to="/solutions/patient-acquisition" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Patient Acquisition</Link>
                <Link to="/solutions/patient-retention" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Patient Retention</Link>
                <Link to="/solutions/practice-automation" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Practice Automation</Link>
                <Link to="/solutions/revenue-optimization" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Revenue Optimization</Link>
                <Link to="/solutions/multi-location" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Multi-location Management</Link>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2 pt-3">Ecosystem</p>
                <Link to="/ecosystem" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Overview</Link>
                <Link to="/ecosystem/communication" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Communication Layer</Link>
                <Link to="/ecosystem/crm-lifecycle" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">CRM & Lifecycle</Link>
                <Link to="/ecosystem/data-integration" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Data Integration</Link>
                <Link to="/ecosystem/ai-intelligence" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">AI Intelligence</Link>
                <Link to="/ecosystem/dual-experience" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Dual Experience</Link>
              </div>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Pricing</Link>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 pb-2 pt-3">Resources</p>
                <Link to="/resources" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Case Studies & Guides</Link>
                <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Blog</Link>
                <Link to="/roadmap" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Roadmap</Link>
              </div>
              
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
