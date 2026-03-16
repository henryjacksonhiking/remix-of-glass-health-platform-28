import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = LucideIcons as any;

const ProductGrid = () => {
  return (
    <section id="platform" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Platform overview</span>
          <h2 className="section-headline text-foreground mt-3">
            Five modules. One unified platform.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {products.map((product, i) => {
            const IconComp = iconMap[product.features[0]?.icon] || LucideIcons.Box;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={product.href}
                  className="glass-panel-hover p-6 block h-full group"
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${product.accentColor}15` }}
                  >
                    <IconComp className="w-6 h-6" style={{ color: product.accentColor }} />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
