import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // TODO: wire up your submission logic
  };

  // Parent container variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Child variants: fade up
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#111011] flex justify-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-lg w-full px-6">
        <motion.div
          className="bg-[#1E1D20] ring-1 ring-neutral-700 rounded-2xl shadow-xl p-8"
          variants={item}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-[#FE4F2D] mb-6 font-Outfit"
            variants={item}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-center text-neutral-400 mb-8"
            variants={item}
          >
            I’m always open to new opportunities or collaborations—drop me a line!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={item}
          >
            {/* Name */}
            <motion.div variants={item}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE4F2D]"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={item}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE4F2D]"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={item}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE4F2D]"
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={item}>
              <button
                type="submit"
                className="w-full flex justify-center py-3 bg-[#FE4F2D] rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
