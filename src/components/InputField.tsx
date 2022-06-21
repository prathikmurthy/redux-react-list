import { TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../functions/hooks';
import { addTask } from '../functions/slice';


export default function InputField() {
    const dispatch = useAppDispatch()
    function submit() {
        dispatch(addTask((document.getElementById('input') as HTMLInputElement).value))
    }

    const form = useForm({
        initialValues: {}
      });

    document.getElementById('')?.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            // Cancel the default action, if needed
            e.preventDefault();
            // Trigger the button element with a click
            document.getElementById("button")?.click();
          }
    })

    
    
    return (
        <div className="flex flex-row justify-center">
            <TextInput id="input" variant='default' placeholder='Input New Task' classNames={{ defaultVariant: 'bg-slate-900 text-white text-center max-w-2xl m-auto' }}/>
            <Button onClick={submit} id="button">Submit</Button>
        </div>
        )
}