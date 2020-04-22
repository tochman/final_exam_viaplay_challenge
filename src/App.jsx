import React, { useEffect, useState } from "react"
import { getSeries } from "./modules/seriesAction"
import { useDispatch, useSelector } from "react-redux"
import Series from "./components/Series"
import TopHeader from "./components/TopHeader"
import BottomFooter from "./components/BottomFooter"
import { Button } from "grommet"

const App = () => {
  const dispatch = useDispatch()
  const [showSeries, setShowSeries] = useState(false)
  useEffect(() => {
    getSeries(dispatch, setShowSeries)
  }, [])

  return (
    <>
      <TopHeader />

      {showSeries && <Series />}

      <BottomFooter />
    </>
  )
}

export default App
