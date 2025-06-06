import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaImage } from "react-icons/fa";
import { FastAverageColor } from "fast-average-color";

type Props = {
  src?: string | StaticImageData;
  alt: string;
  className?: string;
  heightClass?: string;
};

export default function PatternedImage({
  src,
  alt,
  className = "object-contain relative z-10",
  heightClass = "h-48",
}: Props) {
  const [bgColor, setBgColor] = useState<string>("#eee");

  useEffect(() => {
    if (!src) return;
    const fac = new FastAverageColor();
    const url = typeof src === "string" ? src : src.src;
    fac
      .getColorAsync(url)
      .then((color) => setBgColor(color.hex))
      .catch(() => setBgColor("#ddd"));
  }, [src]);

  const imageUrl = src && typeof src !== "string" ? src.src : (src || "");

  return (
    <div
      className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center`}
      style={{ backgroundColor: bgColor }}
    >
      {src ? (
        <>
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover blur-2xl scale-110 absolute inset-0 z-0"
            priority={false}
          />
          <Image src={src} alt={alt} fill className={className} quality={95} />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          <FaImage className="w-12 h-12 text-gray-400" />
        </div>
      )}
    </div>
  );
}
