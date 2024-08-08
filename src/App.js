// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, purchaseItem } from "./amountSlice";

function App() {
  const balance = useSelector((state) => state.balance.value);
  const items = useSelector((state) => state.balance.items);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Shop Items</h1>
      <div>
        {items.map((item) => (
          <div key={item.name}>
            <button onClick={() => dispatch(purchaseItem(item.name))}>
              Buy {item.name} for ${item.cost}
            </button>
          </div>
        ))}
      </div>
      <h2>Your Balance: ${balance}</h2>
      <button onClick={() => dispatch(deposit(100))}>Deposit $100</button>
      <button onClick={() => dispatch(withdraw(100))}>Withdraw $100</button>
    </div>
  );
}

export default App;
