"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CornerUpLeft } from "lucide-react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-0">
      <div className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen md:col-span-3">
          <aside className="hidden lg:flex col-span-2 sticky top-0 h-screen flex-col overflow-y-auto">
            <div className="py-6">
              <Link
                href="/"
                className="text-base text-[#666666] hover:text-foreground hover:underline transition-colors flex items-center gap-2 text-sm"
              >
                <CornerUpLeft className="h-4 w-4" />
                RETURN
              </Link>
            </div>
            <nav className="border-l-1 pl-2 py-6 my-auto">
              <ul className="space-y-1 text-base">
                <li>
                  <a
                    href="#overview"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "overview"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#challenge"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "challenge"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Challenge
                  </a>
                </li>
                <li>
                  <a
                    href="#my-role"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "my-role"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    My Role
                  </a>
                </li>
                <li>
                  <a
                    href="#strategy"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "strategy"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "results"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Results
                  </a>
                </li>
                <li>
                  <a
                    href="#plot-twist"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "plot-twist"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Plot Twist
                  </a>
                </li>
                <li>
                  <a
                    href="#learnings"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "learnings"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    Learnings
                  </a>
                </li>
                <li>
                  <a
                    href="#next-steps"
                    className={`transition-colors cursor-pointer mono-sidebar-active ${
                      activeSection === "next-steps"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground mono-sidebar"
                    }`}
                  >
                    What&apos;s Next
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="col-span-8 overflow-y-auto space-y-12 lg:py-6 [&_p]:text-base">
            {/* Header Section */}
            <section className="flex flex-col gap-6 pt-10 lg:pt-10">
              <h1 className="max-w-[900px] text-2xl lg:text-4xl text-[#333333] leading-[1.12]">
                From mural walls to mobile feeds, I design the <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">journeys people remember</span>
              </h1>
              <p className="max-w-[600px] text-base">
                ART OF THE ROLL • PENDING 2025
              </p>
            </section>

            <section>
              <Image
                className="rounded-xl w-full h-auto object-cover"
                src="/artoftheroll/cover.png"
                alt="Art of the Roll project"
                width={1200}
                height={800}
              />
            </section>

            <section id="overview" className="space-y-6">
              <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4">
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">ROLE</h2>
                  <h3>Visual & Web Designer</h3>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TIMELINE</h2>
                  <p>2024 - Present</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TEAM</h2>
                  <p>5 members</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">STATUS</h2>
                  <p>Ongoing Project</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Overview</h2>
                <h3 className="text-2xl font-bold">
                  Breaking world records, one die at a time
                </h3>
              </div>
              <p>
                What happens when a group of ambitious college students from a
                regional campus decides to break a Guinness World Record? You
                get Art of the Roll, a project that turned into so much more
                than a dice mosaic. It became a story about dreaming bigger
                than anyone expected, rallying an entire community, and learning
                some expensive lessons along the way.
              </p>
              <p>
                As the visual and web designer, I crafted the brand identity,
                built the website, and created Instagram content that helped us
                raise over $11,000 in just 60 days. But here&apos;s the thing:
                we&apos;re still figuring it out. This is a living, breathing
                project with plot twists and pivots that taught us more than any
                classroom ever could.
              </p>
            </section>

            <section id="challenge" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Challenge</h2>
                <h3 className="text-2xl font-bold">
                  Creating the world&apos;s largest dice mosaic from a regional
                  campus with zero fundraising experience
                </h3>
              </div>
              <p>
                UConn Stamford is a regional campus. Translation? Fewer
                resources, smaller spotlight, and an uphill battle to get
                noticed. Our art club, Husky Art Pack, wanted to do something
                that would put us on the map and prove that big ideas
                don&apos;t just happen at main campuses.
              </p>
              <p>
                The goal was audacious: create the world&apos;s largest dice
                mosaic. The current record? 40,000 dice across 100 square feet.
                Our plan? Over 200,000 dice spanning 30 square meters.
                We&apos;d collaborate with Johnny Face Off from Design with
                Dice, a Stamford artist who specializes in dice art.
              </p>

              <div className="bg-[#f7fafc] border-l-4 border-[#4299e1] p-6 rounded">
                <p className="font-medium">
                  There was just one small problem: we needed $30,000. And we
                  had zero experience with fundraising at this scale.
                </p>
              </div>

              <p>
                Oh, and we were the first student group from the Stamford campus
                to ever participate in UConn&apos;s Ignite crowdfunding
                campaign. No pressure, right?
              </p>
            </section>

            <section id="my-role" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">My Role</h2>
                <h3 className="text-2xl font-bold">
                  Bringing the visual identity to life and making people care
                </h3>
              </div>
              <p>
                I wore a lot of hats on this project, but my primary focus was
                bringing the visual identity to life and making sure people
                actually cared about what we were doing. Here&apos;s what that
                looked like:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#4299e1] font-bold mt-1">→</span>
                  <p>
                    Designed the brand identity and website at
                    artoftheroll.org
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4299e1] font-bold mt-1">→</span>
                  <p>
                    Created Instagram posts and animated reels that told our
                    story
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4299e1] font-bold mt-1">→</span>
                  <p>
                    Developed campaign materials that resonated with student
                    donors
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4299e1] font-bold mt-1">→</span>
                  <p>Collaborated with the team on social media strategy</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/artoftheroll/post.gif"
                  alt="Instagram post design"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/artoftheroll/post2.jpg"
                  alt="Instagram post design"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/artoftheroll/post3.gif"
                  alt="Instagram post design"
                  width={800}
                  height={600}
                />
                <div className="rounded-xl overflow-hidden">
                  <video
                    src="/artoftheroll/post4.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </section>

            <section id="strategy" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Strategy</h2>
                <h3 className="text-2xl font-bold">
                  Building the brand and social presence
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p>
                    We needed to make people care about dice. Like, really care.
                    The visual identity had to balance two competing ideas: the
                    precision and craft of the actual mosaic work, and the
                    scrappy, passionate energy of a student-led initiative.
                  </p>
                  <p className="mt-4">
                    The website became our digital headquarters. I built it to
                    showcase not just what we were making, but why it mattered.
                    Every page was designed to convert visitors into donors or
                    volunteers. We needed people to see themselves in this
                    story.
                  </p>
                </div>


                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Social Media That Actually Worked
                  </h4>
                  <p>
                    Instagram became our secret weapon. I designed posts that
                    did more than look pretty—they told stories. Each piece of
                    content was crafted to build momentum, celebrate small wins,
                    and keep people invested in our journey.
                  </p>
                  <p className="mt-4">
                    The animated reels were crucial. Static images of dice?
                    Cool, but forgettable. Watching the process unfold, seeing
                    the team&apos;s passion, hearing about the world record?
                    That&apos;s shareable content.
                  </p>
                </div>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden">
                  <video
                    src="/artoftheroll/joinus.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />

                </div>
                  <div className="rounded-xl overflow-hidden">
                   <video
                    src="/artoftheroll/ignite.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                  </div>
                  </div>
                <p>
                  The numbers don&apos;t lie. Our social media campaigns boosted
                  engagement by 226.1% with our target audiences. We weren&apos;t
                  just posting into the void, we were building a community!
                </p>
              </div>
            </section>

            <section id="results" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Results</h2>
                <h3 className="text-2xl font-bold">The impact (so far)</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4299e1] mb-2">
                    $11,000+
                  </div>
                  <div className="text-sm text-[#718096]">
                    Raised in 60 days
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4299e1] mb-2">
                    60+
                  </div>
                  <div className="text-sm text-[#718096]">
                    Student donors in month 1
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4299e1] mb-2">
                    226.1%
                  </div>
                  <div className="text-sm text-[#718096]">
                    Engagement increase
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#4299e1] mb-2">
                    200,000+
                  </div>
                  <div className="text-sm text-[#718096]">Dice planned</div>
                </div>
              </div>

              <p>
                Within the first month, we had over 60 student donors. For a
                regional campus, that&apos;s unprecedented. The visual content
                and messaging strategy worked. People weren&apos;t just
                donating—they were excited to be part of something bigger.
              </p>

              <div className="grid grid-cols-1  gap-6">
                <div className="rounded-xl overflow-hidden">
               
                </div>
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/artoftheroll/ignite.png"
                  alt="UConn Ignite crowdfunding event"
                  width={800}
                  height={600}
                />
              </div>
            </section>

            <section id="plot-twist" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">The Plot Twist</h2>
                <h3 className="text-2xl font-bold">
                  When ambition meets reality
                </h3>
              </div>
              <p>
                Here&apos;s where it gets real. We recently had a major pivot
                with our artist collaborator, and we&apos;re rethinking the
                entire medium. Turns out, we were a little too ambitious. Okay,
                a lot too ambitious.
              </p>
              <p>
                Building a world record isn&apos;t just about having a cool idea
                and some dice. It&apos;s about budgets we drastically
                underestimated, logistics we didn&apos;t fully understand, and
                the reality check that comes with actually executing at this
                scale. We didn&apos;t realize how much money was going to go
                into trying to break a world record until we were already deep
                into it.
              </p>

              <div className="bg-[#f7fafc] border-l-4 border-[#4299e1] p-6 rounded">
                <p className="font-medium">
                  But here&apos;s the thing about design work: it&apos;s never
                  wasted. The brand we built, the community we rallied, and the
                  systems we created? Those aren&apos;t going anywhere.
                  They&apos;ll adapt with us.
                </p>
              </div>

              <p>
                This project taught me that real design work isn&apos;t just
                about making things look good. It&apos;s about creating flexible
                systems that can weather changes, pivots, and even complete
                redirections. The Instagram content that helped us secure
                funding? That same strategy will help us communicate our new
                direction. The website I built? It&apos;s ready to evolve with
                our vision.
              </p>
            </section>

            <section id="learnings" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">What I Learned</h2>
                <h3 className="text-2xl font-bold">
                  Lessons from the trenches
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Design for the pivot
                  </h4>
                  <p>
                    Building brand systems that can flex and adapt isn&apos;t
                    just good practice—it&apos;s essential. When your project
                    changes direction (and it will), your design infrastructure
                    should be able to keep up without starting from scratch.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Community beats perfection
                  </h4>
                  <p>
                    The most successful content wasn&apos;t the most polished.
                    It was the most authentic. People connected with our story
                    because it was real, messy, and human. The Instagram posts
                    that performed best were the ones that showed our journey,
                    not just our destination.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Ambition has a price tag
                  </h4>
                  <p>
                    We learned the hard way that world records cost money. Real
                    money. But that lesson? It&apos;s made us smarter, more
                    strategic, and better prepared for whatever comes next.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Regional doesn&apos;t mean small
                  </h4>
                  <p>
                    Being from a smaller campus became our superpower. It made
                    our story more compelling, our community tighter, and our
                    impact more meaningful. We weren&apos;t supposed to be able
                    to do this. That&apos;s exactly why people cared.
                  </p>
                </div>
              </div>

              <Image
                className="rounded-xl w-full h-auto"
                src="/artoftheroll/Team-picture.jpg"
                alt="Team working behind the scenes"
                width={800}
                height={600}
              />
            </section>

            <section id="media-recognition" className="space-y-6">
              <div className="bg-[#f7fafc] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Media Recognition
                </h3>
                <p className="mb-4">
                  Art of the Roll has been featured in multiple publications,
                  highlighting our innovative approach and community impact:
                </p>
                <div className="space-y-3">
                  <a
                    href="https://dailycampus.com/2025/02/20/art-club-looks-to-break-world-record-at-uconn-stamford-campus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#4299e1] hover:text-[#2c5282] font-medium transition-colors"
                  >
                    The Daily Campus: &quot;Art club looks to break world record
                    at UConn Stamford campus&quot;
                  </a>
                  <a
                    href="https://patch.com/connecticut/stamford/uconn-stamford-students-aim-break-dice-mosaic-world-record"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#4299e1] hover:text-[#2c5282] font-medium transition-colors"
                  >
                    Stamford Patch: &quot;UConn-Stamford Students Aim To Break
                    Dice Mosaic World Record&quot;
                  </a>
                </div>
              </div>
            </section>

            <section id="next-steps" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">What&apos;s Next</h2>
                <h3 className="text-2xl font-bold">
                  Regrouping and reimagining
                </h3>
              </div>
              <p>
                We&apos;re regrouping, reimagining, and getting ready for round
                two. The project might look different than we originally
                planned, but the mission hasn&apos;t changed: prove that
                students from regional campuses can dream big and actually
                deliver.
              </p>
              <p>
                The brand identity, the community we built, and the momentum we
                created? That&apos;s all still here. We&apos;re just getting
                started.
              </p>
            </section>
          </main>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
