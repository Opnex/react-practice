function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Food', 'Education', 'Transport', 'Entertainment', 'Bills'];
  
  const getCategoryColor = (category) => {
    const colors = {
      All: '#6B7280',
      Food: '#EF4444',
      Transport: '#3B82F6', 
      Bills: '#10B981',
      Entertainment: '#8B5CF6',
      Others: '#F59E0B'
    };
    return colors[category] || '#6B7280';
  };

  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`filter-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
            style={{
              backgroundColor: selectedCategory === category 
                ? getCategoryColor(category) 
                : 'white',
              borderColor: getCategoryColor(category),
              color: selectedCategory === category ? 'white' : getCategoryColor(category)
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;