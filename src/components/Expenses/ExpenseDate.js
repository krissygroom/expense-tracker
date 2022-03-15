import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const dd = date.toLocaleString("en-US", { day: "2-digit" });
  const mm = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-item__date">
      <div className="expense-item__date-month">{mm}</div>
      <div className="expense-item__date-year">{year}</div>
      <div className="expense-item__date-day">{dd}</div>
    </div>
  );
};

export default ExpenseDate;
