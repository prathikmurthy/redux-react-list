import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { deleteTask } from "../functions/slice";


export default function TaskGrid() {
    const data = useAppSelector((state) => state.task.data)
    return (
        <div>
            {data.map((x) => <Task task={x} />)}
        </div>
    )
}

interface TaskProps {
    task: string;
}

function Task({task}:TaskProps) {
    const dispatch = useAppDispatch();
    function remove() {
        dispatch(deleteTask(task))
    }
    return (
        <div className="m-auto min-w-2xl text-white text-center text-xl pt-10" onClick={remove}>
            {task}
        </div>
    )
}