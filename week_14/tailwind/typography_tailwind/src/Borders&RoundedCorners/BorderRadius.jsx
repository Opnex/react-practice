function BorderRadius() {
  return (
    <div className="p-8 space-y-4">
      <div className="bg-blue-500 p-4 rounded-none">No Rounding</div>
      <div className="bg-blue-500 p-4 rounded-sm">Small Rounding</div>
      <div className="bg-blue-500 p-4 rounded">Default Rounding</div>
      <div className="bg-blue-500 p-4 rounded-md">Medium Rounding</div>
      <div className="bg-blue-500 p-4 rounded-lg">Large Rounding</div>
      <div className="bg-blue-500 p-4 rounded-xl">XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-2xl">2XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-3xl">3XL Rounding</div>
      <div className="bg-blue-500 p-4 rounded-full">Full Rounding</div>
      
      {/* Individual corners */}
      <div className="bg-green-500 p-4 rounded-tl-lg">Top-left rounded</div>
      <div className="bg-green-500 p-4 rounded-tr-lg">Top-right rounded</div>
      <div className="bg-green-500 p-4 rounded-br-lg">Bottom-right rounded</div>
      <div className="bg-green-500 p-4 rounded-bl-lg">Bottom-left rounded</div>
    </div>
  );
}

export default BorderRadius;