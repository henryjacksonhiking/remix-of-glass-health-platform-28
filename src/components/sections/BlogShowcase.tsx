import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserMd, FaCalendarCheck, FaLaptopMedical, FaFileAlt, FaCreditCard, FaNetworkWired } from "react-icons/fa";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { blogPosts } from "@/lib/blog-posts";

const iconMap = [
  <FaUserMd key="0" />,
  <FaCalendarCheck key="1" />,
  <FaLaptopMedical key="2" />,
  <FaFileAlt key="3" />,
  <FaCreditCard key="4" />,
  <FaNetworkWired key="5" />,
];

const shortTitles: Record<string, string> = {
  "reduce-patient-no-shows-automated-reminders": "Automated Reminders",
  "hidden-cost-manual-appointment-management": "Manual Scheduling Costs",
  "building-patient-first-digital-experience": "Patient-First Digital",
  "digital-intake-forms-implementation-guide": "Digital Intake Forms",
  "online-payments-improve-clinic-cash-flow": "Online Payments",
  "ehr-integration-what-clinics-need-to-know": "EHR Integration",
};

const shortDescriptions: Record<string, string> = {
  "reduce-patient-no-shows-automated-reminders": "Cut missed appointments by up to 40%",
  "hidden-cost-manual-appointment-management": "Why manual scheduling drains your clinic",
  "building-patient-first-digital-experience": "Deliver the convenience patients expect",
  "digital-intake-forms-implementation-guide": "Replace clipboards with smart digital forms",
  "online-payments-improve-clinic-cash-flow": "Accelerate collections, reduce outstanding balances",
  "ehr-integration-what-clinics-need-to-know": "A practical guide to seamless EHR integration",
};

const options = blogPosts.map((post, i) => ({
  title: shortTitles[post.slug] || post.title,
  description: shortDescriptions[post.slug] || post.excerpt.slice(0, 50),
  image: post.image,
  icon: iconMap[i % iconMap.length],
  slug: post.slug,
}));

const BlogShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-headline text-foreground mb-4">
            What's happening
          </h2>
          <p className="body-text mx-auto max-w-xl">
            Healthcare case studies, clinic management best practices, and the latest from Borna.ai.
          </p>
        </motion.div>

        <InteractiveSelector options={options} />

        <div className="text-center mt-10">
          <Link to="/blog" className="ghost-btn text-sm px-6 py-2.5">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
