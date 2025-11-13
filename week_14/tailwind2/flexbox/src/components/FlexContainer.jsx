function FlexBasics() {
  return (
    <div>
      <h1>Basic Flex Examples</h1>
      {/* Basic flex container */}
      <div className="flex bg-gray-100 p-4">
        <div className="bg-blue-500 p-4">Item 1</div>
        <div className="bg-green-500 p-4">Item 2</div>
        <div className="bg-red-500 p-4">Item 3</div>
      </div>
      
      {/* Flex with gap */}
      <div className="flex gap-4 bg-gray-100 p-4 mt-4">
        <div className="bg-blue-500 p-4">Item 1</div>
        <div className="bg-green-500 p-4">Item 2</div>
        <div className="bg-red-500 p-4">Item 3</div>
      </div>
    </div>
  );
}

export default FlexBasics;