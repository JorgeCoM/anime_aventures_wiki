import { useCode } from "../../hooks"

export const CodeTableRewards = ({ reward }) => {

   const {handlerClass} = useCode(reward.currencieType)

    return (
        <>
            <div
                className=" inline font-bold"
                style={handlerClass(reward.currencieType)}
            >
                {reward.currencieType === 'Summon Ticket' 
                ? <>{reward.currencieType}</> 
                : <>{reward.prize} {reward.currencieType}</>}
                
            </div>
        </>
    )
}
