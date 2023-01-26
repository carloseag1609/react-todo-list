import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { TasksProvider } from './context/TasksContext'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
)
