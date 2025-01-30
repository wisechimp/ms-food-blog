import * as styles from "./generictable.module.css"

const HorizontalTable = ({ data }) => {
  const rowDataToTable = (rowObject, i) => {
    const rowKey = rowObject._key
    return (
      <tr key={`${rowKey} + ${i} + ${i}`}>
        {rowObject.cells.map((cell, i) => {
          if (i === 0)
            return (
              <th key={`${rowKey} + ${i}`} className={styles.tableHeader}>
                {cell}
              </th>
            )
          else
            return (
              <td key={`${rowKey} + ${i}`} className={styles.tableData}>
                {cell}
              </td>
            )
        })}
      </tr>
    )
  }

  return (
    <table>
      <tbody>
        {data.map((row, i) => {
          return rowDataToTable(row, i)
        })}
      </tbody>
    </table>
  )
}

export default HorizontalTable
