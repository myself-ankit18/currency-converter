import React from "react";
import useInfo from "../hooks/useInfo";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
}) {
  const data = useInfo();
  const keys = Object.keys(data);
  const currencyArray = Object.entries(data).map(([code, { name, symbol }]) => ({
  code,
  name,
  symbol,
}));
  return (
    <div className="!bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor="" className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          value={amount}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val >= 0) {
              onAmountChange && onAmountChange(val);
            }
          }}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-black"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          size={2}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black truncate w-full max-w-sm text-sm"
        >
          {currencyOption.map((currency) => {
            const matched = currencyArray.find(
              (code) => code.symbol === currency.toUpperCase()
            );
            const fullName = matched ? matched.name : "";

            return (
              <option className="" key={currency} value={currency}>
                {fullName} {currency.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
