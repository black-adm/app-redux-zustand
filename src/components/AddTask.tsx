import { FormEvent, useState } from "react"

export function AddTask() {
    const [newTask, setNewTask] = useState('')

    function handleNewTask(e: FormEvent) {
        e.preventDefault()
        console.log(newTask)
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