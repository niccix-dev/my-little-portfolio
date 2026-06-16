import { PixelCamera } from "./PixelIcons";

export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto px-6 md:px-12 my-16">
      <div className="flex-1 h-px bg-gray-200"></div>
      <PixelCamera className="w-6 h-6" />
      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
  );
}
