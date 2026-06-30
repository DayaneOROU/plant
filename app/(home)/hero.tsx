import AvatarStack from "@/components/avatar";
import Btn from "@/components/btn";
import { CirclePlay } from "lucide-react";

export default function Hero() {
  return (
    <div className="section-padding bg-back text-back2">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div className="flex flex-col gap-15">
            <h4 className="text-5xl font-semibold">
              Make Your Home <br /> a Sanctuary
            </h4>
            <p>
              Order beautiful quality live plants online for <br /> your home
              garden from Ugaoo and get it delivered <br /> safely to your
              doorstep.
            </p>
            <div className="flex items-center gap-8">
              <Btn text="GET STARTED" />
              <div className="flex items-center gap-2 ">
                <CirclePlay className="size-8 cursor-pointer transform hover:scale-130" />
                <p>WATCH VIDEO</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AvatarStack />
+-
              <div className="flex flex-col justify-center gap-1 text-xs">
                <p>Join our user club right now</p>
                <p className="font-medium ">We're waiting for you!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative w-full h-full min-h-87.5">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-back2"></div>
            <img
              src="heroplant.png"
              alt="picture"
              className="absolute -top-1/10 left-1/4 -translate-x-1/2 h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


