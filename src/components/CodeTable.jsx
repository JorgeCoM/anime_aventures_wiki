import { CodeTableRewardsItems } from "./CodeTableRewardsItems"

export const CodeTable = ({item}) => {
    return (
        <tr >
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
                ? <td className=" bg-green-600"> active </td>
                : <td className=" bg-red-600"> disabled </td>}
        </tr>
    )
}
