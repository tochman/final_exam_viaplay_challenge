import axios from "axios"
import {GET_SERIES} from "../state/actions/actionTypes"

const getSeries = async (dispatch) => {
  let response = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
  )
  dispatch({
    type: GET_SERIES, payload: {
      series:
        response.data._embedded["viaplay:blocks"][0]._embedded[
        "viaplay:products"
        ]
    }
  })
  debugger
  // lol

}

export { getSeries }
