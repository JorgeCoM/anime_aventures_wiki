import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WarnToaster = ({ message }) => {
    const isDark = false

    const warn = (message) => toast.warn(message);

    const warnDark = (message) => toast.dark(message, {
        toastId: 'customWarnToast',
        position: 'bottom-right',
        progressStyle: {
            background: 'yellow'
        },
        style: {
            color: '#d6f028'
        },
        className: 'dark-toast',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>

    });

    return (
        <>
            {isDark ? warn(message) : warnDark(message)}
        </>
    )
}