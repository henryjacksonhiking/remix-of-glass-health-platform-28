import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Borna.ai cut our front desk call time in half. Patients actually complete their intake forms before arriving now.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dr. Sarah Mitchell",
    role: "Practice Owner, Summit Dental Group",
  },
  {
    text: "We manage three locations and finally have a single view of every patient interaction. The communication tools alone justify the switch.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Rivera",
    role: "Operations Manager, Metro Health Partners",
  },
  {
    text: "The AI summaries after every call are a game-changer. Our team actually reads them because they are concise and actionable.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Dr. Priya Patel",
    role: "Clinical Director, Pacific Dental Care",
  },
  {
    text: "Online scheduling reduced our no-show rate by 35%. Patients love the automated reminders and easy rescheduling.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Dr. Marcus Chen",
    role: "Owner, Brightside Family Dentistry",
  },
  {
    text: "Revenue cycle visibility went from guesswork to real-time dashboards. We caught $40K in missed billings the first month.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lisa Tran",
    role: "CFO, Apex Dental Network",
  },
  {
    text: "Switching to Borna.ai was the smoothest software migration we've ever done. The onboarding team was incredible.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Robert Kimball",
    role: "IT Director, Valley Health Clinic",
  },
  {
    text: "Patient engagement skyrocketed after we started using the automated follow-up campaigns. Reactivation rates doubled.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Dr. Amanda Torres",
    role: "Partner, Coastal Smiles Group",
  },
  {
    text: "The HIPAA-compliant messaging gives us peace of mind. We communicate with patients securely without worrying about compliance.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Kevin Okafor",
    role: "Compliance Officer, HealthFirst Dental",
  },
  {
    text: "Borna.ai's analytics helped us identify our most profitable services and optimize our scheduling blocks accordingly.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Dr. Nina Kapoor",
    role: "Practice Owner, Harmony Dental Studio",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              Testimonials
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-headline text-foreground text-center"
          >
            What our users say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center max-w-lg mt-4"
          >
            See what clinics running on Borna.ai have to say.
          </motion.p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px]">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={26}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={24}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
