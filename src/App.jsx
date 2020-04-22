import React, { useEffect, useState } from "react"
import { getSeries } from "./modules/seriesAction"
import { useDispatch, useSelector } from "react-redux"
import Series from "./components/Series"
import Header from "./components/Header"

const App = () => {
  const dispatch = useDispatch()
  const [showSeries, setShowSeries] = useState(false)
  useEffect(() => {
    getSeries(dispatch)
  }, [])

  return (
    <>
      <Header />
      <h1>Zup wörld!</h1>
      <button
        onClick={() => {setShowSeries(true)}}
      >
        
        SHOW IT GOSH DARN IT
      </button>
      {showSeries && <Series />}
    </>
  )
}

export default App
