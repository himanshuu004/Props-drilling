import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav class="absolute top-0 w-full bg-gray-900 text-white py-4 px-6">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <h1 class="text-lg font-semibold">My Website</h1>
      <div class="flex space-x-4">
        <a href="page1.html" class="hover:text-gray-400">Page 1</a>
        <a href="page2.html" class="hover:text-gray-400">Page 2</a>
      </div>
    </div>
  </nav>

  <div class="pt-20">
    <h1 class="text-2xl text-center py-10">Welcome to Page 1!</h1>
    <p class="text-center">This is the first demo page.</p>
  </div>
  <nav class="absolute top-0 w-full bg-gray-900 text-white py-4 px-6">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <h1 class="text-lg font-semibold">My Website</h1>
      <div class="flex space-x-4">
        <a href="page1.html" class="hover:text-gray-400">Page 1</a>
        <a href="page2.html" class="hover:text-gray-400">Page 2</a>
      </div>
    </div>
  </nav>

  <div class="pt-20">
    <h1 class="text-2xl text-center py-10">Welcome to Page 2!</h1>
    <p class="text-center">This is the second demo page.</p>
  </div>
    </div>
  )
};

export default Navbar
