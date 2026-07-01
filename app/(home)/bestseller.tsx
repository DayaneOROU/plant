import { plant } from "@/data/plant";
import { MoveRightIcon } from "lucide-react";

export default function Bestseller() {
  return (
    <> <div id="shop"></div>
      <div className="section-padding bg-back text-gray-50">
        <div>
          <div className="flex justify-between mb-15 ">
            <h3 className="text-3xl font-semibold">Here are the best seller</h3>
            <div className="flex items-center  gap-5">
              <p>SHOP ALL PLANTS</p>
              <MoveRightIcon
                strokeWidth={1.5}
                className="size-4 rounded-2xl border border-gray-50 w-7 h-7 p-1"
              />
            </div>
          </div>
          <div className="flex justify-between  overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar">
            {plant.map((plant) => (
              <div key={plant.id} className="w-75 mx-5">
                <div className="w-full snap-start  mr-3 mb-5 space-y-2 inline-block">
                  <img
                    src={plant.img}
                    alt="Plant"
                    className="w-full object-cover aspect-9/11 rounded-2xl bg-white transition transform hover:scale-105 "
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h4 className="font-medium">{plant.plant}</h4>

                  <button className="bg-back2 rounded-2xl w-37 py-1  text-back font-medium transition transform hover:scale-105">
                    BUR NOW {plant.prix}$
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
