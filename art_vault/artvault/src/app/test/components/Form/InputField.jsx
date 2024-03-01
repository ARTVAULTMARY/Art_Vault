export default function InputField(props) {
    const {
        label,
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value,
    } = props;

    return (
        <div className="flex flex-col mb-4 w-full items-center">
            <div className="w-2/3">
                <label className="flex text-gray-700 text-sm font-bold mb-2">{label}</label>
                <input type={type} name={name} value={value} onChange={handleChange} className="flex shadow appearance-none border rounded self-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                {errorMessage && !isValid ? <span>{errorMessage}</span> : <span></span>}
            </div>
        </div>
    );
}
