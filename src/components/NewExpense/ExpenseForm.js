import React from "react";
import "./ExpenseForm.css";
import MoneyImage from "./Images/money.png";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__form">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" placeholder="Enter expense description" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Enter expense amount"
            />
          </div>
          <div className="new-expense__control date">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
          </div>
        </div>
      </div>
      <div className="new-expense__photo">
        <img src={MoneyImage} alt={"Piggy Bank"} />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
