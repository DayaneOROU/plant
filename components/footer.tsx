import Link from "./link";
import Logo from "./Logo";
import { Tiktok, Instagram, Youtube, X, Alink } from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <footer className="bg-back text-gray-50 ">
        <div className="section-padding  ">
          <div className="grid grid-cols-2 lg:grid-cols-4 font-medium">
            <div className="flex flex-col gap-10">
              <div className="">
                <Logo />
              </div>
              <p>
                Order beautiful premium quality <br />
                live plants online four your home <br />
                garden from Ugaoo
              </p>
              <div className="grid gap-4 lg:grid-cols-2">
                  <div className="flex gap-10">
                    <Alink balise={<Tiktok />} />
                    <Alink balise={<Instagram />} />
                  </div>
                  <div className="flex gap-10">
                    <Alink balise={<Youtube />} />
                    <Alink balise={<X />} />
                  </div>
                
              </div>
            </div>
            <div className="flex lg:justify-end m-15 lg:m-0">
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
            <div className="flex  lg:justify-end m-15 lg:m-0">
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
            <div className="flex lg:justify-end m-15 lg:m-0">
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
            <div>2022 @ All rights reserved. design by Dayane-Dev</div>
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
