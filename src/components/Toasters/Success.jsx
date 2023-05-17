import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SuccessToaster = ({ message }) => {
    const isDark = false

    const success = (message) => toast.success(message);

    const successDark = (message) => toast.dark(message, {
        className: 'dark-toast',
        position: 'bottom-right',
        style: {
            color: '#2eb561'
        },
        progressStyle: {
            background: 'green'
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>

    });

    return (
        <>
            {isDark ? success(message) : successDark(message)}    
        </>
    )
}