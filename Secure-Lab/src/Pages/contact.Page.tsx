import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github } from "lucide-react";

function ContactPage() {
  const { register, formState: { errors } } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);
  //   alert("Message Sent (Simulated)");
  // };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 pb-10"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-[--text-muted] text-lg">
            Have questions about cryptography or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="space-y-6">
          {[
            { icon: <Mail className="text-[--primary-color]" />, title: "Email", value: "muhammadishaq.dev@gmail.com" },
            { icon: <Github className="text-[--secondary-color]" />, title: "Github", value: "https://github.com/MIshaqDev" },
            { icon: <MapPin className="text-[--accent-color]" />, title: "Location", value: "Haripur, Pakistan" }
          ].map((item, index) => (
            <div key={index} className="pro-card p-6 flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-[--text-muted]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pro-card p-8 bg-[--surface-color]"
      >
        <form action="https://formspree.io/f/mreapoqp"
          method="POST"
          className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-(--text-muted)">Name</label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                className="pro-input w-full"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-(--error-color) text-xs">Required</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-(--text-muted)">Email</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                name="email"
                type="email"
                className="pro-input w-full bg-transparent"
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-(--error-color) text-xs">Invalid Email</span>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-(--text-muted)">Subject</label>
            <input
              {...register("subject", { required: true })}
              name="subject"
              type="text"
              className="pro-input w-full"
              placeholder="Project Inquiry"
            />
            {errors.subject && <span className="text-(--error-color) text-xs">Required</span>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-(--text-muted)">Message</label>
            <textarea
              {...register("message", { required: true })}
              name="message"
              className="pro-input w-full h-32 resize-none"
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && <span className="text-(--error-color) text-xs">Required</span>}
          </div>

          <button type="submit" className="pro-button w-full flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactPage;
