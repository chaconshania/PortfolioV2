import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main className="flex flex-col p-6 w-full items-center gap-6">
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6  w-full">
          <div className="flex flex-col w-full gap-6">
            <h1 className="max-w-[600px] text-3xl lg:text-5xl ">
              <span className="font-bold">Shania</span> is a product designer
              who codes, turning sketches into shipped products.
              <span className="italic font-thin"></span>{" "}
            </h1>
            <p className="max-w-[600px] text-base">
              Currently designing @ Blueberry Social
            </p>
            <hr />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {/* Columns */}
            <div className="flex flex-col gap-6">
              {/*Projects*/}
              <Link href="/blueberry">
                <div className="flex flex-col gap-1  transition-colors duration-300 ease-in-out group relative rounded-lg overflow-hidden">
                  <Image
                    src="/blueberry/Inbox.png"
                    className="rounded-lg w-full h-auto"
                    alt="Blueberry dashboard"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span>
                  </div>
                  <h3 className="max-w-[600px] text-md">
                    Turning chaotic social chatter into warm, on-brand
                    conversations automatically
                  </h3>
                  <h4 className="text-sm">BLUEBERRY SOCIAL • SHIPPED 2025</h4>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {/*Projects*/}
              <Link href="/artoftheroll">
                <div className="flex flex-col gap-1  transition-colors duration-300 ease-in-out group relative rounded-lg overflow-hidden">
                  <Image
                    src="/artoftheroll/cover.png"
                    alt="Art of the roll"
                    className="rounded-lg w-full h-auto"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-2 left-2 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white text-sm px-4 py-2 rounded">
                      Product Design, Case Study
                    </span>
                  </div>
                  <h3 className="max-w-[600px] text-md ">
                    From mural walls to mobile feeds, I design the journeys
                    people remember.
                  </h3>
                  <h4 className="text-sm">ART OF THE ROLL • PENDING 2025</h4>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <footer className="flex flex-col p-6 w-full items-center gap-12"></footer>
      </main>
    </div>
  );
}
