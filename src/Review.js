import React, { useState } from "react";
import people from "./data";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const next = () => {
    setIndex((prev) => checkIndex((prev += 1)));
  };
  const previous = () => {
    setIndex((prev) => checkIndex((prev -= 1)));
  };
  const randomPage = () => {
    let newNumber = Math.floor(Math.random() * (people.length - 1)) + 1;
    if (newNumber === index) newNumber += 1;
    setIndex(() => checkIndex(newNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={previous}>
          PREVIOUS
        </button>
        <button className="next-btn" onClick={next}>
          NEXT
        </button>
      </div>
      <div>
        <button className="random-btn" onClick={randomPage}>
          suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
