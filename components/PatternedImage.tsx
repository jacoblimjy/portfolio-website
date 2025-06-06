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

const lighten = (hex: string, percent: number) => {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + Math.round((255 * percent) / 100);
  let g = ((num >> 8) & 0x00ff) + Math.round((255 * percent) / 100);
  let b = (num & 0x0000ff) + Math.round((255 * percent) / 100);
  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;
  return "#" + (r << 16 | g << 8 | b).toString(16).padStart(6, "0");
};

export default function PatternedImage({ src, alt, className = "object-contain relative z-10", heightClass = "h-48" }: Props) {
  const [bg, setBg] = useState<string>("#eee");

  useEffect(() => {
    if (src) {
      const fac = new FastAverageColor();
      const url = typeof src === "string" ? src : src.src;
      fac
        .getColorAsync(url)
        .then((color) => {
          const light = lighten(color.hex, 20);
          setBg(`repeating-linear-gradient(45deg, ${color.hex}, ${color.hex} 10px, ${light} 10px, ${light} 20px)`);
        })
        .catch(() => setBg("#ddd"));
    } else {
      setBg("repeating-linear-gradient(45deg, #ccc, #ccc 10px, #eee 10px, #eee 20px)");
    }
  }, [src]);

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center`} style={{ backgroundImage: bg }}>
      {src ? (
        <Image src={src} alt={alt} fill className={className} quality={95} />
      ) : (
        <FaImage className="w-12 h-12 text-gray-400" />
      )}
    </div>
  );
}
