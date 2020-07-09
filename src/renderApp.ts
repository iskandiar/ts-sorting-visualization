import createApp from './dom/createApp'
import createTable from './dom/createTable'
import createTableRow from './dom/createTableRow'
import createTableHeader from './dom/createTableHeader'
import createResultCell from './dom/createResultCell'
import createResultRows from './dom/createResultRows'

export default function (results, sorts, startDrawing) {
  //render cell rows
  const resultCellRows = results
    .map(rowResults => {
      const [templates, updates] = rowResults
        .map((result) => createResultCell(result.sample))
        .reduce(([templates, updates], [template, update]) => (
          [templates + template, [...updates, update]]
        ), ['', []]);

      return [templates, updates, rowResults];
    })

  const handlePlayClick = ({ sortType, sampleType }): void => startDrawing({ sortType, sampleType })

  const resultRows = createResultRows(
    resultCellRows.map(([template, , row]) => createTableRow(template, row, handlePlayClick))
  )
  const tableHeader = createTableHeader(sorts, handlePlayClick)

  const [tableTemplate, , tableInit] = createTable(tableHeader, resultRows)

  createApp(tableTemplate, tableInit)


  const updateResultCell = resultCellRows.map(([, update]) => update).flat()

  return ({ updateResultCell })
}
