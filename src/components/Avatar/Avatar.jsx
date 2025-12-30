import { useState } from "react";

export default function Avatar({ username = "User", size = 64 }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Avatar */}
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-gray-300 flex items-center justify-center overflow-hidden text-white font-semibold text-xl"
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
      <label className="text-sm cursor-pointer text-blue-600">
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
