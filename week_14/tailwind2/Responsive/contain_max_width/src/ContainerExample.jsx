function ContainerExample() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Max-width container centered */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Centered Content</h2>
        <p className="text-gray-700">
          This content is centered and has a maximum width.
        </p>
      </div>
      
      {/* Different max widths */}
      <div className="mt-12">
        <div className="max-w-sm mx-auto px-4 bg-blue-100 p-4 mb-4">
          max-w-sm (384px)
        </div>
        <div className="max-w-md mx-auto px-4 bg-green-100 p-4 mb-4">
          max-w-md (448px)
        </div>
        <div className="max-w-lg mx-auto px-4 bg-red-100 p-4 mb-4">
          max-w-lg (512px)
        </div>
        <div className="max-w-xl mx-auto px-4 bg-purple-100 p-4 mb-4">
          max-w-xl (576px)
        </div>
        <div className="max-w-2xl mx-auto px-4 bg-yellow-100 p-4">
          max-w-2xl (672px)
        </div>
      </div>
    </div>
  );
}

export default ContainerExample;