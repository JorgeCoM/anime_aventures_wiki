import { DescriptionToaster } from "../components/Toasters/DescriptionToaster"
import { toasterData } from "../data/Toaster"
// import { SuccessToaster } from "../components/Toasters/Success"

export const EffectsPage = () => {

  return (
    <div className="text-white">
      <DescriptionToaster data={toasterData} />
      {/* <SuccessToaster data={data} /> */}

    </div>
  )
}


