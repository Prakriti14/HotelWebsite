import { IMAGES } from "../../lib/images";

export default function Pic({ k, i = 0, className = "" }) {
  const list = IMAGES[k] || IMAGES.lobby1;
  const src = list[i % list.length];
  return (
    <img
      src={src}
      alt={k}
      loading="lazy"
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
}