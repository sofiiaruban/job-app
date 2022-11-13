import leftArrow from "../../assets/arrow-left-blue.svg";
import { useNavigate } from 'react-router-dom';

function ReturnBtn() {
    const navigate = useNavigate();

    function clickHandler() {
        navigate('/');
    }

    return (
        <button className="border border-brc-grey-btn pl-8 pr-6 py-4 bg-[left_0.6rem_top_0.9rem] bg-auto ml-5 bg-no-repeat m-5 rounded-lg font-semibold text-xs text-dark-blue-btn bg-bc-grey-btn ml-20" 
        style={{backgroundImage: `url(${leftArrow})`}} onClick={clickHandler}>RETURN TO JOB BOARD</button>
    )
}
export default ReturnBtn;