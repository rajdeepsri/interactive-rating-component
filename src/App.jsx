import { useState } from "react";
import iconStar from "./images/icon-star.svg";
import thanks from "./images/thank-you.svg";

const Rating = ({ num, selectedRating, setSelectedRating }) => {
  return (
    <div
      onClick={() => setSelectedRating(num)}
      className={`ratingBtn ${
        selectedRating === num ? "ratingBtnSelected" : ""
      }`}
    >
      <p>{num}</p>
    </div>
  );
};

const App = () => {
  const [showRating, setShowRating] = useState(true);
  const [selectedRating, setSelectedRating] = useState(null);
  return showRating ? (
    <RatingCard
      setShowRating={setShowRating}
      selectedRating={selectedRating}
      setSelectedRating={setSelectedRating}
    />
  ) : (
    <ThankYou selectedRating={selectedRating} />
  );
};

const RatingCard = ({ setShowRating, selectedRating, setSelectedRating }) => {
  return (
    <main className="card">
      <div className="star-icon">
        <img src={iconStar} alt="star" />
      </div>
      <div>
        <h1 className="title">How did we do well it workssssss4645?</h1>
        <p className="desc">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="buttons">
        <Rating
          num="1"
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <Rating
          num="2"
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <Rating
          num="3"
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <Rating
          num="4"
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <Rating
          num="5"
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </div>
      <button
        className="submit-btn"
        onClick={() => selectedRating && setShowRating(false)}
      >
        SUBMIT
      </button>
    </main>
  );
};

const ThankYou = ({ selectedRating }) => {
  return (
    <main className="card thankyou-card">
      <img src={thanks} alt="thankYou" />
      <p className="selected-text">You selected {selectedRating} out of 5</p>
      <div className="text-div">
        <h1 className="title">Thank you!</h1>
        <p className="desc">
          We appreciate you taking time to give a rating. If you ever need more
          support, don't hesitate to get in touch!
        </p>
      </div>
    </main>
  );
};

export default App;
