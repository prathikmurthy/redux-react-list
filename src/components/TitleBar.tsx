import react from 'react'

export default function TitleBar() {

    return (
        <>
        <div className="min-w-screen pt-20 pb-10 text-white text-center">
            <code className="text-4xl">
                Task List
            </code>
            <p className="pt-5 text-gray-300 text-md max-w-xl m-auto">
                Input Tasks in the input field below, new submissions are stored in a Redux store and retrieved to build the grid of tasks found below. Created using Create-React-App, Tailwind, and Redux.
            </p>
        </div>
        </>
    )
}