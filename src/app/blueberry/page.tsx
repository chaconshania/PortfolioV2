import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="px-6 mt-[100px] lg:mt-0">
        <section className="w-full">
          <Image
            className="rounded-xl w-full h-auto  object-cover"
            src="/blueberry/blueberry.jpg"
            alt="blueberry dashboard"
            width={1200}
            height={800}
           
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <aside className="hidden lg:flex col-span-2 sticky top-0 justify-end h-screen flex-col  overflow-y-auto">
            <nav className="py-6">
              <ul className="space-y-2 text-sm">
                <li>Overview</li>
                <li>Initial findings</li>
                <li>Challenge</li>
                <li>Iterations</li>
                <li>Reflection</li>
              </ul>
            </nav>
          </aside>

          <main className="col-span-8 overflow-y-auto space-y-12 lg:py-6 ">
            <section className="space-y-6">
              <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4 ">
                <div className="flex flex-col pt-[10px]">
                  <h2 className="text-sm text-[#999999]">ROLE</h2>
                  <h3>Product designer</h3>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">COLLABORATORS</h2>
                  <ul>
                    <li>Lauren</li> <li>Keiko</li> <li>Valerie</li>
                    <li>Alex</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TOOLS</h2> <p>Figma</p>
                  <p>v0</p> <p>ChatGPT</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TIMELINE</h2>
                  <p>10 weeks</p> <p>San Francisco (Remote)</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Overview</h2>
                <h3 className="text-2xl font-bold">
                  Building a unified inbox to turn missed comments into sales
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
                inconsistent brand messaging. This is why we designed Blueberry
                Social, a tool that brings every interaction into one clear
                inbox and surfaces the most important messages first. With AI
                assistance, teams can respond faster, maintain their brand
                voice, and turn everyday conversations into sales opportunities.
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
                <h3 className="text-2xl font-bold">
                  Blueberry started as Socialite, a social listening tool for
                  founders, and pivoted midway.
                </h3>
              </div>
              <p>
                The biggest challenge was the pivot. Midway through the research
                sprint, the project shifted from Socialite, a social listening
                tool for founders, to Blueberry Social, a platform for
                e-commerce teams managing comments and direct messages at scale.
                That left us with just five weeks to regroup, redefine our ideal
                customer profile, and recreate the entire user journey. We had
                to line up new interviewees, run usability tests, and adapt the
                prototype after each round of feedback. The constant cycle of
                testing and iteration under a tight deadline pushed the team to
                move fast and focus on the users.
              </p>
            </section>

            <section className="space-y-6">
              {/*}
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt=""
                width={800}
                height={600}
              /> {*/}
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Solution</h2>
                <h3 className="text-2xl font-bold">
                  We built a unified inbox, automation rules, and seamless
                  onboarding with AI that teams could trust to manage
                  conversations efficiently and turn them into sales
                </h3>
              </div>
            </section>
            <section className="space-y-12">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Key Features</h2>
              </div>

              {/* Feature 1 - Video */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-6 lg:space-y-0">
                <div className="w-full lg:max-w-[1200px] mx-auto rounded-xl overflow-hidden">
                  <video
                    src="/blueberry/onboarding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Onboarding users quick & fast
                  </h3>
                  <p>
                    We made a critical realization: every question we asked was
                    a barrier between the user and seeing value. So we
                    ruthlessly cut. What is the absolute minimum information we
                    need to get someone up and running?
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-6 lg:space-y-0">
                <div className="w-full lg:max-w-[1200px] mx-auto rounded-xl overflow-hidden">
                  <video
                    src="/blueberry/onboarding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Personalization that learns
                  </h3>
                  <p>
                    The platform adapted to user patterns. Morning breathers saw
                    breathing exercises surfaced first. Preferred soundscapes
                    saved automatically. The experience became more personal
                    with use.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-6 lg:space-y-0">
                <div className="w-full lg:max-w-[1200px] mx-auto rounded-xl overflow-hidden">
                  <video
                    src="/blueberry/onboarding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Accessibility by design
                  </h3>
                  <p>
                    No subscription tiers hid core features. Oasis XR supported
                    affordable VR headsets and used gradual onboarding to reduce
                    friction.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">
                  Reflection & Next Steps
                </h2>
                <h3 className="text-2xl font-bold">
                  Where Blueberry goes next
                </h3>
              </div>
              <p>
                <span className="font-bold">DM Functionality:</span>
                Multiple users mentioned managing DMs as part of their workflow.
                We deprioritized this for launch, but it is a clear user need
                worth exploring. The inbox-to-DM flow could unlock new
                engagement opportunities.
              </p>
              <p>
                <span className="font-bold">Dashboard with real value</span> Our
                current dashboard is pretty bare. It does not give users much
                reason to return. I would focus on surfacing actionable
                insights—sentiment trends, engagement spikes, buyer signals—to
                reduce bounce rate and make the dashboard a true hub.
              </p>
            </section>
          </main>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
