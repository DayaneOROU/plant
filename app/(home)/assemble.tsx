import AvatarStack from "@/components/avatar";
import Btn from "@/components/btn";

export default function Assemble() {
  return (
    <div className="section-padding bg-back2 text-back">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-2">
          <img src="plant.png" alt="Assemble" className=" h-85 w-75" />
          <div className="flex flex-col items-center gap-2">
            <h5 className="font-semibold text-xl">Castomar Satisfied</h5>
            <p className="text-sm ">Based on 1500 reiews</p>
            <div className="flex items-center justify-center">
              <AvatarStack />

            </div>
          </div>
        </div>
        <div className="font-medium ">
          <div className="flex flex-col  justify-center gap-8">
            <div className="flex flex-col  justify-center gap-4 ml-7">
              <h3 className="font-semibold text-4xl">
                Assemble Your Own Unique Plant
              </h3>
              <p className="text-lg">
                Get customized flloral arrangements based on your preferences
                regularly
              </p>
              <li>Get exclisive and floral offers </li>
              <li>get your unicque plant every week </li>
              <li>latest news from the world of plents</li>
              <li>Save 15% on your order by subscribing</li>
              <li>Regular updates on new plants</li>
            </div>
            <Btn text="TELL ME MORE" />
          </div>
        </div>
      </div>
    </div>
  );
}
