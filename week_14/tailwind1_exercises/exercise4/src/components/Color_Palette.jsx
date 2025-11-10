function Color_Pallet() {
    return (
        <>
            <div class="max-w-4xl mx-auto p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">🇳🇬 Nigerian Color Palette</h2>

            {/* Grid layout */}
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {/* Flag Colors */}
                <div class="text-center">
                <div class="w-full h-20 bg-green-600 rounded"></div>
                <p class="mt-2 text-sm font-medium text-gray-800">Flag Green<span class="text-gray-500">#008751</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-white border rounded"></div>
                <p class="mt-2 text-sm font-medium text-gray-800">Flag White<span class="text-gray-500">#FFFFFF</span></p>
                </div>

                {/* Naija Green Shades */}
                <div class="text-center">
                <div class="w-full h-20 bg-green-50 rounded border"></div>
                <p class="mt-2 text-sm text-gray-800">Green 50<span class="text-gray-500">#F0FDF4</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-100 rounded"></div>
                <p class="mt-2 text-sm text-gray-800">Green 100<span class="text-gray-500">#DCFCE7</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-200 rounded"></div>
                <p class="mt-2 text-sm text-gray-800">Green 200<span class="text-gray-500">#BBF7D0</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-300 rounded"></div>
                <p class="mt-2 text-sm text-gray-800">Green 300<span class="text-gray-500">#86EFAC</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-400 rounded"></div>
                <p class="mt-2 text-sm text-gray-800">Green 400<span class="text-gray-500">#4ADE80</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-500 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 500<span class="text-gray-200">#22C55E</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-600 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 600<span class="text-gray-200">#16A34A</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-700 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 700<span class="text-gray-200">#15803D</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-800 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 800<span class="text-gray-200">#166534</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-900 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 900<span class="text-gray-200">#14532D</span></p>
                </div>

                <div class="text-center">
                <div class="w-full h-20 bg-green-950 rounded"></div>
                <p class="mt-2 text-sm text-white">Green 950<span class="text-gray-200">#052E16</span></p>
                </div>
            </div>
            </div>
        </>
    );
}

export default Color_Pallet;