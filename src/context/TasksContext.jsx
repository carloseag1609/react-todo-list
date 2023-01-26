import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const TasksContext = createContext({})

const initialTasks = [
  {
    id: 1,
    title: 'First task',
    description: 'First task description',
    completed: false,
  },
  {
    id: 2,
    title: 'Second task',
    description: 'Second task description',
    completed: true,
  },
]

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (!savedTasks) return initialTasks
    else return JSON.parse(savedTasks)
  })

  const addNewTask = (newTask) => {
    newTask.id = tasks.length + 1
    newTask.completed = false
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  const toggleCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          completed: !task.completed,
        }
      return task
    })
    console.log({ newTasks })
    setTasks(newTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{ tasks, addNewTask, toggleCompleted, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

TasksProvider.propTypes = {
  children: PropTypes.any,
}
