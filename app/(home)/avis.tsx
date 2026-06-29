import { avis } from "@/data/avis";
import { Quote } from "lucide-react";

export default function Avis() {
  return (
    <>
      <div className="section-padding pb-15 bg-back2 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar">
        {avis.map((avis) => (
          <div
            key={avis.id}
            className="grid grid-cols-2 text-back w-full min-w-full shrink snap-start  mr-15"
          >
            <div className="flex justify-center items-center ">
              <div>
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
    </>
  );
}
