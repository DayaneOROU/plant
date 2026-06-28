import Link from "./link";
export default function Footer() {
  return (
    <>
      <footer className="bg-back text-gray-50 ">
        <div className="section-padding  ">
          <div className="grid grid-cols-4 font-medium">
            <div className="flex flex-col gap-10">
              <div className="flex items-center ">
                <h2 className=" font-light text-3xl tracking-wide text-white flex items-center gap-1 select-none">
                  plant
                  <span className="w-10 h-10 bg-[#E07A5F] text-white text-4xl font-medium rounded-full flex items-center justify-center ml-0.5">
                    s
                  </span>
                </h2>
              </div>
              <p>
                Order beautiful premium quality <br />
                live plants online four your home <br />
                garden from Ugaoo
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.22 1.32 2.97 2.07 4.75 2.13v3.87c-1.39-.07-2.74-.51-3.91-1.3-.67-.47-1.24-1.07-1.68-1.77v6.32c.03 2.15-.65 4.31-2.02 5.92-1.8 2.05-4.57 3.07-7.27 2.68-2.52-.33-4.8-1.92-5.96-4.18-1.52-2.83-1.12-6.52 1.01-8.89 1.7-1.89 4.3-2.73 6.82-2.2v3.91c-1.15-.22-2.37.12-3.18.96-.86.91-1.04 2.32-.45 3.42.53.98 1.62 1.6 2.73 1.55 1.48-.02 2.71-1.25 2.73-2.73l-.03-13.62Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                      className="fill-current stroke-0"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="flex flex-col gap-6">
                <Title nom="MENU" />
                <ul className="flex flex-col gap-6">
                  <Link name="Gallery" lien="#" />
                  <Link name="Categorie" lien="#" />
                  <Link name="Best offer" lien="#" />
                  <Link name="Promo" lien="#" />
                </ul>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-6">
                <Title nom="FAQ" />
                <ul className="flex flex-col gap-6">
                  <Link name="Payement" lien="" />
                  <Link name="Order" lien="" />
                  <Link name="Manange Delivery" lien="" />
                  <Link name="Contact us" lien="#" />
                </ul>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-6">
                <Title nom="SUPPORT" />
                <ul className="flex flex-col gap-6">
                  <Link name="Call of delivery" lien="#" />
                  <Link name="Online chat" lien="#" />
                  <Link name="Call center" lien="#" />
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-full h-px bg-gray-400 my-6  "></div>
          </div>

          <div className="flex flex-col justify-between items-center lg:flex-row md:gap-10 text-xs">
            <div>2022 @ All rights reserved. design by Nur</div>
            <div>
              <ul className="flex justify-end items-center gap-6">
                <Link name="Terms & Conditions" lien="" />
                <Link name="Privacy Policy" lien="" />
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Title(props: { nom: string }) {
  return (
    <>
      <h4 className="text-xl font-semibold ">{props.nom}</h4>
    </>
  );
}
