import React from "react";

export default function Learn() {
  return (
    <>
      <div className="section-padding flex justify-center items-center bg-back2 text-back text-3xl/15 text-center font-semibold">
        <div>
          Learn how we take care
          <span>
            <PlantIcon />
          </span>
          of your plant <br />
          at every stage
          <span>
            <LeafIcon />
          </span>
          of its journey
          <span>
            <PlantIcon />
          </span>
          from our
          <br />
          greenhouse
          <span>
            <SpiralIcon />
          </span>
          to your home
          <span>
            <LeafIcon />
          </span>
        </div>
      </div>
    </>
  );
}

const SpiralIcon = () => (
  <svg
    className="inline-block w-6 h-6 mx-1 align-middle text-[#706261]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M12 12c.5-1 1.5-1 2 0s0 2.5-1.5 3-3-1-3-3 1.5-4.5 4-4.5 5.5 2.5 5.5 6-3 7-7 7-8-4-8-8.5" />
  </svg>
);

const PlantIcon = () => (
  <svg
    className="inline-block w-7 h-5 mx-1 align-middle text-[#5F6F52]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M12 22V10M12 10C12 10 7 7 4 12M12 10C12 10 17 7 20 12M12 14C12 14 8 12 5 17M12 14C12 14 16 12 19 17" />
  </svg>
);

const LeafIcon = () => (
  <svg
    className="inline-block w-6 h-6 mx-1 align-middle text-[#C97A53]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.66 0 3 1.34 3 3v1.78c.89.4 1.5 1.29 1.5 2.32 0 .54-.17 1.04-.46 1.46z" />
  </svg>
);
