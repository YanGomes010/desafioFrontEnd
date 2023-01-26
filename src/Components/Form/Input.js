import "./input.module.css"

export default function Input({text,placeholder, type, id,src,ref, name,value}){
    return (
        <div>
            <label from={name}>{text}
                <input ref={ref} value={value} type={type} name={name}  id={id} placeholder={placeholder}/>
                {src !== "" && <img className="img_show" alt="showPassword" src={src}/>}
            </label>
        </div>
    )
}