import ApplyBtn from "../components/buttons/ApplyBtn";
import shareIcon from "../assets/share-icon.svg";
import SaveToList from "../components/SaveToList";
import Map from "../components/Map";
import PostedDay from "../components/PostedDay";
import WorkOptionBtn from "../components/buttons/WorkOptionBtn";
import smallMarker from "../assets/small-marker.svg";
import ReturnBtn from "../components/buttons/ReturnBtn";
//import mapCircle from "../assets/map-circle.svg";

function JobDetailed({pictures, title, name, date, salary, description, benefits, employmentType, location, email, phone, adress, index} : {
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
                        index?: number,
                        
                    }) {
    function getSenteces(text: string, startWord: string,  endWord?:any) {
        const splittedText=text.split(" ");
        let startIndex = splittedText.indexOf(startWord);
        let endIndex= splittedText.indexOf(endWord);
        const textArray = splittedText.slice(startIndex+1, endIndex ).join(" ").trim().split(/[\\.!?]/);
        
        return textArray;
    }
    const jobOverview: Array<string> = getSenteces(description, "\n" , "Responsopilities:\n");
    const jobResponsopilities: Array<string> = getSenteces(description, "Responsopilities:\n", "\nCompensation");
    const jobCompensationAndBenefits: Array<string> = getSenteces(description, "Benefits:\n\t");

    return (
        <>
            <div className="flex flex-row pl-40 py-5 text-dark-blue-text bg-white">
                <div className="flex flex-col w-3/6 mr-10">
                    <header className="flex justify-between border-b-2 border-bc-grey pb-1 ">
                        <h1 className="font-bold text-2xl">Job Details</h1>
                        <div className="flex flex-row">
                            <div className="flex flex-row">
                                <SaveToList index={index}/>
                                <span className="pt-1">Save to my list</span>
                            </div>
                            <div className="flex flex-row">
                                <img src={shareIcon} alt="share  icon" />
                                <span className="pt-1">Share</span>
                            </div>
                        </div>
                    </header>
                    <main>
                        <ApplyBtn children="APPLY NOW" />
                        <div className="flex mb-2">
                            <h2 className="text-2xl font-bold pr-2 max-w-md">{title}</h2>
                            <div className="pl-14 pr-4">
                                <span className="text-xl font-bold">€ {salary}</span>
                                <br />
                                <span>Brutto, per year</span>
                            </div>
                        </div>
                        <PostedDay className="text-text-grey-date mb-2" date={date} />
                        <p className="mb-5">{jobOverview}.</p>
                        <h3 className="font-bold text-xl mb-2">Responsopilities:</h3>
                        <ul className="mb-5">{jobResponsopilities.map((text, index) => {
                            if(text.length > 0) {
                            return  <li key={index} className="list-[square] list-inside list-bcg-ligth-blue">{text}</li>
                            }
                        })}</ul>
                        <h3 className="font-bold text-xl mb-2">Compensation & Benefits:</h3>
                        <ul>{jobCompensationAndBenefits.map((text, index) => {
                            if(text.length > 0) {
                            return  <li key={index} className="list-[square] list-inside list-bcg-ligth-blue">{text}</li>
                            }
                        })}</ul>
                        <ApplyBtn children="APPLY NOW" />
                        <h2 className="mt-5 font-bold  text-2xl pb-1 border-b-2 border-bc-grey mb-2//">Additional info</h2>
                        <p className="mb-2 pt-2">Employment type</p>
                        {employmentType.map((type, index) => <WorkOptionBtn styleClasses={"border-brc-dark-blue bg-bcg-ligth-blue text-fc-blue mb-2"} key={index} children={type} />)}
                        <p className="mb-2">Benefits</p>
                        {benefits.map((benefit, index) => <WorkOptionBtn styleClasses={"border-brc-yellow bg-bgc-yellow  text-fc-yellow mb-7"} key={index} children={benefit} />)}
                        <h2 className="font-bold  text-2xl pb-1 border-b-2 border-bc-grey mb-3">Attached images</h2>
                        <div className="flex">{pictures.map((pictures, index) => <img key={index} src={pictures} className="w-96 max-h-36 rounded mb-2 mr-3 last:mr-0" />)}</div>
                    </main>
                </div>
                <aside className="ml-6">
                    <div className="p-10">
                        <h2 className="font-bold font-xl mb-3">{name}</h2>
                        <address className="flex flex-col">
                            <div className="flex mb-1 ">
                                <img className="mr-2" src={smallMarker} />
                                <span className="not-italic">{adress}</span>
                            </div>
                            <a className="mb-1 not-italic" href={`tel:${phone}`}>{phone}</a>
                            <a className="mb-1 not-italic" href={`mailto:${email}`}>{email}</a>
                        </address>
                    </div>
                    <Map locationLat={location.lat} locationLong={location.long} />
                </aside>
            </div>
            <ReturnBtn />
        </>
    )

}
export default JobDetailed;