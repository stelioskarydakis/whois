import "./accordion.css";
import AccordionCards from "../../components/accordionCards/AccordionCards";
import { questionsFaq } from "../../data";
import { useState } from "react";

const Accordion = () => {
  const [questions, setQuestions] = useState(questionsFaq);
  return (
    <section className="about-section">
      <div className="about-section__text">
        <h2>
          What they usually ask <span>Stylianos</span>
        </h2>
      </div>
      <div className="about-section__accordion">
        {questions.map((question) => {
          return (
            <AccordionCards key={question.id} {...question}></AccordionCards>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
