function ApplyBtn({children}:any) {
// bgc #384564
// bcg blue #DEE3EF brc #A1B1DB fc #55699E
    return (
        <a>
            <button className="bg-dark-blue-btn p-3 rounded-lg text-white my-5 font-semibold text-xs">{children}</button>
        </a>
    )
}
export default ApplyBtn;