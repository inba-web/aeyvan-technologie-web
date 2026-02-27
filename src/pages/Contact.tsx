import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionReveal from "@/components/SectionReveal";
import { COMPANY } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  company: z.string().trim().max(100).optional(),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const BUDGET_RANGES = [
  "Under ₹1 Lakh",
  "₹1 - 5 Lakhs",
  "₹5 - 15 Lakhs",
  "₹15 - 50 Lakhs",
  "₹50 Lakhs+",
];

const SERVICE_OPTIONS = [
  "Custom Web Development",
  "Website Redesign",
  "Mobile App Development",
  "Cyber Security Solutions",
  "Cloud & DevOps Services",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    // Simulate submission (would connect to a backend)
    await new Promise((r) => setTimeout(r, 1500));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
    setSubmitting(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <motion.span
            className="inline-block text-sm text-primary font-medium uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's Build Something <span className="gradient-text">Great Together</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-8 md:p-12 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In *</label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              </SectionReveal>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <SectionReveal delay={0.1}>
                <div className="glass rounded-xl p-8 space-y-6">
                  <h3 className="font-display text-xl font-bold">Get in Touch</h3>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Location</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <a href={`tel:${COMPANY.phone}`} className="text-sm text-primary hover:underline">{COMPANY.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-primary hover:underline">{COMPANY.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Working Hours</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.workingHours}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="glass rounded-xl overflow-hidden">
                  <iframe
                    src={COMPANY.mapEmbed}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zently IT Solution Location"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
