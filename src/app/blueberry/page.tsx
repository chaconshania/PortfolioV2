"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";

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
      <div className="px-6 mt-[100px] lg:mt-0">
        {/* Header Section */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 pt-10 lg:pt-10 pb-10 w-full">
          <div className="flex flex-col w-full gap-6">
            <h1 className="max-w-[900px] text-3xl lg:text-6xl text-[#333333] leading-[1.12]">
              Turning chaotic social chatter into <span className="font-bold text-[#333333] px-2 bg-[#F7C325]">warm, on-brand conversations</span> automatically
            </h1>
            <p className="max-w-[600px] text-base">
              BLUEBERRY SOCIAL • SHIPPED 2025
            </p>
          </div>
        </section>

        <section className="w-full">
          <Image
            className="rounded-xl w-full h-auto object-cover"
            src="/blueberry/blueberry.jpg"
            alt="blueberry dashboard"
            width={1200}
            height={800}
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <aside className="hidden lg:flex col-span-2 sticky top-0 justify-end h-screen flex-col overflow-y-auto">
            <nav className="py-6">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#the-problem"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "the-problem"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    The Problem
                  </a>
                </li>
                <li>
                  <a
                    href="#the-pivot"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "the-pivot"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    The Pivot
                  </a>
                </li>
                <li>
                  <a
                    href="#understanding-users"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "understanding-users"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Understanding Users
                  </a>
                </li>
                <li>
                  <a
                    href="#design-process"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "design-process"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Design Process
                  </a>
                </li>
                <li>
                  <a
                    href="#brand-identity"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "brand-identity"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a
                    href="#key-features"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "key-features"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Key Features
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "results"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Results
                  </a>
                </li>
                <li>
                  <a
                    href="#what-i-learned"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "what-i-learned"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    What I Learned
                  </a>
                </li>
                <li>
                  <a
                    href="#next-steps"
                    className={`transition-colors cursor-pointer ${
                      activeSection === "next-steps"
                        ? "text-foreground font-medium px-2 bg-[#F7C325]"
                        : "text-[#666666] hover:text-foreground"
                    }`}
                  >
                    Next Steps
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="col-span-8 overflow-y-auto space-y-12 lg:py-6">
            <section className="space-y-6">
              <div className="grid space-y-6 grid-cols-1 lg:grid-cols-4">
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">ROLE</h2>
                  <h3>Product Designer</h3>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TIMELINE</h2>
                  <p>10 weeks</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TEAM</h2>
                  <ul><li>Lauren</li><li>Keiko</li><li>Valerie</li><li>Alex</li></ul>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm text-[#999999]">TOOLS</h2>
                  <p>Figma, V0, Shadcn</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Overview</h2>
                <h3 className="text-2xl font-bold">
                  Designing trust in AI-powered social commerce
                </h3>
              </div>
              <p>
                It&apos;s 2 AM, and Maya, Head of Growth at ACME Skincare,
                wakes up to a notification. A defaming comment has been sitting
                at the top of their highest-performing Instagram ad for three
                hours. By morning, their ad engagement has dropped 30%, and
                potential customers are seeing negativity before they even learn
                about the product.
              </p>
              <p>
                This wasn&apos;t unique to Maya. Across mid-sized eCommerce
                brands pulling in $2M+ annually, social teams were drowning.
                They were manually scanning hundreds of comments daily, deciding
                what deserved responses, crafting replies that stayed on brand,
                and doing it all fast enough to protect conversion rates.
              </p>
            </section>

            <section id="the-problem" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">The Problem</h2>
                <h3 className="text-2xl font-bold">
                  When every missed comment costs money
                </h3>
              </div>

              <p>
                E-commerce teams are expected to manage multiple social channels, respond to customer comments, and keep engagement high, all while running the rest of their business. This often means juggling dozens of messages at once and trying not to miss anything important. Keeping up can be exhausting, especially for businesses without a dedicated social media team. Missed comments can lead to lost sales, frustrated customers, or inconsistent brand messaging. This is why we designed Blueberry Social, a tool that brings every interaction into one clear inbox and surfaces the most important messages first. With AI assistance, teams can respond faster, maintain their brand voice, and turn everyday conversations into sales opportunities.
              </p>

              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/group-picture.JPG"
                alt="Group picture"
                width={800}
                height={600}
              />
            </section>

            <section id="the-pivot" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">The Pivot</h2>
                <h3 className="text-2xl font-bold">
                  When everything changed halfway through
                </h3>
              </div>
              <p>
                Halfway through the project, everything changed. We had spent
                weeks building a social listening tool for startup founders.
                Then the co-founders came back with new data: mid-sized
                eCommerce brands were the real opportunity.
              </p>
              <p>
                Our entire ideal customer profile had flipped. Instead of solo
                entrepreneurs, we were now designing for growth teams at brands
                doing millions in revenue.
              </p>

              <div className="bg-[#f7fafc] border-l-4 border-[#667eea] p-6 rounded">
                <p className="font-medium italic">
                  We had a choice: panic and restart from scratch, or adapt
                  quickly and use what we&apos;d learned.
                </p>
              </div>

              <p>
                We made a deliberate decision to move fast. We used AI tools
                like V0 to spin up rapid prototypes, ran weekly testing
                sessions, and iterated based on real feedback. The goal
                wasn&apos;t perfection. It was reducing ambiguity fast enough to
                build something valuable.
              </p>

              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/pivot.png"
                alt="Timeline showing pivot point"
                width={800}
                height={600}
              />
            </section>

            <section id="understanding-users" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Understanding Users</h2>
                <h3 className="text-2xl font-bold">
                  What growth teams actually needed
                </h3>
              </div>
              <p>
                We talked to growth leads and social media managers at eCommerce
                brands. Through testing sessions, we discovered their real pain
                points. Below are some key points we have gathered through interviews, supported with quotes from our participants.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[#f7fafc] p-6 rounded-lg ">
                  <h4 className="text-lg font-semibold mb-3">
                    Trust takes time
                  </h4>
                  <p className="text-sm text-[#4a5568]">
                    &quot;I don&apos;t fully trust AI yet, but I&apos;m open to
                    automation once I trust it over time.&quot;
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg ">
                  <h4 className="text-lg font-semibold mb-3">
                    Speed without sacrificing brand
                  </h4>
                  <p className="text-sm text-[#4a5568]">
                    &quot;The more the AI can mimic our brand voice, the better.
                    Generic responses are a dealbreaker.&quot;
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg ">
                  <h4 className="text-lg font-semibold mb-3">
                    Clarity over complexity
                  </h4>
                  <p className="text-sm text-[#4a5568]">
                    &quot;Too many options feels like work, not help. I want the
                    tool to be intuitive.&quot;
                  </p>
                </div>
              </div>
              {/* 
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/user-testing.jpg"
                alt="User testing session"
                width={800}
                height={600}
              /> */}
            </section>

            <section id="design-process" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Design Process</h2>
                <h3 className="text-2xl font-bold">
                  Onboarding: Earning trust in two minutes
                </h3>
              </div>
              <p>
                After talking to our participants, we brainstormed on solutions to the problem. This brings us to our first how-might-we statement: How might we deliver immediate value while gathering enough
                information to make AI responses feel genuinely on-brand?
                <br /> <br /> From that HMW statement, we branched off into several explorations...
              </p>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <div className="inline-block bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Exploration 1
                </div>
                <h4 className="text-xl font-semibold">
                  The conversational approach
                </h4>
                <p>
                  My first instinct was to make onboarding feel natural with a
                  ChatGPT-style interface where users describe their brand in
                  their own words. But API restrictions from Meta and TikTok
                  made this technically complex. We were on a tight timeline and
                  this path would derail us.
                </p>
              </div>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <div className="inline-block bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Exploration 2
                </div>
                <h4 className="text-xl font-semibold">
                  Sequential walkthrough
                </h4>
                <p>
                  Next, we tried guiding users through questions one at a time.
                  But during testing, Participant 1 said, &quot;I prefer that
                  it&apos;s all in one, so I can fill it out. Otherwise I
                  wouldn&apos;t know when it will end.&quot; Users felt
                  impatient. They wanted to see the product working, not answer
                  a quiz.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
               
                 <video
                  className="rounded-xl w-full h-auto bg-[#F8F8F8] p-10"
                  src="/blueberry/second-prototype.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <div className="inline-block bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Final Solution
                </div>
                <h4 className="text-xl font-semibold">
                  Reduce friction, deliver value instantly
                </h4>
                <p>
                  We made a critical realization: every question we asked was a
                  barrier between the user and value. So we ruthlessly cut
                  everything non-essential.
                </p>
                <p>
                  The final solution: Connect Meta Business Account, add basic
                  brand info, and you&apos;re in. The app immediately pulls
                  posts and comments and starts working. No lengthy
                  questionnaires. Users saw their actual Instagram comments with
                  AI-generated suggested replies within two minutes. <br /> <br /> Ultimately, our goal is to make this onboarding process seamless as possible without any friction. 
                </p>
              </div>

              <div className="w-full lg:max-w-[1200px] mx-auto rounded-xl overflow-hidden border-1 border-[#EFF3F8]">
                <video
                  src="/blueberry/onboarding.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="bg-[#f7fafc] border-l-4 border-[#667eea] p-6 rounded">
                <p className="font-medium italic">
                  &quot;Super easy and it took exactly what you needed.&quot; -
                  Participant 4, rating onboarding 7/7
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Inbox: Making efficiency feel intuitive
                </h3>
              </div>

              <p>
                During our first test, Participant 1 was immediately confused:
                &quot;Inbox? Is he looking at the DMs?&quot; The terminology we
                thought was obvious was completely foreign to users whose mental
                model came from email, not social platforms.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/inbox-early.jpg"
                  alt="Early inbox design"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/inbox-revised.jpg"
                  alt="Revised inbox design"
                  width={800}
                  height={600}
                />
              </div>

              <p>
                <span className="font-bold">The emoji problem:</span>{" "}
                Participant 6 called out something critical: &quot;Some of these
                emojis are things that wouldn&apos;t be used likely. Less emojis
                the better.&quot; The AI responses were clearly AI-generated
                because they were too cheerful, too generic.
              </p>

              <p>
                When Participant 6 regenerated responses, he said, &quot;I find
                it much better and easier to understand. These are good
                responses.&quot; Users could spot inauthenticity instantly. Our
                AI had to match their actual brand voice, not what an AI thinks
                customer service sounds like.
              </p>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <h4 className="text-xl font-semibold">
                  Building trust through transparency
                </h4>
                <p>Design decisions we made:</p>
                <div className="space-y-3">
                  <p>
                    <span className="font-bold">Show AI reasoning:</span>{" "}
                    Suggested responses explained why they were suggesting that
                    reply, based on brand voice guidelines.
                  </p>
                  <p>
                    <span className="font-bold">Make learning visible:</span>{" "}
                    When users edited suggestions, we showed that the AI was
                    adapting.
                  </p>
                  <p>
                    <span className="font-bold">
                      Bulk actions with control:
                    </span>{" "}
                    For power users managing hundreds of comments, we added bulk
                    reply. Select similar comments, review AI suggestions, edit
                    if needed, send.
                  </p>
                </div>
              </div>

              <video
                className="rounded-xl w-full h-auto border-1 border-[#EFF3F8]"
                src="/blueberry/inbox.mp4"
               autoPlay
                muted
                loop
                playsInline
              />

              <p>
                <span className="font-bold">What we learned about filters:</span>{" "}
                Participant 1 wanted to &quot;crank through it as fast as
                possible&quot; and filter by post. Participant 6 reinforced
                this: &quot;Subsets for data (filters): ADS first. Bring those
                to the top.&quot;
              </p>

              <p>
                But users didn&apos;t want endless filtering options. They
                wanted smart defaults that surfaced what mattered most, with the
                option to dig deeper if needed. Clarity over choice.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Brand Voice & Automation: Earning permission to go hands-free
                </h3>
              </div>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <div className="inline-block bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Early Version
                </div>
                <h4 className="text-xl font-semibold">
                  When we overcorrected
                </h4>
                <p>
                  In trying to give users maximum control, we created cognitive
                  overload. Our early rules system had options for everything:
                  tone adjustments, keyword triggers, conditional logic,
                  exception handling.
                </p>
                <p>
                  Participant 2 looked at it and said, &quot;Rules look a bit
                  intimidating.&quot; If the tool required this much setup, was
                  it really saving time?
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/rules-early.jpg"
                  alt="Early rules page"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/rules-simplified.jpg"
                  alt="Simplified rules"
                  width={800}
                  height={600}
                />
              </div>

              <div className="bg-[#fafafa] p-8 rounded-xl space-y-4">
                <div className="inline-block bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Revised Approach
                </div>
                <h4 className="text-xl font-semibold">
                  Progressive disclosure
                </h4>
                <p>
                  We restructured the entire brand voice section around a simple
                  principle: show users what matters when it matters.
                </p>
                <div className="space-y-3">
                  <p>
                    <span className="font-bold">Start with basics:</span> Upload
                    brand guidelines or documents, set tone preferences. We made
                    URL upload easy since users mentioned they wouldn&apos;t
                    want to input text manually.
                  </p>
                  <p>
                    <span className="font-bold">Test in the sandbox:</span>{" "}
                    Users could see how AI would respond to real comments from
                    their feed before going live. This was huge for building
                    confidence.
                  </p>
                  <p>
                    <span className="font-bold">
                      Advanced rules are optional:
                    </span>{" "}
                    For power users who wanted granular control, it was there.
                    But it wasn&apos;t required for the base experience.
                  </p>
                </div>
              </div>

              <video
                className="rounded-xl w-full h-auto border-1 border-[#EFF3F8]"
                src="/blueberry/automation.mp4"
                autoPlay
                muted
                loop
                playsInline
                width={800}
                height={600}
              />

              <p>
                Participant 6 gave this approach a 6.5/7: &quot;Easy to
                navigate. Each one has good buttons around each section. It
                would be nice to have a couple of presets to help out
                customers.&quot;
              </p>

              <p>
                <span className="font-bold">The preset insight:</span> Multiple
                users mentioned wanting preset brand voices. Not everyone would
                want to start from scratch. Participant 5 asked, &quot;Can you
                save multiple brand voices?&quot; She imagined having different
                tones for different contexts.
              </p>

              <div className="bg-[#f7fafc] border-l-4 border-[#667eea] p-6 rounded">
                <p className="font-medium italic">
                  &quot;Automation is something I consider first, but I need to
                  trust Blueberry first and see what it does.&quot; -
                  Participant 4
                </p>
              </div>

              <p>
                The scariest feature for users was full automation. Testing
                revealed nuanced feelings. Users were open to it, but only after
                the AI proved itself. We added intentional friction with
                confirmation prompts. Transparency builds trust, not
                assumptions.
              </p>
            </section>

            <section id="brand-identity" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Brand Identity</h2>
                <h3 className="text-2xl font-bold">
                  Making Blueberry feel human
                </h3>
              </div>

              <p>
                After weeks working with Shadcn components, we hit a wall.
                Blueberry looked like every other B2B SaaS tool. Clean,
                functional, forgettable.
              </p>

              <p>
                The founders wanted Blueberry to feel friendly and approachable,
                not corporate. We explored references together: Duolingo&apos;s
                playfulness, Shopify&apos;s polish, Discord&apos;s casual vibe.
                We didn&apos;t want to go full cartoonish, but we also
                didn&apos;t want buttoned-up corporate.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl w-full h-auto border-1 border-[#EEF3F8]"
                  src="/blueberry/Branding/brand-discovery.png"
                  alt="Brand inspiration moodboard"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto border-1 border-[#EEF3F8]"
                  src="/blueberry/Branding/style-guide.png"
                  alt="Final Blueberry branding"
                  width={800}
                  height={600}
                />
              </div>

              <p>
                What emerged: bright, inviting colors that made the interface
                feel warm. Rounded edges everywhere to soften the experience.
                And most importantly, our mascot Bloo and blueberry iconography
                threaded throughout to reinforce personality.
              </p>
            </section>

            <section id="key-features" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Key Features</h2>
                <h3 className="text-2xl font-bold">What we built</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p>
                    <span className="font-bold">
                      Unified inbox with AI-assisted replies:
                    </span>{" "}
                    All comments from Instagram, Facebook, and TikTok in one
                    place. AI suggests on-brand responses based on guidelines
                    set during onboarding. Users review, edit, and send. Bulk
                    actions for efficiency.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Brand voice training and sandbox:
                    </span>{" "}
                    Upload brand documents, define tone, test AI responses in a
                    safe sandbox before going live. Progressive disclosure keeps
                    setup simple while offering depth for power users.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Automation with human oversight:
                    </span>{" "}
                    Set optional rules for when AI can auto-reply. Confirmation
                    prompts ensure users stay in control. AI learns from manual
                    edits over time.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Real-time moderation and prioritization:
                    </span>{" "}
                    Automatically flag negative comments, hide spam, surface
                    high-intent buyer signals. Prioritize ad comments that
                    impact revenue.
                  </p>
                </div>
              </div>

              <Carousel
                totalPages={16}
                imageBasePath="/blueberry/SlideDeck"
                imagePrefix="Demo Day Slide Deck"
                imageExtension="png"
              />
            </section>

            <section id="results" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Results</h2>
                <h3 className="text-2xl font-bold">The impact</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#667eea] mb-2">
                    6
                  </div>
                  <div className="text-sm text-[#718096]">
                    Testing iterations
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#667eea] mb-2">
                    72.5
                  </div>
                  <div className="text-sm text-[#718096]">
                    Average SUS score
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#667eea] mb-2">
                    7/7
                  </div>
                  <div className="text-sm text-[#718096]">
                    Final onboarding ease
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#e2e8f0] text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#667eea] mb-2">
                    60 → 80
                  </div>
                  <div className="text-sm text-[#718096]">
                    SUS score improvement
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    What the feedback revealed
                  </h4>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Trust took time, but we earned it:
                    </span>{" "}
                    &quot;Doesn&apos;t fully trust AI yet, but is open to
                    automation once he trusts Blueberry over time.&quot; Users
                    weren&apos;t rejecting AI. They were being cautious, which
                    was smart. Our job was to prove ourselves.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Clarity won over features:
                    </span>{" "}
                    Every time we simplified, scores improved. When we stripped
                    onboarding down to essentials, users said, &quot;Very
                    simple, less things to put in the better.&quot;
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">
                      Brand voice was the killer feature:
                    </span>{" "}
                    Participant 5 highlighted it as her favorite capability:
                    &quot;The ability to train AI based on the brand
                    voice.&quot; If we nailed this, everything else would
                    follow.
                  </p>
                </div>
              </div>
              {/* 

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/sus-score.jpg"
                  alt="Cocreate"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/user-quotes.jpg"
                  alt="Blueberry"
                  width={800}
                  height={600}
                />
              </div>
              */}
            </section>

            <section id="what-i-learned" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">What I Learned</h2>
                <h3 className="text-2xl font-bold">Key takeaways</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    AI accelerates, humans validate
                  </h4>
                  <p>
                    We used AI tools like V0 to generate first-pass prototypes
                    fast. But we never shipped without user testing. AI got us
                    70% there. The final 30% came from real people.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Designing for trust is designing for transparency
                  </h4>
                  <p>
                    Users didn&apos;t want a black box making decisions for
                    them. They wanted to see AI reasoning, edit outputs, and
                    gradually build confidence. Every design decision came back
                    to this: Can users predict what the AI will do? Can they
                    correct it? Do they feel in control?
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Less is genuinely more
                  </h4>
                  <p>
                    The best version of Blueberry wasn&apos;t the one with the
                    most features. It was the one that removed friction and got
                    users to value fastest. Every question we removed from
                    onboarding, every filter we simplified, every preset we
                    added made the product stronger.
                  </p>
                </div>
              </div>
              {/*
              <Image
                className="rounded-xl w-full h-auto"
                src="/blueberry/final-interface.jpg"
                alt="Final polished interface"
                width={800}
                height={600}
              />
               */}
            </section>

            <section id="next-steps" className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Next Steps</h2>
                <h3 className="text-2xl font-bold">Where we go from here</h3>
              </div>

              <div className="space-y-4">
                <p>
                  <span className="font-bold">Sequential rules system:</span>{" "}
                  Create a flow that naturally loops between setting guidelines
                  and testing automation. I&apos;d explore a node-based or
                  step-by-step approach that makes this connection clearer.
                </p>

                <p>
                  <span className="font-bold">DM functionality:</span> Multiple
                  users mentioned managing DMs as part of their workflow. The
                  inbox-to-DM flow could unlock new engagement and sales
                  opportunities.
                </p>

                <p>
                  <span className="font-bold">
                    Dashboard with real insights:
                  </span>{" "}
                  Surface actionable data like sentiment trends over time,
                  engagement spikes by post type, and buyer signals to act on.
                  Make the dashboard a strategic tool, not just a landing page.
                </p>
              </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/next-steps.png"
                  alt="Brand inspiration moodboard"
                  width={800}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto"
                  src="/blueberry/dm.png"
                  alt="Final Blueberry branding"
                  width={800}
                  height={600}
                />
              </div>

              <Image
                className="rounded-xl w-full h-auto border-1 border-[#BBBBBB]"
                src="/blueberry/dashboard.png"
                alt="Future roadmap"
                width={800}
                height={600}
              />
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm text-[#999999]">Final Thoughts</h2>
                <h3 className="text-2xl font-bold">Designing AI that amplifies humans</h3>
              </div>

              <p>
                Blueberry taught me that designing AI products isn&apos;t about
                making the technology impressive. It&apos;s about making users
                feel confident and in control.
              </p>

              <p>
                The best AI tools don&apos;t replace humans—they amplify them.
                Blueberry gave social teams superpowers: respond to everyone,
                protect their brand, capture sales opportunities, and still have
                time to focus on strategy.
              </p>

              <div className="bg-[#f7fafc] border-l-4 border-[#667eea] p-6 rounded">
                <p className="font-medium italic">
                  Users will tell you what they need if you create space to
                  listen. Every time we assumed we knew better, testing proved
                  us wrong. Every time we simplified based on feedback, the
                  product got stronger.
                </p>
              </div>

              <p>
                That shift from &quot;I don&apos;t trust AI&quot; to &quot;I
                could actually see myself using this&quot; was everything.
              </p>
            </section>
          </main>

          <div className="hidden lg:block col-span-2" />
        </div>
      </div>
    </div>
  );
}
