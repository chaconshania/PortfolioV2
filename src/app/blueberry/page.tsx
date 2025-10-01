import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="p-6">
        <section>
          <Image
            className="rounded-xl w-full h-auto"
            src="/blueberry/pivot.png"
            alt="blueberry dashboard"
            width={800}
            height={600}
          />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-[15%_1fr] min-h-screen">
          {/* Left Column  */}
          <aside className="hidden lg:flex sticky h-screen left-0 top-0 flex-col justify-end overflow-y-auto">
            <nav className="py-[20px]">
              <ul>
                <li>Overview</li>
                <li>Problem</li>
                <li>Challenges</li>
                <li>Iterations</li>
                <li>Reflection</li>
              </ul>
            </nav>
          </aside>

          {/* Right Column - 70%, scrollable */}
          <main className=" overflow-y-auto space-y-12 lg:py-[20px] lg:pr-20 ">
            <section>
              <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4 ">
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">ROLE</h2>
                  <h3>Product designer</h3>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">COLLABORATORS</h2>
                  <ul>
                    <li>Lauren</li>
                    <li>Keiko</li>
                    <li>Valerie</li>
                    <li>Alex</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TOOLS</h2>
                  <p>Figma</p>
                  <p>v0</p>
                  <p>ChatGPT</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TIMELINE</h2>
                  <p>10 weeks</p>
                  <p>San Francisco (Remote)</p>
                </div>
              </div>
            </section>
            <section className="space-y-6">
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt="blueberry inbox"
                width={800}
                height={600}
              />
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Overview</h2>
                <h3 className="text-xl">
                  Building an unified inbox to turn missed comments into sales
                </h3>
              </div>
              <p>
                E-commerce teams are expected to manage multiple social
                channels, respond to customer comments, and keep engagement
                high, all while running the rest of their business. This often
                means juggling dozens of messages at once and trying not to miss
                anything important. Keeping up can be exhausting, especially for
                businesses without a dedicated social media team. Missed
                comments can lead to lost sales, frustrated customers, or
                inconsistent brand messaging. <br /> <br />
                This is why we built Blueberry Social, a tool that brings every
                interaction into one clear inbox and surfaces the most important
                messages first. With AI assistance, teams can respond faster,
                maintain their brand voice, and turn everyday conversations into
                sales opportunities.
              </p>
            </section>
            <section className="space-y-6">
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt="Pivot from Socialite to Blueberry"
                width={800}
                height={600}
              />
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Challenge</h2>
                <h3 className="text-xl">The Pivot that Changed Everything</h3>
              </div>
              <p>
                The project first began as Socialite, a social listening tool
                for startup founders. Halfway through the research sprint, the
                product took a sharp turn. The founders decided to pivot and
                rebrand the platform as Blueberry Social, now focused on
                e-commerce teams who needed to manage comments and direct
                messages at scale. It caught everyone off guard and required us
                to revisit assumptions, revamp our ideal customer profile, and
                design a product that felt familiar enough to build on existing
                insights but specific enough to address the needs of a
                completely different market. All within 5 weeks!
              </p>
            </section>
            <section className="space-y-6">
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt=""
                width={800}
                height={600}
              />
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Challenge</h2>
                <h3 className="text-xl">The Pivot that Changed Everything</h3>
              </div>
              <p>
                The project first began as Socialite, a social listening tool
                for startup founders. Halfway through the research sprint, the
                product took a sharp turn. The founders decided to pivot and
                rebrand the platform as Blueberry Social, now focused on
                e-commerce teams who needed to manage comments and direct
                messages at scale. It caught everyone off guard and required us
                to revisit assumptions, revamp our ideal customer profile, and
                design a product that felt familiar enough to build on existing
                insights but specific enough to address the needs of a
                completely different market. All within 5 weeks!
              </p>
            </section>
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">
                  So what&apos;s the problem now?
                </h2>
                <h3 className="text-xl">Understanding the ICP</h3>
              </div>
              <p>
                Research showed that e-commerce teams were most concerned about
                missing critical comments during off hours. Instead of treating
                all messages equally, we redesigned the inbox experience to
                surface high value or time sensitive comments first. Teams could
                quickly identify opportunities or risks without combing through
                a wall of noise.
              </p>
            </section>
            <section>
              <h2>Inbox familarity</h2>
              <p>
                Early prototypes asked too much of users, creating friction
                before they could see value. We stripped onboarding to the
                essentials: connect a brand account, set messaging preferences,
                and link Meta Business integration. Testing showed that this
                shorter flow made onboarding feel like a fast track rather than
                a chore, and retention improved immediately.
              </p>
            </section>
            <section>
              <h2>Uncertainty with AI</h2>{" "}
              <p>
                We discovered that while many were open to using AI to save
                time, they needed a sense of control. Some industries required
                strict oversight of brand messaging, so full automation for the
                inbox is out of the table. To address this, we designed a rules
                engine that allowed users to toggle and customize the level of
                AI assistance. Automation felt helpful only when teams could
                step in and decide how far it should go.
              </p>
            </section>
            <section>
              <h2>Onboarding that sticks</h2>
              <p>
                Early prototypes asked too much of users, creating friction
                before they could see value. We stripped onboarding to the
                essentials: connect a brand account, set messaging preferences,
                and link Meta Business integration. Testing showed that this
                shorter flow made onboarding feel like a fast track rather than
                a chore, and retention improved immediately.
              </p>
            </section>

            <section>
              <h2>Onboarding that sticks</h2>
              <p>
                Early prototypes asked too much of users, creating friction
                before they could see value. We stripped onboarding to the
                essentials: connect a brand account, set messaging preferences,
                and link Meta Business integration. Testing showed that this
                shorter flow made onboarding feel like a fast track rather than
                a chore, and retention improved immediately.
              </p>
            </section>
            <section>
              <h2>Onboarding that sticks</h2>
              <p>
                Early prototypes asked too much of users, creating friction
                before they could see value. We stripped onboarding to the
                essentials: connect a brand account, set messaging preferences,
                and link Meta Business integration. Testing showed that this
                shorter flow made onboarding feel like a fast track rather than
                a chore, and retention improved immediately.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
