
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';


    export const useToasterNotify = (message, type) => {

        const error = (message) => toast.error(message);
        const warn = (message) => toast.warn(message);


        const ErrorDark = (message) => toast.dark(message,{
            toastId: 'customErrorToast', 
            className: 'dark-toast',
        });

        const warnDark = (message) => toast.dark(message,{
            toastId: 'customEWarnToast', 
            className: 'dark-toast',
        });

        if (message && type) return error('Algo salio mal')

        const handlerToast = (message, type, isDark) => {
            if (type === 'info') return isDark ? infoDark(message) : info(message)

        }

    return {
        handlerToast
    }
    }
