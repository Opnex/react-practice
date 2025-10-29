import { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import ExpenseStats from './components/ExpenseStats';
import ExpenseList from './components/ExpenseList';
import './components/ExpenseTracker.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingId, setEditingId] = useState(null);

  // Add new expense
  const addExpense = (newExpense) => {
    const expense = {
      id: Date.now(),
      ...newExpense,
      date: new Date().toISOString().split('T')[0]
    };
    setExpenses([...expenses, expense]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Update expense
  const updateExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, ...updatedExpense } : expense
    ));
    setEditingId(null);
  };

  // Filter expenses by category
  const filteredExpenses = selectedCategory === 'All' 
    ? expenses 
    : expenses.filter(expense => expense.category === selectedCategory);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <AddExpenseForm onAddExpense={addExpense} />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ExpenseStats expenses={expenses} />
        <ExpenseList 
          expenses={filteredExpenses}
          onDeleteExpense={deleteExpense}
          onUpdateExpense={updateExpense}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      </div>
    </div>
  );
}

export default App;