import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionReveal from "@/components/SectionReveal";
import { COMPANY } from "@/lib/constants";

const contactSchema = z.object({
  user_name: z.string().trim().min(1, "Name is required").max(100),
  user_email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  company: z.string().trim().max(100).optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  "Custom Web Development",
  "Website Redesign",
  "Mobile App Development",
  "Cyber Security Solutions",
  "Cloud & DevOps Services",
  "Other",
];

const CAROUSEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    title: "Expert Consulting",
    subtitle: "Strategic solutions for your business"
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
    title: "Modern Innovation",
    subtitle: "Cutting-edge technology at your fingertips"
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    title: "Global Support",
    subtitle: "We're here for you, wherever you are"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    if (!form.current) return;

    setSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_4wecnav",
        "template_svk9cnj",
        form.current,
        "6HwrBClDtDi24-ft6"
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Your inquiry has been received. We'll get back to you shortly.",
      });

      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission Error",
        description: "We couldn't deliver your message via our automated system. Please try again or contact us via email.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Full Screen Carousel Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={CAROUSEL_IMAGES[currentSlide].url}
              alt="Carousel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm text-primary font-bold uppercase tracking-[0.4em] mb-6 bg-primary/10 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20">
              {CAROUSEL_IMAGES[currentSlide].subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-none">
              {CAROUSEL_IMAGES[currentSlide].title.split(" ")[0]} <br />
              <span className="gradient-text">{CAROUSEL_IMAGES[currentSlide].title.split(" ").slice(1).join(" ")}</span>
            </h1>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-12 h-1 rounded-full transition-all duration-500 ${i === currentSlide ? "bg-primary w-20" : "bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      <section className="section-padding relative -mt-6 z-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-12 xl:col-span-8">
              <SectionReveal>
                <div className="relative">
                  <form
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 md:p-16 space-y-10 shadow-2xl"
                  >
                    <div className="mb-12">
                      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Ready to Start?</h2>
                      <p className="text-white/50 font-light">Fill out the form below and we'll analyze your requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                        <input
                          {...register("user_name")}
                          name="user_name"
                          className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg"
                          placeholder="John Doe"
                        />
                        {errors.user_name && <p className="text-destructive text-xs font-bold">{errors.user_name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                        <input
                          {...register("user_email")}
                          name="user_email"
                          type="email"
                          className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg"
                          placeholder="john@example.com"
                        />
                        {errors.user_email && <p className="text-destructive text-xs font-bold">{errors.user_email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Phone Number</label>
                        <input
                          {...register("phone")}
                          name="phone"
                          className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg"
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && <p className="text-destructive text-xs font-bold">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Service Interested In</label>
                        <select
                          {...register("service")}
                          name="service"
                          className="w-full px-6 py-5 rounded-2xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none transition-all text-lg cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#111111]">Select a service</option>
                          {SERVICE_OPTIONS.map((s) => (
                            <option key={s} value={s} className="bg-[#111111]">{s}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-destructive text-xs font-bold">{errors.service.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Message Details</label>
                      <textarea
                        {...register("message")}
                        name="message"
                        rows={6}
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all text-lg"
                        placeholder="Describe your vision, goals, and any specific requirements..."
                      />
                      {errors.message && <p className="text-destructive text-xs font-bold">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-primary text-black font-black text-xl hover:scale-[1.02] transition-all shadow-[0_20px_40px_rgba(249,115,22,0.3)] disabled:opacity-50 disabled:scale-100 overflow-hidden"
                    >
                      <span className="relative z-10">{submitting ? "Processing..." : "Submit Inquiry"}</span>
                      <ArrowRight size={24} className={`relative z-10 transition-transform duration-300 ${submitting ? "translate-x-12 opacity-0" : "group-hover:translate-x-2"}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    </button>

                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em] text-center md:text-left">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </SectionReveal>
            </div>

            {/* Side Info Cards */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-8">
              <SectionReveal delay={0.1}>
                <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-6 
                sm:p-10 space-y-8 sm:space-y-10">
                  <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                    Contact <span className="text-primary italic font-light">Details</span>
                  </h3>

                  <div className="space-y-8">
                    <div className="group flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <MapPin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Global HQ</p>
                        <p className="text-sm sm:text-base text-white/80 leading-tight font-light">{COMPANY.location1}, {COMPANY.location2}</p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <Phone size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Direct Line</p>
                        <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-primary transition-colors block">{COMPANY.phone}</a>
                      </div>
                    </div>

                    <div className="group flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <Mail size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Email Us</p>
                        <a href={`mailto:${COMPANY.email}`} className="text-[13px] sm:text-base md:text-xl font-medium text-white hover:text-primary transition-colors break-all whitespace-normal">{COMPANY.email}</a>
                      </div>
                    </div>

                    <div className="group flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <Clock size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Service Hours</p>
                        <p className="text-sm sm:text-base text-white/80 font-light leading-tight">{COMPANY.workingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl h-80">
                  <iframe
                    src={COMPANY.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Zently IT Solution Location"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-color" />
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="bg-primary p-10 rounded-[2.5rem] text-black">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 size={32} />
                    <h3 className="text-2xl font-black tracking-tight">Rapid Response</h3>
                  </div>
                  <p className="font-bold leading-relaxed mb-8 opacity-80">
                    Our typical response time is under 120 minutes during business hours. We value your time as much as you do.
                  </p>
                  <div className="flex -space-x-3 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-primary bg-[#111111]"
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Expert"
                      />
                    ))}
                    <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-primary bg-black text-[10px] font-black text-primary">
                      +12
                    </div>
                  </div>
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
