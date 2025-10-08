import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="p-6">
        <section className="aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1073426256?h=pl&title=0&byline=0&portrait=0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <aside className="hidden lg:flex col-span-2 sticky top-0 h-screen flex-col justify-end overflow-y-auto">
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

          <main className="col-span-8 overflow-y-auto space-y-12 lg:py-6">
            <section className="space-y-6">
              <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4">
                <div className="flex flex-col pt-[10px] space-y-2">
                  <h2 className="text-sm text-[#999999]">ROLE</h2>
                  <h3>Lead UI/UX Designer & Researcher</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-sm text-[#999999]">TOOLS</h2>
                  <p>Figma</p>
                  <p>Adobe Illustrator</p>
                  <p>Bezi</p>
                  <p>Blender</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-sm text-[#999999]">TIMELINE</h2>
                  <p>Fall 2024</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-sm text-[#999999]">TEAM SIZE</h2>
                  <p>Solo Project</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Overview</h2>
                <h3 className="text-2xl font-bold">Background</h3>
              </div>
              <p>
                In the fall of 2024, as part of my senior capstone project at
                UConn, I explored how extended reality (XR) could revolutionize
                mental health care. Inspired by VR’s immersive potential and the
                growing need for accessible wellness tools, I envisioned a
                platform blending calming environments with interactive
                mindfulness exercises. Thus, Oasis XR was born—a space where
                users could find solace and clarity amidst the chaos of daily
                life.
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
                  Mental wellness apps were not cutting through the noise
                </h3>
              </div>
              <p>
                Despite growing demand for mental health support, existing
                mindfulness platforms missed the mark. Users downloaded apps
                with good intentions but abandoned them within weeks. The
                problem wasn’t the number of options—it was the lack of genuine
                connection. Traditional meditation apps offered guided sessions
                and calming sounds but felt flat, like following instructions
                from a manual. People dealing with real anxiety needed more than
                background noise. They needed to feel transported, engaged, and
                understood.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  The gap between promise and experience
                </h3>
                <p>
                  Competitors like Headspace and Endel were cautiously exploring
                  XR, but the potential remained untapped. Three barriers kept
                  surfacing in user feedback: apps felt repetitive, premium
                  features created accessibility issues, and one-size-fits-all
                  solutions ignored personal differences.
                </p>
              </div>
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt="XR Research Visualization"
                width={800}
                height={600}
              />
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Discovery</h2>
                <h3 className="text-2xl font-bold">
                  Getting inside users heads (and hearts)
                </h3>
              </div>
              <p>
                I started with people. Through interviews with individuals
                managing anxiety and stress, I found patterns that data couldn’t
                reveal. One participant said, “I want to escape, but these apps
                just remind me I’m sitting in my bedroom staring at my phone.”
                That stuck with me.{" "}
                <span className="font-bold">Users craved presence</span>—the
                feeling of actually being somewhere else.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">What the numbers revealed</h2>
              <p>
                My competitive analysis showed that VR meditation experiences
                were often either too expensive, too sterile, or quickly lost
                novelty. The gap for an affordable, engaging, personalized XR
                wellness platform was wide open. Users emotionally connected to
                mindfulness practices were three times more likely to maintain
                them. Connection was the key.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Synthesis</h2>
                <h3 className="text-2xl font-bold">
                  Synthesizing insights into direction
                </h3>
              </div>
              <p>
                Three principles guided the next phase:
                <br />
                <br />
                <span className="font-bold">Immersion over instruction</span> —
                Show, don’t just tell.
                <br />
                <span className="font-bold">
                  Adaptation over prescription
                </span>{" "}
                — Let users shape their own experience.
                <br />
                <span className="font-bold">
                  Accessibility over exclusivity
                </span>{" "}
                — Remove barriers to entry.
              </p>
            </section>

            <section className="space-y-12">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Key Features</h2>
              </div>

              {/* Feature 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-6 lg:space-y-0">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/environments.png"
                  alt="Oasis XR immersive environments"
                  width={800}
                  height={600}
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Environments that heal</h3>
                  <p>
                    Each landscape served a psychological purpose. The coastal
                    scene grounded and opened the mind; the forest provided
                    safety and introspection; the mountains offered perspective.
                    Users chose based on emotional needs, not visuals.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-6 lg:space-y-0">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/personalization.png"
                  alt="Oasis XR personalization interface"
                  width={800}
                  height={600}
                />
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
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/accessibility.png"
                  alt="Oasis XR accessibility and onboarding flow"
                  width={800}
                  height={600}
                />
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
                  What I learned about designing for wellness
                </h3>
              </div>
              <p>
                Designing for mental health demands empathy that prioritizes
                sanctuary over engagement metrics. The best design gets out of
                the way and lets healing happen.
              </p>
            </section>
          </main>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
