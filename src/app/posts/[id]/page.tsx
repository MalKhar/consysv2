"use client";
import Image from "next/image";

export default function PostDescription() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header>
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          The Water Cycle
        </h1>
        <p className="text-white text-lg text-white text-center mb-8">
          Learn about the continuous movement of water within the Earth and
          atmosphere.
        </p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            What is the Water Cycle?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="https://placeholder.co/400x300"
              alt="Overview of the water cycle"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="text-white flex-1">
              The water cycle, also known as the hydrologic cycle, describes the
              continuous movement of water within the Earth and atmosphere. It
              is a complex system that includes many different processes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            1. Evaporation
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <Image
              src="https://placeholder.co/250x350"
              alt="Evaporation process"
              width={350}
              height={250}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="text-white mb-4">
                Evaporation is the process by which water changes from a liquid
                to a gas or vapor. Water evaporates from surfaces like oceans,
                lakes, and rivers when heated by the sun.
              </p>
              <ul className="text-white list-disc list-inside">
                <li>Heat from the sun causes water to evaporate</li>
                <li>Water vapor rises into the atmosphere</li>
                <li>Evaporation purifies water, leaving contaminants behind</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            2. Condensation
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="https://placeholder.co/250x350"
              alt="Condensation process"
              width={350}
              height={250}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="text-white mb-4">
                Condensation occurs when water vapor in the air cools down and
                turns back into liquid water. This process forms clouds and fog.
              </p>
              <ul className="text-white list-disc list-inside">
                <li>Water vapor rises and cools in the atmosphere</li>
                <li>Cooled water vapor condenses into tiny water droplets</li>
                <li>These droplets form clouds and fog</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            3. Precipitation
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <Image
              src="https://placeholder.co/250x350"
              alt="Precipitation process"
              width={350}
              height={250}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="text-white text-white mb-4">
                Precipitation is any form of water that falls from clouds and
                reaches the ground. This includes rain, snow, sleet, and hail.
              </p>
              <ul className="text-white text-gray-400 list-disc list-inside">
                <li>
                  Water droplets in clouds become too heavy to remain suspended
                </li>
                <li>Gravity pulls the water down as precipitation</li>
                <li>
                  The form of precipitation depends on atmospheric conditions
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            4. Collection
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="https://placeholder.co/250x350"
              alt="Collection process"
              width={350}
              height={250}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="text-white mb-4">
                Collection is the process where water that falls as
                precipitation is collected in various bodies of water or seeps
                into the ground.
              </p>
              <ul className="text-white list-disc list-inside">
                <li>Water collects in oceans, lakes, and rivers</li>
                <li>Some water seeps into the ground, becoming groundwater</li>
                <li>Plants absorb water from the soil</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>
          Learn more about the water cycle and its importance to our planet's
          ecosystem.
        </p>
      </footer>
    </div>
  );
}
