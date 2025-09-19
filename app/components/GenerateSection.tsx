import { Image, Video, Zap, Sparkles, Edit, Mic, RotateCcw, GraduationCap, ChevronRight, LucideIcon } from 'lucide-react'

interface Tool {
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  description: string;
}

export default function GenerateSection() {
  const tools: Tool[] = [
    {
      icon: Image,
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      title: 'Image',
      badge: 'New',
      badgeColor: 'bg-sky-100 text-sky-600',
      description: 'Generate images with custom styles in Flux and Ideogram.'
    },
    {
      icon: Video,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Video',
      description: 'Generate videos with Hailu, Pika, Runway, Luma, and more.'
    },
    {
      icon: Zap,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Realtime',
      description: 'Realtime AI rendering on a canvas. Instant feedback loops.'
    },
    {
      icon: Sparkles,
      bgColor: 'bg-gray-800',
      iconColor: 'text-white',
      title: 'Enhancer',
      badge: 'New',
      badgeColor: 'bg-sky-100 text-sky-600',
      description: 'Upscale and enhance images and videos up to 22K.'
    },
    {
      icon: Edit,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Edit',
      badge: 'New',
      badgeColor: 'bg-sky-100 text-sky-600',
      description: 'Add objects, change style, or expand photos and generations.'
    },
    {
      icon: Mic,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Video Lipsync',
      badge: 'New',
      badgeColor: 'bg-sky-100 text-sky-600',
      description: 'Lip sync any video to any audio.'
    },
    {
      icon: RotateCcw,
      bgColor: 'bg-gray-800',
      iconColor: 'text-white',
      title: 'Motion Transfer',
      badge: 'New',
      badgeColor: 'bg-sky-100 text-sky-600',
      description: 'Transfer motion to images and animate characters.'
    },
    {
      icon: GraduationCap,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Train',
      description: 'Teach Krea to replicate your style, products, or characters.'
    }
  ]

  return (
    <section className="flex flex-col items-center gap-6 mb-12">
      {/* Section header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-bold text-gray-900">Generate</h2>
        <button className="flex items-center gap-1 text-blue-600 text-sm font-medium">
          <ChevronRight className="w-3 h-3" />
          <span>Show all</span>
        </button>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-3 sm:gap-0">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`flex w-12 h-12 justify-center items-center rounded-lg ${tool.bgColor}`}>
                  <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                </div>
                
                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">{tool.title}</h3>
                    {tool.badge && (
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
              
              {/* Open button */}
              <button className="self-end sm:self-auto px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
                Open
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
