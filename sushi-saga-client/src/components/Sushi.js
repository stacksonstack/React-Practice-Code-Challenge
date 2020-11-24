import React, { useState } from "react";

const Sushi = ({ sushi, setBudget, isBudgetAboveZero }) => {
  let [isSold, setSold] = useState(false);

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          if (isBudgetAboveZero(sushi.price) && isSold === false) {
            setSold(true);
            setBudget(sushi.price);
          }
        }}
      >
        {isSold ? null : (
          <img alt={sushi.name} src={sushi.img_url} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
