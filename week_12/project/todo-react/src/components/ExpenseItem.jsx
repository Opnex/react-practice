import { useState } from 'react';

function ExpenseItem({ expense, onDelete, onUpdate, isEditing, setEditingId }) {
  const [editDescription, setEditDescription] = useState(expense.description);
  const [editAmount, setEditAmount] = useState(expense.amount.toString());

  const handleSave = () => {
    const amountNum = parseFloat(editAmount);
    if (!editDescription.trim() || !amountNum || amountNum <= 0) {
      alert('Please enter valid description and amount');
      return;
    }

    onUpdate(expense.id, {
      description: editDescription.trim(),
      amount: amountNum
    });
  };

  const handleCancel = () => {
    setEditDescription(expense.description);
    setEditAmount(expense.amount.toString());
    setEditingId(null);
  };

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString('en-NG')}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-NG');
  };

  if (isEditing) {
    return (
      <div className="expense-item editing" style={{ borderLeftColor: getCategoryColor(expense.category) }}>
        <div className="edit-form">
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="edit-input"
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
            className="edit-input"
            min="1"
          />
          <span className="expense-category">{expense.category}</span>
          <span className="expense-date">{formatDate(expense.date)}</span>
        </div>
        <div className="expense-actions">
          <button onClick={handleSave} className="btn-save"> Save</button>
          <button onClick={handleCancel} className="btn-cancel">❌ Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-item" style={{ borderLeftColor: getCategoryColor(expense.category) }}>
      <div className="expense-content">
        <div className="expense-main">
          <span className="expense-description">{expense.description}</span>
          <span className="expense-amount">{formatCurrency(expense.amount)}</span>
        </div>
        <div className="expense-meta">
          <span className="expense-category">{expense.category}</span>
          <span className="expense-date">{formatDate(expense.date)}</span>
        </div>
      </div>
      <div className="expense-actions">
        <button 
          onClick={() => setEditingId(expense.id)} 
          className="btn-edit"
        >
           Edit
        </button>
        <button 
          onClick={() => onDelete(expense.id)} 
          className="btn-delete"
        >
         Delete
        </button>
      </div>
    </div>
  );
}

// Helper function for category colors
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

export default ExpenseItem;