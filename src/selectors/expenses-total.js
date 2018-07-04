export default (expenses) => {
    let totalAmount = 0;
    expenses.map((expense) => 
        totalAmount += expense.amount
    )
    return totalAmount
}