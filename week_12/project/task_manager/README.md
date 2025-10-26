## **Part 2: Planning Your Project**

### **Before You Code: Plan First!**

**Step 1: List the Features**
- What can users do?
- What data needs to be stored?
- What components are needed?

**Step 2: Draw Component Structure**
```
App (main component)
├── Header
├── AddTaskForm
├── FilterButtons
├── TaskList
│   └── TaskItem (repeats for each task)
└── Statistics
```

**Step 3: Identify State**
- What data changes?
- Where should state live?
- Which components need to share data?

---








## **Part 3: Project Option 1 - Task Manager**

### **Features to Implement:**

1. **Add Tasks**
   - Input field for task name
   - Add button
   - Optional: Priority level (Low, Medium, High)

2. **Display Tasks**
   - List all tasks
   - Show task name and status
   - Different styling for completed/incomplete

3. **Task Actions**
   - Mark as complete/incomplete (toggle)
   - Delete task
   - Edit task name

4. **Filter Tasks**
   - Show All tasks
   - Show Active (incomplete) tasks
   - Show Completed tasks

5. **Statistics**
   - Total tasks count
   - Completed tasks count
   - Pending tasks count

### **Component Breakdown:**

```javascript
// App.jsx - Main component (holds state)
- tasks array state
- filter state
- Functions: addTask, deleteTask, toggleComplete, editTask

// Header.jsx
- App title
- Current date

// AddTaskForm.jsx
- Input field
- Add button
- Receives: onAddTask function

// FilterButtons.jsx
- Three buttons: All, Active, Completed
- Receives: currentFilter, onFilterChange

// TaskList.jsx
- Maps through filtered tasks
- Receives: tasks, onToggle, onDelete, onEdit

// TaskItem.jsx
- Individual task display
- Checkbox, task text, delete button
- Receives: task object, onToggle, onDelete

// Stats.jsx
- Shows statistics
- Receives: tasks array
```
