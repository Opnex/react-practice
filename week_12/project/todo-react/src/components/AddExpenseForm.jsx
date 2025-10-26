import { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!description.trim()) {
      alert('Please enter a description');
      return;
    }
    
    const amountNum = parseFloat(amount);
    if (!amountNum || amountNum <= 0) {
      alert('Please enter a valid amount greater than 0');
      return;
    }

    // Add expense
    onAddExpense({
      description: description.trim(),
      amount: amountNum,
      category
    });

    // Reset form
    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <div className="form-grid">
        <input
          type="text"
          placeholder="E.g., Lunch at Mama Put"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
        
        <input
          type="number"
          placeholder="Amount in ₦"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
          min="1"
        />
        
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="form-select"
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
        
        <button type="submit" className="btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default AddExpenseForm;