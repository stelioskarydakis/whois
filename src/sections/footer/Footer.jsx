import { useState, useEffect } from "react";
import { descriptions } from "../../data";
import "./footer.css";

const Footer = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setActive((oldIndex) => {
        let index = oldIndex + 1;
        if (index > descriptions.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [active]);

  return (
    <div className="footer-section">
      <h2 className="footer-section__title">
        <div className="leftpiece">
          <span>Stylianos</span> is
        </div>
        <div className="rightpiece">
          {descriptions.map((item, index) => {
            return (
              <strong
                className={active === index ? "activeText whatis" : "whatis"}
                key={item}
              >
                {item}
              </strong>
            );
          })}
        </div>
      </h2>
      <h3>
        Be like Stylianos and hire him
        <a href="mailto:mrkarydakis@gmail.com">mrkarydakis@gmail.com</a>
      </h3>

      <div className="copy">
        Copyright &copy; {new Date().getFullYear()} Stylianos Portfolio
      </div>
    </div>
  );
};

export default Footer;
