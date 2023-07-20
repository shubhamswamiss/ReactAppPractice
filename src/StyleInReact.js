import './Style.css'
import style from './custom.module.css'
export default function StyleInReact(){
    return(
        <div>
            <h1 className='primary'>Style In React using className</h1>
            <h1 style={{color:'brown', backgroundColor:'yellow'}}>Inline Style In React </h1>
            <h1 className={style.success}>Style Using Module</h1>
        </div>
    )
}

