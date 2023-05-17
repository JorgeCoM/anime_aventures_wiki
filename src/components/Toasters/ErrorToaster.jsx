import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorToaster = ({ message }) => {
    const isDark = false

    const error = (message) => toast.error(message);

    const ErrorDark = (message) => toast.dark(message, {
        toastId: 'customErrorToast',
        position: 'bottom-right',
        className: 'dark-toast',
        progressStyle: {
            background: 'red'
        },
        style: {
            color: '#d32027'
        },
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>


    });

    return (
        <>
            {isDark ? error(message) : ErrorDark(message)}
        </>
    )
}