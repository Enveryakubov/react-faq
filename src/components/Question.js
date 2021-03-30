import React, {useState} from 'react'

const Question = ({info}) => {
    const [visibility, setVisibility] = useState(true)
    const style = visibility ? {display:"none"}: {display:"block"}
    const sign = visibility ? "+": "-"

    const appear = () => {
        setVisibility(prev =>!prev)
    }
    return (
        <div className="question">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5 style={{margin:"0px"}}>{info.title}</h5>
                <div>
                    <button onClick={appear} className="button">{sign}</button>
                </div>
            </div>
            <p style={style}>{info.info}</p>
        </div>  
    )
}

export default Question
