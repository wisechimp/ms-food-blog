import config from "@/sanity.config";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = imageUrlBuilder(config)

const imageUrlFor = (source: SanityImageSource) => imageBuilder.image(source)

export default imageUrlFor