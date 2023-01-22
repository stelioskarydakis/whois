import SlideCard from "../../components/slideCard/SlideCard";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text">
        <h1>
          hello, this is <span>Stylianos</span>
        </h1>
      </div>
      <div className="hero-section__slider">
        <SlideCard />
      </div>
    </section>
  );
};

export default Hero;
