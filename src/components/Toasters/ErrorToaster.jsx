import { toast, Toaster } from 'sonner'

export const ErrorToaster = ({ data }) => {

    const { title, messageError, type } = data

    const error = (messageError) => toast.error(`error to ${type} ${title}`, {
        style: {
            background: '#FF6347',
            color: 'black'
        },
        description: messageError
    });

    return (
        <>
            <div className='hidden'>
               {error( messageError)}
            </div>
            <Toaster />
        </>
    )
}