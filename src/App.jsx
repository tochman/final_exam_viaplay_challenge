import React, { useEffect } from "react"
import { getSeries } from "./modules/seriesAction"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getSeries(dispatch)
  }, [])

  return (
    <div className="App">
      <h1>Zup wörld!</h1>
    </div>
  )
}

export default App
