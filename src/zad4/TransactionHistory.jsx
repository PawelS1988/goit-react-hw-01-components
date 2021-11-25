import React from "react";
import "./transactions.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className="transaction-history">
        <thead className="table-head">
          <tr className="table-head-row">
            <th className="table-head-top">TYPE</th>
            <th className="table-head-top">AMOUNT</th>
            <th className="table-head-top">CURRENCY</th>
          </tr>
        </thead>

        <tbody className="table-body">
          <TransactionItem items={items} />
        </tbody>
      </table>
    </div>
  );
};

const TransactionItem = ({ items }) => {
  return items.map(({ type, amount, currency, id }) => (
    <tr className="table-body-row" key={id}>
      <td className="table-body-item">{type}</td>
      <td className="table-body-item">{amount}</td>
      <td className="table-body-item">{currency}</td>
    </tr>
  ));
};

export default TransactionHistory;
