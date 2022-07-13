import './inputGroup.scss';

function InputGroup({ label, placeholder, value, onChange, name, type } : 
    { label : string, placeholder : string, value : string, onChange : any, name : string, type : string }) {
    return (
        <div className="inputGroup">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} 
                    value={value} onChange={onChange(name)}
            />
        </div>
    )
}

export default InputGroup;