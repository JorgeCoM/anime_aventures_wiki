import { CodeData } from "../data/CodesData"

const title = CodeData.map(e => e.title)
const description = CodeData.map(e => e.description)
const [tableDate] = CodeData.map(e => e.table)

// console.log(tableDate)

export const CodesPage = () => {
  return (
    <div className="text-white">
      <div className="p-10">
        <div className="mb-4">
          <h2 className="mb-2 font-bold text-3xl">{title}</h2>
          <div> <div className="inline font-bold text-md"> {title} </div>{description} </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table text-black bg-slate-500 w-full">
              {/* head*/}
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Rewards</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tableDate.map(e => {
                  return <tr key={e.name}>
                    <td>{e.name}</td>
                    <td>
                      <img className="inline" src={e.icon} alt="" />
                      <div
                        className=" inline font-bold"
                        style=
                        {{
                          background: 'linear-gradient(#ffffff 25%,#ffa7ff 40%,#66efff 75%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                        {e.prize} {e.currencieType}
                      </div>
                    </td>
                    <td>
                      {e.date}
                    </td>
                    {e.status
                      ? <td className=" bg-green-600"> active </td>
                      : <td className=" bg-red-600"> disabled </td>}
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
