import { CodeTableRewardsItems } from "./CodeTableRewardsItems"

export const CodeTable = ({ item }) => {
    return (
        <tr
            className="border-b dark:border-neutral-500">
            <td
                className="whitespace-nowrap px-6 py-4 font-medium">
                {item.name}
            </td>
            <td
                className="whitespace-nowrap px-6 py-4">
                {item.rewards.map(elements => {
                    return <CodeTableRewardsItems key={elements.id} reward={elements} />
                })}
            </td>
            <td
                className="whitespace-nowrap px-6 py-4">
                {item.date}
            </td>
            <td
                className="whitespace-nowrap px-6 py-4">
                {item.status
                    ? <div className="font-bold text-green-600"> active </div>
                    : <div className="font-bold text-red-600"> disabled </div>
                }
            </td>
        </tr>
    )
}
