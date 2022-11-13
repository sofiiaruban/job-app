function PrevNextBtn( {classes, handleClick, icon}:{ classes: string, handleClick: React.MouseEventHandler, icon:string}) {
    return <button className={`w-10 h-5 bg-no-repeat bg-auto mt-2.5 border-grey-pan  ${classes}`} onClick={handleClick} style={{backgroundImage: `url(${icon})`}}></button>
}
export default PrevNextBtn;
