import { useTasks } from '../hooks'

export const TasksList = () => {
  const { tasks, toggleCompleted, removeTask } = useTasks()

  if (tasks.length === 0 || !tasks) {
    return (
      <h2 className="my-4 text-center text-2xl text-white">
        There are no tasks yet
      </h2>
    )
  }

  return (
    <div className="mx-auto flex w-[90%] flex-col flex-wrap justify-around md:mt-2 md:flex-row">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="my-2 w-full rounded-md bg-slate-800 p-4 text-white md:max-w-sm"
        >
          <div className="mb-4 flex justify-between">
            <div>
              <h2 className="font-semibold">{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <input
              type="checkbox"
              onChange={(e) => toggleCompleted(task.id)}
              checked={task.completed}
            />
          </div>
          <button
            className="w-full bg-red-500 p-2"
            onClick={() => removeTask(task.id)}
          >
            Delete task
          </button>
        </div>
      ))}
    </div>
  )
}
