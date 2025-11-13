function FlexDirection() {
  return (
    <div className="space-y-8 p-4">
      <h1>Flex Direction Examples</h1>
      {/* Row (default) */}
      <div className="flex flex-row gap-2 bg-gray-100 p-4">
        <div className="bg-blue-500 p-4">1</div>
        <div className="bg-yellow-600 p-4">2</div>
        <div className="bg-purple-700 p-4">3</div>
      </div>
      
      {/* Row reverse */}
      <div className="flex flex-row-reverse gap-2 bg-gray-100 p-4">
        <div className="bg-green-500 p-4">1</div>
        <div className="bg-green-500 p-4">2</div>
        <div className="bg-green-500 p-4">3</div>
      </div>
      
      {/* Column */}
      <div className="flex flex-col gap-2 bg-gray-100 p-4">
        <div className="bg-red-500 p-4">1</div>
        <div className="bg-red-500 p-4">2</div>
        <div className="bg-red-500 p-4">3</div>
      </div>
      
      {/* Column reverse */}
      <div className="flex flex-col-reverse gap-2 bg-gray-100 p-4">
        <div className="bg-purple-500 p-4">1</div>
        <div className="bg-purple-500 p-4">2</div>
        <div className="bg-purple-500 p-4">3</div>
      </div>
    </div>
  );
}

export default FlexDirection