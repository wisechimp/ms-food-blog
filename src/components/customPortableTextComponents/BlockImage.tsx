"use client"
import Image from 'next/image'
import imageUrlFor from "@/src/utils/imageUrlBuilder"
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

type BlockImageProps = {
  imageData: SanityImageSource,
  imageAltText: string
}

const BlockImage = ({ imageData, imageAltText }: BlockImageProps ) => {
  
  return (
    <Image
      src={imageUrlFor(imageData).width(800).format("webp").url()}
      alt={imageAltText}
      width={800}
      height={600}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  )
}

export default BlockImage