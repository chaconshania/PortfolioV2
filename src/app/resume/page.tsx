"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 px-6 mt-[100px] lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen md:col-span-3">
          <div className="hidden lg:block col-span-2" />

          <main className="col-span-8 overflow-y-auto space-y-12 lg:py-6">
          {/* Introduction Section */}
          <section className="space-y-8">
            <div className="space-y-2">
              <motion.h1
                className="text-xl font-bold text-[#161515]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Shania Chacon
              </motion.h1>
              <motion.p
                className="text-lg text-[#858585] max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Product Designer who codes, turning sketches into shipped products
              </motion.p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-8">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-[#161515]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.h2>

            <div className="space-y-12">
              {/* Experience Item 1 */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-1">
                  <p className="text-sm text-[#858585]">2024 - 2025</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#161515]">
                      Product Designer
                    </h3>
                    <p className="text-[#858585]">Blueberry Social</p>
                  </div>
                  <p className="text-[#161515] leading-relaxed">
                    Led product design for an AI-powered social media management platform,
                    conducting user research and iterative testing to create intuitive workflows
                    for e-commerce brands managing customer engagement.
                  </p>
                </div>
              </motion.div>

              {/* Experience Item 2 */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-1">
                  <p className="text-sm text-[#858585]">2024 - Present</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#161515]">
                      Visual & Web Designer
                    </h3>
                    <p className="text-[#858585]">Art of the Roll</p>
                  </div>
                  <p className="text-[#161515] leading-relaxed">
                    Crafted brand identity and built website for a Guinness World Record
                    attempt, creating Instagram content that helped raise over $11,000 in
                    60 days and increased engagement by 226%.
                  </p>
                </div>
              </motion.div>

              {/* Experience Item 3 */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-1">
                  <p className="text-sm text-[#858585]">2024</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#161515]">
                      Design Intern
                    </h3>
                    <p className="text-[#858585]">ArtsWestchester</p>
                  </div>
                  <p className="text-[#161515] leading-relaxed">
                    Designed and redesigned web pages for a regional arts organization,
                    improving user experience and visual consistency across digital platforms.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-8">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-[#161515]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-1">
                <p className="text-sm text-[#858585]">2021 - 2025</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#161515]">
                    B.A. in Digital Media & Design
                  </h3>
                  <p className="text-[#858585]">University of Connecticut</p>
                </div>
                <p className="text-[#161515] leading-relaxed">
                  Focused on web interactive design, UX/UI, and front-end development.
                  Participated in UXGO CoCreate (Cohort 20).
                </p>
              </div>
            </motion.div>
          </section>


          {/* Involvement Section */}
          <section className="space-y-8">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-[#161515]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Involvement
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-1">
                  <p className="text-sm text-[#858585]">2024</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#161515]">
                    UXGO CoCreate Cohort 20
                  </h3>
                  <p className="text-[#161515] leading-relaxed">
                    Collaborated with founders and engineers on real product design challenges
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-1">
                  <p className="text-sm text-[#858585]">2024 - Present</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#161515]">
                    Husky Art Pack
                  </h3>
                  <p className="text-[#161515] leading-relaxed">
                    Art club member leading design initiatives for campus projects
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-8 pb-16">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-[#161515]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Connect
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                className="text-[#161515] leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I&apos;m currently exploring opportunities in product design and front-end development.
                Feel free to reach out if you&apos;d like to collaborate or just chat about design.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center px-6 py-3 bg-[#313131] text-white rounded-lg hover:bg-[#161515] transition-colors duration-200"
                >
                  Email Me
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#313131] text-[#313131] rounded-lg hover:bg-[#313131] hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#313131] text-[#313131] rounded-lg hover:bg-[#313131] hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </motion.div>
            </div>
          </section>
          </main>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
