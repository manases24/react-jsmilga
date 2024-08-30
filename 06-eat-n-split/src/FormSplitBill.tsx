import React, { useState } from "react";
import { FormSplitBillProps } from "./types";
import { Button } from "./Button";

export const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState<string>("");
  const [paidByUser, setPaidByUser] = useState<string>("");
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  // Convert string to number safely
  const billValue = parseFloat(bill);
  const paidByUserValue = parseFloat(paidByUser);
  const paidByFriend = !isNaN(billValue) ? billValue - paidByUserValue : 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Ensure valid number values
    if (isNaN(billValue) || isNaN(paidByUserValue)) return;

    // Handle split bill calculation
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUserValue);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(e.target.value)}
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled
        value={isNaN(paidByFriend) ? "" : paidByFriend}
      />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
