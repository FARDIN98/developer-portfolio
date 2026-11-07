import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/utils";
import { EMAIL, GITHUB, LINKEDIN, PHONE } from "@/lib/profile";

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/[\s-]/g, "")}` },
  { icon: Github, label: "GitHub", value: "github.com/FARDIN98", href: GITHUB },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/fardin-ahmed", href: LINKEDIN },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", wide: true },
  { name: "message", label: "Message", textarea: true, wide: true },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "6d7025b9-a56f-4e38-b3ba-0998a940a3f2"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const inputClass = (name) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-emerald-400/60 focus:outline-none ${
      errors[name] ? "border-red-500/70" : "border-white/10"
    }`;

  return (
    <section id="contact" className="relative isolate overflow-hidden pb-10 pt-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/15 blur-[140px]"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeader
            index="06"
            label="Contact"
            intro="Have a product to build, a role to fill or a backend problem to untangle? Drop me a message."
          >
            Let&apos;s build something that <em>ships.</em>
          </SectionHeader>

          <motion.ul {...fadeUp(0.1)} className="mt-10 space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-300">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-zinc-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="break-all text-white transition-colors hover:text-emerald-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.form
          {...fadeUp(0.15)}
          onSubmit={handleSubmit}
          noValidate
          className="panel grid gap-5 self-start p-6 sm:grid-cols-2 md:p-8"
        >
          {fields.map(({ name, label, type, autoComplete, textarea, wide }) => {
            const props = {
              id: name,
              name,
              autoComplete,
              value: formData[name],
              onChange: (e) => setFormData({ ...formData, [name]: e.target.value }),
              "aria-invalid": Boolean(errors[name]),
              "aria-describedby": errors[name] ? `${name}-error` : undefined,
              className: `${inputClass(name)}${textarea ? " resize-none" : ""}`,
            };
            return (
              <div key={name} className={wide ? "sm:col-span-2" : undefined}>
                <label htmlFor={name} className="mb-2 block font-mono text-xs text-zinc-400">
                  {label}
                </label>
                {textarea ? <textarea rows={5} {...props} /> : <input type={type} {...props} />}
                {errors[name] && (
                  <p id={`${name}-error`} className="mt-1.5 text-sm text-red-400">
                    {errors[name]}
                  </p>
                )}
              </div>
            );
          })}

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-emerald-200 sm:col-span-2"
          >
            Send message
            <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

          <p
            role="status"
            className={`text-center text-sm sm:col-span-2 ${
              status?.includes("success") ? "text-emerald-300" : "text-red-400"
            } ${status ? "" : "sr-only"}`}
          >
            {status}
          </p>
        </motion.form>
      </div>

      <footer className="mx-auto mt-28 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Fardin Ehsan Ahamad</p>
        <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          Back to top <ArrowUp className="size-4" />
        </a>
      </footer>
    </section>
  );
}
