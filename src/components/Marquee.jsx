const words = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'UI / UX',
  'Motion',
  'Three.js',
]

export default function Marquee() {
  const loop = [...words, ...words]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`}>
            {word}
            <i />
          </span>
        ))}
      </div>
    </div>
  )
}
