import "./reviews.css";
import ReviewCards from "../../components/reviewCards/ReviewCards";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>
        People talk about <span>Stylianos</span>
      </h2>

      <ReviewCards />
    </section>
  );
};

export default Reviews;
