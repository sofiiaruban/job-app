import PostedDay from "./PostedDay";
function JobCard({src, title, name, date }:{src:string, title:string, name:string, date: string }) {

    return (
        <>
        <h2>{title}</h2>
        <p className="text-3xl font-bold underline text-red-600">Department name • {name}</p>
        <p></p>
        <PostedDay date={date}/>
        </>

    );
}
export default JobCard;
