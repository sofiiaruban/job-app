import leftArrow from "../../assets/arrow-left-blue.svg";
import { useNavigate } from 'react-router-dom';

function ReturnBtn() {
    const navigate = useNavigate();

    function clickHandler() {
        navigate('/');
    }

    return (
        <button className="max-md:mt-[200px]  max-[1025px]:mt-[200px] max-md:ml-12 border border-brc-grey-btn pl-8 pr-6 py-4 bg-[left_0.6rem_top_0.9rem] bg-auto ml-5 max-xl:ml-16  max-lg:ml-12 max-md:sm-8  max-md:ml-5 bg-no-repeat mb-10 rounded-lg font-semibold text-xs text-dark-blue-btn bg-bc-grey-btn ml-20" 
        style={{backgroundImage: `url(${leftArrow})`}} onClick={clickHandler}>RETURN TO JOB BOARD</button>
    )
}
export default ReturnBtn;