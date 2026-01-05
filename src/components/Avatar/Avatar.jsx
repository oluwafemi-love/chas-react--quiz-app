import { useState } from "react";
import './Avatar.css'

const COLORS = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-indigo-500",
];

export default function Avatar({ username = "User", size = 64 }) {
  const [image, setImage] = useState(null);

  // Pick random color ONCE
  const [bgColor] = useState(() => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-fit flex flex-col gap-2 items-center">
      {/* Avatar */}
      <div
        style={{ width: size, height: size }}
        className={`navAvatar rounded-full flex items-center justify-center overflow-hidden 
        text-white ${image ? "bg-transparent" : bgColor}`}
      >
        {image ? (
          <img
            src={image}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          username.charAt(0).toUpperCase()
        )}
      </div>

      {/* Upload */}
      <label className="text-sm cursor-pointer text-blue-600 w-fit">
        Upload
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}
