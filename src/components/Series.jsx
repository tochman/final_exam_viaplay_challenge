import React from "react"
import { useSelector } from "react-redux"

const Series = () => {
  const series = useSelector((state) => state.series)

  let seriesDisplay
  if (series !== []) {
    debugger
    seriesDisplay = series.map((serie) => {
      return (
        <div>
          <h4>{serie.publicPath}</h4>
        </div>
      )
    })
  } else {
    seriesDisplay = <p>wtf</p>
  }
  return <div>
    {seriesDisplay}
    <h3>Hello</h3>
  </div>
}

export default Series
