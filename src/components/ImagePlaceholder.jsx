import { Eye } from 'lucide-react'

// Stands in for real photography across the site. Swap the <div> for an
// <img src="..." alt={alt} /> once production assets are ready — the alt
// text is already authored per-instance below.
export default function ImagePlaceholder({ alt, className = '', tone = 'ink' }) {
  const tones = {
    ink: 'from-ink-700 to-ink-900',
    teal: 'from-teal-600 to-ink-800',
    sand: 'from-sand-300 to-sand-200',
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <Eye className="opacity-20" size={48} strokeWidth={1} color={tone === 'sand' ? '#0B192C' : '#F8F9FA'} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
    </div>
  )
}