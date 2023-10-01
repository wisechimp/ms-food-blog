import React from "react"

const FootnotesPortableText = ({ value }) => {
  const notes = value
    .filter(({ _type }) => _type === "block")
    .reduce((acc, curr) => {
      return [...acc, ...curr.markDefs]
    }, [])

  return (
    <div>
      {notes.map(({ _key, text, index }) => (
        <p id={`${_key}`} key={_key}>
          {index} {text}
        </p>
      ))}
    </div>
  )
}

export default FootnotesPortableText
