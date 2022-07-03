import Image from "next/image";
import { useState } from "react";

function BackgroundImage({ src, alt, className, position, objFit }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={src}
        alt={alt}
        objectFit={objFit || "cover"}
        objectPosition={position || "center"}
        layout="fill"
        loading="eager"
        // className={className}
        className={`${className} duration-1000
              ${
                isLoading ? "scale-105 blur-md opacity-0" : " blur-0 scale-100 "
              }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export default BackgroundImage;
