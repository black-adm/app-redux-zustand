import { useAppSelector } from "../store"

export function TaskList() {
    const tasks = useAppSelector(store => {
        return store.task
    })

    console.log(tasks)

    return (
        <ul>
            {tasks.map(task =>
                <li key={task}>
                    {task}
                </li>
            )}
        </ul>
    )
}