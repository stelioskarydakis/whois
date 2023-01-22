import "./tabs.css";
import TabsCards from "../../components/tabsCards/TabsCards";

const Tabs = () => {
  return (
    <section className="tabs-section">
      <div className="tabs-section__text">
        <h2>
          This is what <span>Stylianos</span> loves
        </h2>
      </div>
      <div className="tabs-section__content">
        <TabsCards />
      </div>
    </section>
  );
};

export default Tabs;
