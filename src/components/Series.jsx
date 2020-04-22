import React from "react"
import { useSelector } from "react-redux"

const Series = () => {
  const series = useSelector((state) => state.series)

  let seriesDisplay
  if (series !== []) {
    debugger
    seriesDisplay = series.map((serie) => {
      return (
        <div class="display-show">
          <img src={serie.content.images.boxart.url} alt="boxart" />
        </div>
      )
    })
  } 

  return <div>
    {seriesDisplay}
  </div>
}

export default Series
