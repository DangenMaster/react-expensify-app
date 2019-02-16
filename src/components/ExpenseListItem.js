import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ amount, createdAt, description, id }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>
        {description}
      </Link>
    </h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;