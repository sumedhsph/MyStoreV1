import React, { useState } from "react";
import { formatPrice } from "../utils/customFetch";

function FormRange({ label, name, className, price, ...props }) {
  const step = 100;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer w-full">
        <span className="label-text capitalize">{label}</span>
        {/* <span className="w-full">{formatPrice(selectedPrice)}</span> */}
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-warning ${className}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">
          Max : {formatPrice(selectedPrice)}
        </span>
      </div>
    </div>
  );
}

export default FormRange;
