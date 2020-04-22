import React from "react"
import { useSelector } from "react-redux"

const Series = () => {
  const series = useSelector((state) => state.series)

  let seriesDisplay
  if (series !== []) {
    seriesDisplay = series.map((serie) => {
      return (
        <div class="display-show">
          <img
            class={`series-image-${serie.publicPath}`}
            src={serie.content.images.boxart.url}
            alt="boxart"
          />
        </div>
      )
    })
  }

  return <div>{seriesDisplay}</div>
}

export default Series
