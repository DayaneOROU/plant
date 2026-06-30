import Assemble from "./(home)/assemble";
import Avis from "./(home)/avis";
import Bestseller from "./(home)/bestseller";
import Hero from "./(home)/hero";
import Join from "./(home)/join";
import Learn from "./(home)/learn";
import Question from "./(home)/question";
import Slider from "./(home)/slider";

export default function Home() {
  return (
    <>
      <Hero />
      <Learn />
      <Bestseller />
      <Avis />
      <Slider />
      <Assemble />
      <Question />
      <Join />
    </>
  );
}
