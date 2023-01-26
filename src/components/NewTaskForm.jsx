import { useForm, useTasks } from '../hooks'

export const NewTaskForm = () => {
  const {
    formState: newTask,
    handleChange,
    resetForm,
  } = useForm({
    title: '',
    description: '',
  })
  const { addNewTask } = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, description } = newTask
    if (title.trim().length <= 1 || description.trim().length <= 3) return
    addNewTask({ title, description })
    resetForm()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 mx-auto flex w-[90%] flex-col space-y-3 rounded-md bg-slate-800 p-4 text-white md:w-[30%]"
    >
      <div>
        <label htmlFor="title" className="mb-1 block font-medium">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={newTask.title}
          className="w-full rounded-md border bg-slate-200 p-2 text-slate-600"
        />
      </div>
      <div>
        <label htmlFor="description" className="mb-1 block font-medium">
          Description:
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          value={newTask.description}
          className="w-full rounded-md border bg-slate-200 p-2 text-slate-600"
        />
      </div>
      <button type="submit" className="rounded-md bg-indigo-500 p-2">
        Save
      </button>
    </form>
  )
}
