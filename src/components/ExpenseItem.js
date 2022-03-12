import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth()).padStart(2, "0");
  const yyyy = date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-item__date">{mm + "/" + dd + "/" + yyyy}</div>
      <div className="expense-item__description">
        <h2> - {title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
