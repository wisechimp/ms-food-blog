import HorizontalTable from "./HorizontalTable"
import BlockImage from './BlockImage'

const CustomPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageData = value?.asset?._ref
      return <BlockImage imageData={imageData} imageAltText={value.altText}/>
    },
    genericTable: ({ value }: any) => {
      const genericTable = value?.rows
      return <HorizontalTable data={genericTable} />
    },
  },
}

export default CustomPortableTextComponents
