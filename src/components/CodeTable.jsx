export const CodeTable = ({item}) => {
    return (
        <tr >
            <td>{item.name}</td>
            <td>
                <img className="inline" src={item.icon} alt="" />
                <div
                    className=" inline font-bold"
                    style=
                    {{
                        background: 'linear-gradient(#ffffff 25%,#ffa7ff 40%,#66efff 75%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                    {item.prize} {item.currencieType}
                </div>
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
