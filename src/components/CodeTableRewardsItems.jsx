export const CodeTableRewardsItems = ({ reward }) => {
  return (
    <>
      <img className="inline" src={reward.icon} alt="" />
      <div

        className=" inline font-bold"
        style=
        {{
          background: 'linear-gradient(#ffffff 25%,#ffa7ff 40%,#66efff 75%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
        {reward.prize} {reward.currencieType}
      </div>
    </>
  )
}
