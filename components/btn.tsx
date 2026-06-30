import React from 'react'

export default function Btn({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-btn w-40 p-2 text-gray-50 rounded-lg font-semibold border border-solid border-black transition transform hover:scale-105 shadow-[4px_4px_rgb(0,0,0)]"
    >
      {text}
    </button>
  )
}
