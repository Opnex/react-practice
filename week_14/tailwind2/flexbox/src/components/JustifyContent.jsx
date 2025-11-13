function JustifyContent() {
  return (
    <div className="space-y-4 p-4">
      <h1>Justify Content Examples</h1>
      {/* Start (default) */}
      <div className="flex justify-start gap-2 bg-gray-100 p-4">
        <div className="bg-blue-500 p-4">1</div>
        <div className="bg-blue-500 p-4">2</div>
      </div>
      
      {/* Center */}
      <div className="flex justify-center gap-2 bg-gray-100 p-4">
        <div className="bg-green-500 p-4">1</div>
        <div className="bg-green-500 p-4">2</div>
      </div>
      
      {/* End */}
      <div className="flex justify-end gap-2 bg-gray-100 p-4">
        <div className="bg-red-500 p-4">1</div>
        <div className="bg-red-500 p-4">2</div>
      </div>
      
      {/* Space Between */}
      <div className="flex justify-between bg-gray-100 p-4">
        <div className="bg-purple-500 p-4">1</div>
        <div className="bg-purple-500 p-4">2</div>
        <div className="bg-purple-500 p-4">3</div>
      </div>
      
      {/* Space Around */}
      <div className="flex justify-around bg-gray-100 p-4">
        <div className="bg-yellow-500 p-4">1</div>
        <div className="bg-yellow-500 p-4">2</div>
        <div className="bg-yellow-500 p-4">3</div>
      </div>
      
      {/* Space Evenly */}
      <div className="flex justify-evenly bg-gray-100 p-4">
        <div className="bg-pink-500 p-4">1</div>
        <div className="bg-pink-500 p-4">2</div>
        <div className="bg-pink-500 p-4">3</div>
      </div>
    </div>
  );
}

export default JustifyContent;