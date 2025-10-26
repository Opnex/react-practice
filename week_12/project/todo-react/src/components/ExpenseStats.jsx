function ExpenseStats({ expenses }) {
  // Calculate statistics
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalExpenses = expenses.length;
  const highestExpense = expenses.length > 0 
    ? Math.max(...expenses.map(expense => expense.amount))
    : 0;

  // Calculate breakdown by category
  const categoryBreakdown = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Format currency in Nigerian Naira
  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString('en-NG')}`;
  };

  return (
    <div className="expense-stats">
      <h3> Expense Statistics</h3>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Spent</h4>
          <p className="stat-amount">{formatCurrency(totalAmount)}</p>
        </div>
        
        <div className="stat-card">
          <h4>Number of Expenses</h4>
          <p className="stat-amount">{totalExpenses}</p>
        </div>
        
        <div className="stat-card">
          <h4>Highest Expense</h4>
          <p className="stat-amount">{formatCurrency(highestExpense)}</p>
        </div>
      </div>

      {/* Category Breakdown */}
      {Object.keys(categoryBreakdown).length > 0 && (
        <div className="category-breakdown">
          <h4>Spending by Category</h4>
          <div className="breakdown-list">
            {Object.entries(categoryBreakdown).map(([category, amount]) => (
              <div key={category} className="breakdown-item">
                <span className="category-name">{category}</span>
                <span className="category-amount">
                  {formatCurrency(amount)}
                </span>
                <div className="percentage-bar">
                  <div 
                    className="percentage-fill"
                    style={{
                      width: `${(amount / totalAmount) * 100}%`,
                      backgroundColor: getCategoryColor(category)
                    }}
                  ></div>
                </div>
                <span className="percentage-text">
                  {((amount / totalAmount) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function for category colors (same as in CategoryFilter)
const getCategoryColor = (category) => {
  const colors = {
    Food: '#EF4444',
    Transport: '#3B82F6', 
    Bills: '#10B981',
    Entertainment: '#8B5CF6',
    Others: '#F59E0B'
  };
  return colors[category] || '#6B7280';
};

export default ExpenseStats;