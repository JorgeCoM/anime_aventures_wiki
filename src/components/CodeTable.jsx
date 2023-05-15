import { CodeTableRewardsItems } from "./CodeTableRewardsItems"

export const CodeTable = ({item}) => {
    return (
        <tr className="p-5">
            <td>{item.name}</td>
            <td>
                {item.rewards.map(elements => {
                return <CodeTableRewardsItems key={elements.id} reward={elements}/>
                })}
            </td>
            <td>
                {item.date}
            </td>
            {item.status
                ? <td className="font-bold text-green-600"> active </td>
                : <td className="font-bold text-red-600"> disabled </td>}
        </tr>
    )
}
