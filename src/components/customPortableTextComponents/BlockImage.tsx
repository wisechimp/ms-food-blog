"use client"
import Image, { ImageProps } from 'next/image'
import imageUrlFor from "@/src/utils/imageUrlBuilder"
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

type BlockImageProps = {
  imageData: SanityImageSource,
  imageAltText: string
}

const BlockImage = ({ imageData, imageAltText }: BlockImageProps ) => {
  
  return(
    <Image src={imageUrlFor(imageData).url()} alt={imageAltText} width={1200} height={900}/>
  )
}

export default BlockImage