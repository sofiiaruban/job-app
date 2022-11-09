import ApplyBtn from "../components/buttons/ApplyBtn";
import shareIcon from "../assets/share-icon.svg";
import SaveToList from "../components/SaveToList";
import Map from "../components/Map";
import PostedDay from "../components/PostedDay";
import WorkOptionBtn from "../components/buttons/WorkOptionBtn";
import smallMarker from "../assets/small-marker.svg";

function JobDetailed({pictures, title, name, date, salary, description, benefits, employmentType, location, email, phone, adress} : {
                        pictures: string[], 
                        title:string, 
                        name:string,
                        date: string,
                        salary: string, 
                        description:string,
                        benefits: string[],
                        employmentType: string[],
                        location: {[key:string]:number}
                        email: string,
                        phone: string,
                        adress: string,
                        
                    }) {

    return (
        <>
        <header>
            {name}
            <h1>Job Details</h1>
            <div className="saveToList">
                <SaveToList/>
                <span>Save to my list</span>
                <img src = {shareIcon} alt="share  icon" />
                <span>Share</span>
            </div>
        </header>
        <main>
            <ApplyBtn children = "APPLY NOW"/>
            <div className="jobDescriptionHeader">
                <h2>{title}</h2>
                <div className="salary">
                    <span>€ {salary}</span>
                    <span>Brutto, per year</span>
                </div>
            </div>
            <PostedDay date= {date}/>
            <h3>Description</h3>
            <p>{description}</p>
            <ApplyBtn children = "APPLY NOW"/>
            <h2>Additional info</h2>
            <p>Employment type</p>
            {employmentType.map((type, index) => <WorkOptionBtn key={index} children={type}/>)}
            <p>Benefits</p>
            {benefits.map((benefit, index) => <WorkOptionBtn key={index} children={benefit}/>)}
           <h2> Attached images</h2>
           {pictures.map((pictures, index) => <img key={index} src={pictures} className=""/>)}
        </main>
        <aside className="">
        <h2>{name}</h2>
        <address>
            <div className="">
                <img src={smallMarker}/> 
                <span>{adress}</span>
            </div>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
        </address>
        <Map locationLat={location.lat} locationLong={location.long}/>  
        </aside>
        </>
    )

}
export default JobDetailed;