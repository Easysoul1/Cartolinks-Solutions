import { FileText, DollarSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and brand */}
          <div className="flex items-center gap-2">
            <div className="flex w-8 h-8 justify-center items-center rounded-md bg-black">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0003 1.66797L1.66699 5.83464V14.168L10.0003 18.3346L18.3337 14.168V5.83464L10.0003 1.66797Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.66699 5.83203L10.0003 9.9987L18.3337 5.83203" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 18.3333V10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-black text-xl font-bold">Krea AI</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Pricing</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
