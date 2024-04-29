import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionTable}>
  <thead>
    <tr  className={css.transTr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map( (item) => {
        return (
            <tr key={item.id}>
               <td>{item.type}</td>
               <td>{item.amount}</td>
               <td>{item.currency}</td>
             </tr>
        );
    } 
    )}
    
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> 
    )
}

export default TransactionHistory;