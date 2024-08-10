import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kanban from './Pages/Kanban'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<Kanban />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App