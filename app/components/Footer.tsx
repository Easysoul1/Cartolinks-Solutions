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

          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">Gallery</span>
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 text-sm">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Pricing</span>
            </button>
          </div>

          {/* Right side - Curated by */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">curated by</span>
            <svg width="74" height="20" viewBox="0 0 74 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 19.2V0.8H5.74V11.12H11.48V0.8H17.22V19.2H11.48V13.28H5.74V19.2H0ZM22.3879 19.2V0.8H33.5879V2.96H28.1279V8.48H33.2279V10.64H28.1279V17.04H33.5879V19.2H22.3879ZM38.5219 19.2V0.8H44.2619V17.04H49.6619V19.2H38.5219ZM54.8279 19.2V0.8H60.5679V17.04H65.9679V19.2H54.8279ZM73.6619 19.2V0.8H67.9219V19.2H73.6619Z" fill="#111111"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
