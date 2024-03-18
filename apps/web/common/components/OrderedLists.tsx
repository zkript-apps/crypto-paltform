type Props = {
    lists: {
            title: string
            body: string
            subList?: {
                    title: string,
                    body: string,
            } 
    }[]
}

const OrderedLists = ({lists}: Props) => {
    return (
        <ol className="mt-5 list-decimal ml-4 space-y-3">
            {lists.map((list, index) => (
                <li key={index}>
                    <strong>{list.title}</strong>: {" "}
                    {list.body}
                    {list.subList && (
                        <ul className="list-disc ml-4 mt-2"><li>
                            <i>{list.subList.title}</i>: {" "}
                            {list.subList.body}</li>
                        </ul>
                    )}
                </li>
            ))}
        </ol>
    )
}

export default OrderedLists