import React from "react";
import AvatarStack from "@/components/avatar";
import Btn from "@/components/btn";
import { CirclePlay, LeafIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="section-padding mt-10 bg-back text-back2">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Make Your Home <br className="hidden md:block" /> a Sanctuary
            </h4>
            <p className="text-sm md:text-base">
              Order beautiful quality live plants online for{" "}
              <br className="hidden md:block" /> your home garden from Ugaoo and
              get it delivered <br className="hidden md:block" /> safely to your
              doorstep.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <Btn text="GET STARTED" />
              <div className="flex items-center gap-2">
                <CirclePlay className="size-6 md:size-8 cursor-pointer transform hover:scale-130" />
                <p className="text-sm md:text-base">WATCH VIDEO</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <AvatarStack />
              <div className="flex gap-4">
                <Arrow8 className="size-20 mx-8 rotate-45" />
                <div className="flex flex-col justify-center gap-1 text-xs">
                  <p>Join our user club right now</p>
                  <p className="font-medium">We're waiting for you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 w-full flex justify-center items-center px-4 mt-15 lg:px-0">
          <div className="relative w-full mb-15 max-w-xs sm:max-w-sm lg:max-w-none h-72 sm:h-96 lg:h-full lg:min-h-87.5 mx-auto">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-back2"></div>

            <img
              src="heroplant.png"
              alt="picture"
              className="absolute -top-1/10 left-1/2 -translate-x-1/2  h-[360px] lg:h-[500px]"
            />

            <Leaf
              title="Watering"
              subtitle="1 in 7 days"
              className="bottom-1/4 left-0 sm:-left-6 lg:-left-5 flex items-start gap-2 text-sm sm:text-base lg:text-xl"
            />
            <Leaf
              title="Sunlight"
              subtitle="4 to 5 hours"
              className="bottom-1/10 right-0 sm:right-6 lg:right-5 flex items-end gap-2 text-sm sm:text-base lg:text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Leaf(props: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={`absolute flex flex-col ${props.className}`}>
      <LeafIcon className="size-6" />
      <div>
        <p className="font-semibold">{props.title}</p>
        <p className="text-xs">{props.subtitle}</p>
      </div>
    </div>
  );
}

export type Arrow8Element = SVGSVGElement;
export type Arrow8Props = React.SVGAttributes<SVGSVGElement>;

const Arrow8 = React.forwardRef<Arrow8Element, Arrow8Props>(
  (props, forwardedRef) => (
    <svg
      width="144"
      height="141"
      viewBox="0 0 144 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.189 0.0490494C128.744 0.119441 126.422 0.377545 124.03 0.635648C114.719 1.6446 109.23 2.4893 108.058 3.09936C107.119 3.56864 106.674 4.34295 106.674 5.44576C106.674 6.71281 107.424 7.51058 109.043 7.97986C110.403 8.37875 110.825 8.42567 118.87 9.52847C121.778 9.92736 124.288 10.3028 124.475 10.3732C124.663 10.4436 122.951 11.1006 120.676 11.8749C110.028 15.4414 100.412 20.7677 91.7339 27.9242C88.38 30.7164 81.6957 37.4271 79.2096 40.5009C73.8387 47.2116 69.6874 54.8139 66.5681 63.7302C65.9348 65.4665 65.3484 66.8978 65.2546 66.8978C65.1374 66.8978 63.7771 66.7336 62.2291 66.5693C52.9649 65.5134 43.1847 68.1649 34.1316 74.2186C24.7735 80.46 18.5349 87.7338 10.5371 101.742C2.53943 115.726 -1.0959 127.482 0.287874 135.014C0.89767 138.463 2.0469 140.035 3.97011 140.082C5.28352 140.105 5.37733 139.659 4.20465 139.049C3.05541 138.463 2.6567 137.9 2.32835 136.281C0.616228 128.021 6.24512 113.028 17.4325 96.1104C23.2725 87.241 28.362 81.9147 35.5622 77.1046C43.8649 71.5437 52.7069 69.033 61.1737 69.8308C64.9967 70.1828 64.6917 69.9247 64.1992 72.4822C62.2525 82.5013 63.8005 92.6378 67.9753 97.354C73.1116 103.079 81.9771 102 85.0027 95.2657C86.3395 92.2858 86.3864 87.7103 85.1434 83.9796C83.1498 78.0901 80.007 73.8197 75.4335 70.8163C73.8152 69.7604 70.4848 68.1883 69.875 68.1883C69.359 68.1883 69.4294 67.6487 70.2268 65.3257C72.3377 59.2486 75.457 52.7021 78.4122 48.244C83.2436 40.9232 91.4524 32.5701 99.1687 27.103C105.806 22.4102 113.241 18.5386 120.512 16.0045C123.772 14.8548 129.87 13.1889 130.081 13.3766C130.128 13.447 129.541 14.362 128.791 15.4414C124.78 21.0258 122.716 26.0706 122.388 30.998C122.224 33.7198 122.341 34.588 122.88 34.2595C122.998 34.1891 123.678 32.969 124.405 31.5611C126.281 27.8069 131.722 20.6738 139.579 11.6402C141.127 9.85697 142.652 7.86254 143.027 7.08823C144.552 4.03792 143.52 1.48035 140.377 0.471397C139.439 0.166366 138.102 0.0490408 134.584 0.0255769C132.074 -0.021351 129.635 0.00212153 129.189 0.0490494ZM137.117 4.92955C137.187 5.0234 136.718 5.63346 136.061 6.29045L134.865 7.48712L131.042 6.73627C128.931 6.33739 126.727 5.9385 126.14 5.8681C124.827 5.68039 124.123 5.32843 124.968 5.28151C125.296 5.28151 126.868 5.11725 128.486 4.953C131.3 4.64797 136.812 4.62451 137.117 4.92955ZM71.5168 72.5292C76.2075 74.899 79.4441 78.8175 81.3204 84.355C83.6189 91.1361 81.2266 96.8378 76.0433 96.8847C73.3227 96.9082 70.9773 95.2188 69.5936 92.2389C68.2802 89.4232 67.6938 86.5606 67.5765 82.1259C67.4593 78.3248 67.6 76.4242 68.2333 72.7403L68.4912 71.2856L69.359 71.5906C69.8515 71.7548 70.8132 72.1772 71.5168 72.5292Z"
        fill="currentColor"
      />
    </svg>
  ),
);
Arrow8.displayName = "Arrow8";
