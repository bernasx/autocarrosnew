import { IconType } from "react-icons"
type Props = {
    className: string,
    onClick: Function,
    icon: IconType,
    size:number
}

const IconButton = (props:Props) => {
    const { onClick, icon:Icon, size} = props
    let {className} = props
    return <button className={className} onClick={()=> onClick()}> <Icon size={size}/> </button>
}

export default IconButton