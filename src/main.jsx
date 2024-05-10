import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Count from './count.jsx'
import Counter from './Counter-classcomp.jsx'
import Viewlist from './Viewlist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Count/> */}
    <Viewlist />
   {/* <Counter/> */}
  </React.StrictMode>,
)
