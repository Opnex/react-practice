// components/ExpenseList.jsx
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense, onUpdateExpense, editingId, setEditingId }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list">
        <h3>Your Expenses</h3>
        <p className="no-expenses">No expenses yet. Add your first expense above!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h3>Your Expenses ({expenses.length})</h3>
      <div className="expenses-container">
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDeleteExpense}
            onUpdate={onUpdateExpense}
            isEditing={editingId === expense.id}
            setEditingId={setEditingId}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;