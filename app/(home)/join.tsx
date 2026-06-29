export default function Join() {
  return (
    <>
      <div id="#join"></div>
      <div className="section-padding bg-back3">
        <div className="flex flex-col justify-between items-center gap-10">
          <h3 className="text-back text-3xl font-semibold text-center">
            Join The Plant Family For Order <br />
            Care Tips, And More
          </h3>
          <div className="bg-gray-50 h-12 flex justify-center items-center  rounded-lg border border-solid border-black shadow-[4px_4px_rgb(0,0,0)] ">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Entrer your email"
              className="h-full w-60 p-3 text-xs focus:outline-none focus:ring-0 text-black "
            />
            <button
              type="submit"
              className="bg-btn h-full w-35 rounded-lg font-semibold border border-solid  border-black"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
