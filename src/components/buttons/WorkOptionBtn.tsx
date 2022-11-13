function WorkOptionBtn({children, styleClasses} : {children: string, styleClasses: string}) {
return (
    // bcg blue #DEE3EF brc #A1B1DB fc #55699E
    //bgc yellow #FFCF00   brc #FFCF00 fc #988B49
    <button className={`px-3 py-2 text-center  border-2 rounded  mr-2 ${styleClasses}`}>{children}</button>
)
}
export default  WorkOptionBtn;