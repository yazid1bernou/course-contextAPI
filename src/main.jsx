import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Global from './contextAPI/Global.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Global>
      <App />
  </Global>,
)
