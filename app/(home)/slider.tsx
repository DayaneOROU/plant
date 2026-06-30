'use client'

const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"/><path d="M12 2C12 2 8 8 8 12s4 10 4 10"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6 2 2 8 2 12c0 5 4 9 10 10C18 21 22 17 22 12 22 6 18 2 12 2z"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.403 4.18 1 7.5 1c1.998 0 4.049 1.08 5 3 .951-1.92 3.002-3 5-3C20.82 1 24 3.403 24 7.191c0 4.105-5.37 8.863-11 14.402z"/>
  </svg>,
]

const text = "Plant Grow People"

const items = [...icons, ...icons] 

export default function Slider() {
  return (
    <div className="overflow-hidden bg-back py-7">
      <div className="flex animate-marquee w-max">
        {[...items, ...items].map((icon, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 text-[#F5F0E8] text-sm font-medium tracking-widest  whitespace-nowrap">
            <span className="text-[#C4855A]">{icon}</span>
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  )
}