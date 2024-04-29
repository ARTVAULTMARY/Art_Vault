export default function FormGenerator(props) {
    return (
        <div>
            {props.inputData.map((element, i) => {
                return (
                    <div key={i} className="my-2">
                        <p>{element[0]}</p>
                        <input
                            placeholder={element[3]}
                            className="bg-[#dddddd] p-1.5 rounded-lg w-96"
                            value={element[1]}
                            onChange={(event) => element[2](event.target.value)}
                        ></input>
                    </div>
                )
            })}
        </div>
    )
}