import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(1);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  function swap() {
    setFrom(to);
    setConvertedAmount(amount);
    setTo(from);
    setAmount(convertedAmount);
  }
  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  const [convertedAmount, setConvertedAmount] = useState(85.69706558);

  return (
    <div
      className="flex w-[100vw] overflow-hidden justify-center items-center lg:bg-cover lg:bg-center  h-screen"
      style={{ backgroundImage: "url('/d.jpg')" }}
    >
      <div className="w-fit bg-white/20 backdrop-blur-[4px] rounded-xl p-8 shadow-lg border border-white/30 flex justify-center flex-col gap-6  relative items-stretch max-w-sm md:max-w-md">
      <p className="font-bold text-black text-2xl md:text-4xl self-center">Currency Converter</p>
        <Input
          label="from"
          amount={amount}
          currencyOption={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button
          onClick={swap}
          className="!bg-blue-600 hover:!bg-blue-500 text-white py-1 px-4 rounded mx-auto"
        >
          SWAP
        </button>
        <Input
          label="to"
          amount={convertedAmount}
          currencyOption={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
        />
        <button
          onClick={convert}
          className="!bg-blue-600 hover:!bg-blue-500 m-5 text-white"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
