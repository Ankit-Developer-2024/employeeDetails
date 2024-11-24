

export default function Button({handleClick, marginRight , width,textColor,marginTop,backgroundColor,textpadding,buttonType,children }) {
     
    const buttonStyle = {
        color: textColor ?? "white",
        backgroundColor:backgroundColor ?? "DodgerBlue",
        padding: textpadding ?? "10px",
        width: width ?? "100%",
        border:"0px",
        marginTop:marginTop ?? "10px",
        marginRight:marginRight ?? "0px",
        fontWeight:"700px",
        borderRadius:"0.5rem",
        display: "inline"
      };

    return (
        <>
        <button
        type={buttonType?? "submit"}
        style={buttonStyle}
        className="Common-Button" onClick={(e)=>handleClick(e)}>{children }</button>
        </>
    );
}