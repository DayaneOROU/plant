const avatars = [
  { src: "/face/img1.jpg", alt: "img 1" },
  { src: "/face/img2.jpg", alt: "img 2" },
  { src: "/face/img3.jpg", alt: "img 3" },
  { src: "/face/img4.jpg", alt: "img 4" },
]

export default function AvatarStack() {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="w-15 h-15 rounded-full border-2 border-white overflow-hidden -mr-2.5 transition transform hover:scale-150"
          style={{ zIndex: avatars.length - i }}
        >
          <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover " />
        </div>
      ))}
    </div>
  )
}