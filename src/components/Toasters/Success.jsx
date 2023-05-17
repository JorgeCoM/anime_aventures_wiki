import { toast, Toaster } from 'sonner'
import { ErrorToaster } from './errorToaster';

export const SuccessToaster = ({ data }) => {

    const { title, type, message } = data 

    const success = () => toast.success(`${title} ${type} ${message}`, {
        style: {
            background: '#00FF7F',
            color: 'black'
        }
    });

    return (
        <>
            <div className='hidden'>
                {message
                    ? success()
                    : <ErrorToaster data={data}/> } 
            </div>
            <Toaster />
        </>
    )
}