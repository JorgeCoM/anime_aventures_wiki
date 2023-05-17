import { CodeTableRewards } from "./CodeTableRewards"

export const CodeTableRewardsItems = ({ reward }) => {
  return (
    <>
      {reward.currencieType === 'Summon Ticket'
        ? <>{reward.prize}<img className="inline" src={reward.icon} alt={reward.currencieType} />
          <CodeTableRewards reward={reward} />
        </>
        : <><img
          className="inline"
          src={reward.icon}
          alt={reward.currencieType} />
          <CodeTableRewards reward={reward} />
        </>
      }

    </>
  )
}
