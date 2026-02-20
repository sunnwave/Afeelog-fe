import Image from "next/image";
import { JSX, useState } from "react";
import ImageCounter from "./ImageCounter";
import DotIndicator from "./DotIndicator";
import NavigationArrow from "./NavigationArrow";
import { getImageUrl } from "@/utils/getImage";

export default function ImageCarousel({
  images,
}: {
  images: Array<string>;
}): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="sticky top-8 h-fit">
      <div className="relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden group">
        {/* Main Image */}
        <Image
          src={getImageUrl(images[currentImageIndex])}
          // src={images[currentImageIndex]}
          alt={`${images[currentImageIndex]}`}
          fill
          className="w-full h-full object-cover"
        />

        <NavigationArrow
          images={images}
          setCurrentImageIndex={setCurrentImageIndex}
        />

        <ImageCounter images={images} currentImageIndex={currentImageIndex} />
        <DotIndicator
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </div>
    </div>
  );
}
