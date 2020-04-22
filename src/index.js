import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./state/store/configureStore"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

if (window.Cypress) {
  window.store = store
}
serviceWorker.unregister()
