import { toast, Toaster } from 'sonner'
import { ErrorToaster } from './errorToaster';

export const DescriptionToaster = ({ data }) => {

    const { title, message, type } = data 

    const description = (type,  message) => toast.message(`${title}`, {
        action: {
            label: type
        },
        style: {
            background: '#00FF7F',
            color: 'black'
        },
        description: message
    });

    return (
        <>
            <div className='hidden'>
                {message
                    ? description(type, message)
                    : <ErrorToaster data={data}/> }
            </div>
            <Toaster />
        </>
    )
}