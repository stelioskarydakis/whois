import "./accordionCard.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const AccordionCards = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{answer}</p>}
    </div>
  );
};

export default AccordionCards;
