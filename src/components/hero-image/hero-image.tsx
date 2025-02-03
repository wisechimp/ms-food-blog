import Image from "next/image";

import * as styles from "./heroImage.module.css";

type HeroImageProps = {
  imageSrc: string;
  imageAltText: string;
  imageAspectRatio: number;
};

const HeroImage = ({
  imageSrc,
  imageAltText,
  imageAspectRatio,
}: HeroImageProps) => {
  const imageHeight = 600;
  const imageWidth = imageHeight * imageAspectRatio;

  return (
    <div className={styles.heroImage}>
      <Image
        src={`${imageSrc}?auto=format`}
        alt={imageAltText}
        width={imageWidth}
        height={imageHeight}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: imageHeight,
          maxWidth: imageWidth,
        }}
        priority
      />
    </div>
  );
};

export default HeroImage;
