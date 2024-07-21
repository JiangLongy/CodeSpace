const ExitComponents = () => {
    const list = [
        { id: 1, name: 'react' },
        { id: 2, name: 'vue' },
        { id: 3, name: 'angular' },
    ]

    const onDel = (id)=>{
        list.splice(id-1,1)
    }
    return (
        <div>
            <p>这是一个额外的组件</p>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <span> {item.name}</span>
                        <button onClick={()=>onDel(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ExitComponents