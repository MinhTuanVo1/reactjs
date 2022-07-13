import './title.scss';


function Title({normal, highligh, color} : {normal : string, highligh : string, color : string}) {
    return (
        <div className="title">
            <h1>{normal}</h1>
            <span className='backspace'></span>
            <h1 className={color}>{highligh}</h1>
        </div>
    )
}

export default Title;