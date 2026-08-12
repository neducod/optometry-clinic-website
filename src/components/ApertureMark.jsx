// LUMEN's signature graphic device: a concentric aperture ring inspired by a
// phoropter / camera-iris, standing in for the brand's "precision focus" idea.
// Used once, prominently, in the hero — and quietly as a divider elsewhere.
export default function ApertureMark({ size = 420, className = '', animate = true }) {
    const rings = [1, 0.78, 0.56, 0.34]
    return (
      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="apertureStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A961" />
            <stop offset="100%" stopColor="#1B8F82" />
          </linearGradient>
        </defs>
        <g className={animate ? 'animate-aperture' : ''} style={{ transformOrigin: '200px 200px' }}>
          {rings.map((r, i) => (
            <circle
              key={i}
              cx="200"
              cy="200"
              r={180 * r}
              fill="none"
              stroke="url(#apertureStroke)"
              strokeOpacity={0.15 + i * 0.12}
              strokeWidth={i === rings.length - 1 ? 2 : 1}
            />
          ))}
          {/* Aperture blades */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * 360
            return (
              <line
                key={i}
                x1="200"
                y1="200"
                x2={200 + 178 * Math.cos((angle * Math.PI) / 180)}
                y2={200 + 178 * Math.sin((angle * Math.PI) / 180)}
                stroke="#0B192C"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            )
          })}
          <circle cx="200" cy="200" r="42" fill="none" stroke="#1B8F82" strokeWidth="2" />
          <circle cx="200" cy="200" r="6" fill="#C9A961" />
        </g>
      </svg>
    )
  }