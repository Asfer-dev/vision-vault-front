"use client";

import { useEffect, useState } from "react";

export default function ProductPhoto({ product }) {
  const [viewingPhoto, setViewingPhoto] = useState("");

  useEffect(() => {
    setViewingPhoto(product?.photos[0]);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <img className="border border-neutral-200" src={viewingPhoto} alt="" />
      </div>
      <div className="flex gap-2 overflow-auto">
        {product?.photos?.map((photoUrl) => (
          <img
            onClick={() => setViewingPhoto(photoUrl)}
            className={
              photoUrl !== viewingPhoto
                ? "w-28 border-neutral-200 cursor-pointer hoverable border"
                : "w-28 border-neutral-200 cursor-pointer hoverable"
            }
            src={photoUrl}
            key={photoUrl}
          />
        ))}
      </div>
    </div>
  );
}
