import { CodeTable } from "../components/CodeTable"
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
          <div className="overflow-x-auto rounded-box">
          <div className="flex flex-col text-white">
      <div className=" overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th>Code</th>
                  <th>Rewards</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableDate.map(e => {
                  return <CodeTable key={e.name} item={e} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}
