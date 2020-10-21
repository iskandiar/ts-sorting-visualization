import createApp from './dom/createApp'
import createTable from './dom/createTable'
import createTableRow from './dom/createTableRow'
import createTableHeader, { SortI } from './dom/createTableHeader'
import createResultCell from './dom/createResultCell'
import createResultRows from './dom/createResultRows'

import { Result } from './utils/results'

export default function (
  results: Result[][],
  sorts: SortI[],
  startDrawing: ({ sortType, sampleType }: { sortType: unknown; sampleType: unknown; }) => void
  ): Record<string, unknown> {
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
    resultCellRows.map(([template, , rowResults]) => createTableRow(template as string, rowResults as Result[], handlePlayClick))
  )
  const tableHeader = createTableHeader(sorts, handlePlayClick)

  const [tableTemplate, , tableInit] = createTable(tableHeader, resultRows)

  createApp(tableTemplate, tableInit)

  const updateResultCell = resultCellRows.map(([, update]) => update).flat()

  return ({ updateResultCell })
}
