import { NewTaskForm, TasksList } from './components'

export const App = () => {
  return (
    <div className="mx-auto flex flex-col">
      <NewTaskForm />
      <TasksList />
    </div>
  )
}
