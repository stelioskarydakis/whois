import { useState } from "react";
import { interestedin } from "../../data";
import "./tabsCards.css";
import { TbHandRock } from "react-icons/tb";

const TabsCards = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { id, title, description, knowlegde } = interestedin[activeTab];

  return (
    <div className="tabsCards-section">
      <div className="buttons-container">
        {interestedin.map((item, index) => {
          return (
            <div
              className={
                activeTab === index
                  ? "buttons-container__btn activetab"
                  : "buttons-container__btn"
              }
              key={item.id}
            >
              <button onClick={() => setActiveTab(index)}>{item.title}</button>
            </div>
          );
        })}
      </div>

      <div className="tabs-section_container" key={id}>
        <h3>{title}</h3>
        <h4>({knowlegde})</h4>
        <div className="description">
          <div className="tabicon">
            <TbHandRock />
          </div>
          <h4 className="description__text">{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default TabsCards;
