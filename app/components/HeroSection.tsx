import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start gap-6 mt-8 mb-12">
      {/* Featured models container */}
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {/* WAN 2.2 Model - Large card */}
        <div className="w-full lg:flex-1 lg:max-w-3xl h-72 md:h-90 rounded-3xl relative overflow-hidden">
          <div className="flex h-full">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c1444d5c93deff40dbe6555fe07d42bb60c59553?width=483" 
              alt="Portrait with sunlight"
              className="w-1/3 h-full object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c2c964bc7d2352d72f387283b5046c9c56048823?width=483" 
              alt="Coastal road scene"
              className="w-1/3 h-full object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/00b76f918744ae67327f622fa0e922a2b5d3bd97?width=483" 
              alt="Anime character"
              className="w-1/3 h-full object-cover"
            />
          </div>
          
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 p-8">
              {/* Model type badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/30 rounded-full">
                  NEW IMAGE MODEL
                </span>
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
                WAN 2.2
              </h1>
              
              {/* Feature title */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                WAN 2.2 Image generation
              </h2>
              
              {/* Description */}
              <p className="text-gray-200 text-base leading-relaxed max-w-lg mb-6">
                Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.
              </p>
              
              {/* CTA Button */}
              <button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Try WAN 2.2
              </button>
            </div>
          </div>
        </div>

        {/* Open Source FLUX.1 - Smaller card */}
        <div className="w-full lg:w-96 h-72 md:h-90 rounded-3xl bg-gray-200 relative overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/00cfd9549d2a96629fa480c9493c5ba7bd64fe50?width=966" 
            alt="Premium liquor bottle"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute top-8 left-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/30 rounded-full">
                OPEN SOURCE MODEL
              </span>
            </div>
            
            <div className="absolute bottom-8 left-8">
              <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
                Open<br />Source
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                FLUX.1 Krea
              </h2>
              
              <p className="text-gray-200 text-base leading-relaxed max-w-sm">
                We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="flex justify-between items-center w-full">
        {/* Pagination dots */}
        <div className="flex justify-center items-start gap-2 flex-1">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex items-start gap-2">
          <button className="flex w-8 h-8 justify-center items-center rounded-md bg-gray-100">
            <ChevronLeft className="w-3 h-3 text-black" />
          </button>
          <button className="flex w-8 h-8 justify-center items-center rounded-md bg-gray-100">
            <ChevronRight className="w-3 h-3 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}
