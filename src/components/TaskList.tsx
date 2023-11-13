import { useSelector } from "react-redux"

export function TaskList() {
    const tasks = useSelector(store => {
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