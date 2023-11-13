import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store"

export function AddTask() {
    const [newTask, setNewTask] = useState('')
    const dispatch = useDispatch()

    function handleNewTask(e: FormEvent) {
        e.preventDefault()

        dispatch(add({
            newTask,
        }))
    }

    return (
        <form onSubmit={handleNewTask}>
            <input
                type="text"
                placeholder="Nova tarefa"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}