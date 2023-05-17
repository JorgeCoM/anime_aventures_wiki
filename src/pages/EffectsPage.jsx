// import { InfoToaster } from "../components/Toasters/infoToaster"
// import { SuccessToaster } from "../components/Toasters/Success"
// import { WarnToaster } from "../components/Toasters/warnToaster"
import { ErrorToaster } from "../components/Toasters/ErrorToaster"



export const EffectsPage = () => {
  const message = 'Algo salio mal!'

  return (
    <div className="text-white">
      {/* <InfoToaster  message={message}/>
      <SuccessToaster  message={message}/>
      <WarnToaster  message={message}/> */}
      <ErrorToaster  message={message}/>

    </div>
  )
}


