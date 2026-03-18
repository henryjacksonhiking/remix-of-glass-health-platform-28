import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import BornaLogo from "@/components/BornaLogo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border backdrop-blur-xl bg-background/70">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center text-foreground">
          <BornaLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
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
          <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://care.borna.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium rounded-lg px-[18px] py-2 transition-all duration-150 ease-in-out"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: 'rgba(255, 255, 255, 0.85)',
              outline: 'none',
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
          <Link to="/demo" className="gradient-btn text-sm">Book a demo</Link>
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
              <Link to="/solutions" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Solutions</Link>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Pricing</Link>
              <Link to="/resources" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground">Resources</Link>
              <Link to="/demo" onClick={() => setMobileOpen(false)} className="gradient-btn text-sm block text-center mt-4">Book a demo</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;