import { avis } from "@/data/avis";
import { Quote } from "lucide-react";

export default function Avis() {
  return (
    <>
      <div className="relative section-padding  bg-back2 ">
        <div className="relative flex overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar" >

        {avis.map((avis) => (
          <div
            key={avis.id}
            className="relative grid grid-cols-1 lg:grid-cols-2 text-back w-full min-w-full lg:min-w-[1000] snap-start mr-20  z-30"
          >
            <div className="flex justify-start lg:justify-center  items-center ">
              <div className="">
                <img
                  src={avis.img}
                  alt="picture"
                  className="w-75 h-75 rounded-[50%] border-4 border-solid border-back3"
                />
              </div>
            </div>
            <div>
              <p className="text-back3 text-8xl">
                <Quote />
              </p>

              <p className="text-lg font-medium mb-7 ">{avis.avis}</p>

              <h4 className="text-xl font-semibold mb-2">{avis.nom}</h4>
              <p className="text-xs font-medium mb-6">{avis.proffesieon}</p>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#dcc7a2]"></div>
                <div className="w-3 h-3 bg-btn"></div>
                <div className="w-3 h-3 bg-[#dcc7a2]"></div>
              </div>
            </div>
          </div>
        ))}
        </div>

         <img
              src="p3.png"
              alt="join"
              className="absolute w-50 h-50 bottom-0 right-0"
            />
      </div>
    </>
  );
}
