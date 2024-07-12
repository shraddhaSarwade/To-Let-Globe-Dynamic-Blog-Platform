import React from "react";
import "./DateCategory.css";

function DateCategory({ date, category }) {
  //Extracting the date in correct format
  function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  const dateObject = new Date(date);
  const formattedDate = formatDate(dateObject);

  //JSX
  return (
    <div>
      <span id="date">{formattedDate} </span>
      <span id="category">
        <a href="#">{category}</a>
      </span>
    </div>
  );
}

export default DateCategory;
