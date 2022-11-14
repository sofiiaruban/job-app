import ApplyBtn from "../components/buttons/ApplyBtn";
import shareIcon from "../assets/share-icon.svg";
import SaveToList from "../components/SaveToList";
import Map from "../components/Map";
import PostedDay from "../components/PostedDay";
import WorkOptionBtn from "../components/buttons/WorkOptionBtn";
import smallMarker from "../assets/small-marker.svg";
import ReturnBtn from "../components/buttons/ReturnBtn";
import mapCircle from "../assets/map-circle.svg";

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
    const jobTitle = title.replace(/\.$/, "");
    const jobOverview: Array<string> = getSenteces(description, "\n" , "Responsopilities:\n");
    const jobResponsopilities: Array<string> = getSenteces(description, "Responsopilities:\n", "\nCompensation");
    const jobCompensationAndBenefits: Array<string> = getSenteces(description, "Benefits:\n\t");

    return (
        <>
            <div className="flex flex-row max-lg:flex-col px-40  max-xl:px-20 max-lg:px-16 max-md:px-10 max-sm:px-5 max-[405px]:pr-0 py-5 text-dark-blue-text bg-white ">
                <div className="flex flex-col w-3/6 mr-10  max-xl:w-full">
                    <header className="flex justify-between md:border-b-2 md:border-bc-grey pb-1 max-md:flex-col">
                        <h1 className="font-bold text-2xl max-md:mb-2 max-md:border-b-2 max-md:border-bc-grey">Job Details</h1>
                        <div className="flex flex-row ">
                            <div className="flex flex-row" >
                                <SaveToList index={index}/>
                                <span className="pt-1 pr-3">Save to my list</span>
                            </div>
                            <div className="flex flex-row">
                                <img src={shareIcon} className="w-9 h-9" alt="share icon" />
                                <span className="pt-1">Share</span>
                            </div>
                        </div>
                    </header>
                    <main>
                        <ApplyBtn classes="hidden md:block" children="APPLY NOW"/>
                        <div className="max-[785px]:relative ">
                            <div className="flex mb-2 max-[785px]:flex-col">
                                <h2 className="text-2xl font-bold pr-6 xl:max-w-md max-[780px]:w-full max-lg:mr-20 max-[820px]:mr-12  max-[800px]:mr-8 max-[790px]:mr-6 max-[780px]:mr-4 max-lg:pr-1 max-sm:pr-0" >{jobTitle}</h2>
                                <div className="max-xl:pl-10  max-[715px]:pl-5  max-[685px]:pl-3 max-[685px]:pl-0 pr-4  max-[715px]:pr-2 max-lg:flex max-lg:items-start  max-[785px]:items-end max-lg:flex-col">
                                    <div className="text-xl font-bold order-last">€ {salary}</div>
                                    <div>Brutto, per year</div>
                                </div> 
                            </div>
                            <PostedDay className="text-text-grey-date mb-2 max-[785px]:absolute max-[785px]:top-56 max-[760px]:top-20 max-[760px]:top-20 max-[560px]:top-28 max-[440px]:mb-0" date={date} />
                        </div>
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
                        <ApplyBtn children="APPLY NOW"/>
                        <h2 className="mt-5 font-bold  text-2xl pb-1 border-b-2 border-bc-grey mb-2">Additional info</h2>
                        <p className="mb-2 pt-2">Employment type</p>
                        {employmentType.map((type, index) => <WorkOptionBtn styleClasses={"border-brc-dark-blue bg-bcg-ligth-blue text-fc-blue mb-2"} key={index} children={type} />)}
                        <p className="mb-2">Benefits</p>
                        {benefits.map((benefit, index) => <WorkOptionBtn styleClasses={"border-brc-yellow bg-bgc-yellow  text-fc-yellow mb-7"} key={index} children={benefit} />)}
                        <h2 className="font-bold  text-2xl pb-1 border-b-2 border-bc-grey mb-5">Attached images</h2>
                        <div className="flex">{pictures.map((pictures, index) => <img key={index} src={pictures} className="w-96 max-h-36 rounded mb-10 mr-3 last:mr-0" />)}</div>
                    </main>
                </div>
                <h3 className="max-lg:font-bold max-lg:text-xl max-lg:pb-1  max-lg:border-b-2 hidden max-lg:border-bc-grey max-lg:block mb-5">Contacts</h3>
                <aside className="ml-8 max-xl:ml-6 max-lg:ml-4  rounded-t-lg w-[400px] max-[440px]:w-[380px] h-[218px] text-fc-white bg-blue-map max-md:mx-auto mb-10">
                        <div className="p-10  bg-no-repeat" style={{backgroundImage: `url(${mapCircle})`}}>
                        <h2 className="font-bold font-xl mb-3">{name}</h2>
                        <address className="flex flex-col">
                            <div className="flex mb-1 ">
                                <img className="mr-2" src={smallMarker} alt="location icon"/>
                                <span className="not-italic">{adress}</span>
                            </div>
                            <a className="mb-1 not-italic" href={`tel:${phone}`}>{phone}</a>
                            <a className="mb-1 not-italic" href={`mailto:${email}`}>{email}</a>
                        </address>
                    </div>
                    <Map classes="w-[400px] h-[218px]  max-[440px]:w-[380px] rounded-b-lg" locationLat={location.lat} locationLong={location.long} />
                </aside>
            </div>
            <ReturnBtn />
        </>
    )

}
export default JobDetailed;
