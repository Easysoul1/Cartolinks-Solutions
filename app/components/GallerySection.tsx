import { FileText, DollarSign } from 'lucide-react'

export default function GallerySection() {
  return (
    <section className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
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
    </section>
  )
}
