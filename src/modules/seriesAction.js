import axios from "axios"
import {GET_SERIES} from "../state/actions/actionTypes"

const getSeries = async (dispatch, setShowSeries) => {
  let response = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
  )
  debugger
  dispatch({
    type: GET_SERIES,
    payload: {
      series:
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ],
    },
  })
  setShowSeries(true)
}

export { getSeries }
