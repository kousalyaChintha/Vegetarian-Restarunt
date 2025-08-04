import "./Link.css"
function Link(props){
    return(
        <div className="links">
        <a href = {props.link}>{props.name}</a>
        </div>
    )
}

export default Link;