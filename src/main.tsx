import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'

const rootElement = document.getElementById("root") as HTMLElement
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
} else {
  console.error("Root element with id 'root' not found in the document.")
}