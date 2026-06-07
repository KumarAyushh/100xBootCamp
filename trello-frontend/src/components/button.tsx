

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
        <div style={{ paddingRight: "8px", display: "flex", alignItems: "center" }}>
            {props.leftIcon}
        </div>
        {props.children}
        <div style={{ paddingLeft: "8px", display: "flex", alignItems: "center" }}>
            {props.rightIcon}
        </div>
    </div>
  )
}

export default Button