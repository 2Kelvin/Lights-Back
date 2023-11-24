import './SuccessCard.css';
import { MdMarkEmailRead } from "react-icons/md";

export default function SuccessCard() {
    return(
        <div className='successCard'>
            <MdMarkEmailRead className='emailIcon' />
            <p>Success. Email sent!</p>
        </div>
    );
}