import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux"
import store from './redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>
)