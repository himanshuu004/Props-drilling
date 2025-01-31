import React from 'react'

const Foooter = () => {
  return (
    <div>
     <footer className="absolute bottom-0 w-full bg-gray-900 text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; 2025 YourCompany. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 text-sm">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 text-sm">Contact</a>
        </nav>
      </div>
    </footer>
    </div>
  )
}

export default Foooter
