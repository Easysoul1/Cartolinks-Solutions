import { Home, Image, Video, Edit, Brush, Type, Folder, Album as GalleryIcon, HelpCircle, Bell, Moon, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto px-4 lg:px-20 py-3">
      <div className="flex justify-between items-center">
        {/* Left side - Logo and user menu */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex w-8 h-8 justify-center items-center rounded-md bg-black">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0003 1.66797L1.66699 5.83464V14.168L10.0003 18.3346L18.3337 14.168V5.83464L10.0003 1.66797Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.66699 5.83203L10.0003 9.9987L18.3337 5.83203" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 18.3333V10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* User account menu */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-sm font-medium">benevolentnimblebat</span>
            <ChevronDown className="w-3 h-3 text-gray-700" />
          </div>
        </div>

        {/* Center - Application tools */}
        <div className="hidden md:flex p-1 items-center rounded-full bg-gray-100">
          <button className="flex w-10 h-10 justify-center items-center rounded-full bg-white shadow-sm">
            <Home className="w-4 h-4 text-gray-800" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Image className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Video className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Edit className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Brush className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Type className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex w-10 h-10 justify-center items-center">
            <Folder className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Right side - Gallery, Support, Notifications, Settings, Profile */}
        <div className="flex items-center gap-2 md:gap-6">
          <button className="hidden md:flex items-center gap-2">
            <GalleryIcon className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-700 text-sm font-medium">Gallery</span>
          </button>
          
          <button className="hidden md:flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-700 text-sm font-medium">Support</span>
          </button>
          
          <button className="text-gray-500">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-gray-500">
            <Moon className="w-5 h-5" />
          </button>
          
          {/* User profile */}
          <div className="p-0.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
            <div className="w-8 h-8 rounded-full bg-purple-200"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
