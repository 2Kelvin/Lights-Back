import './StatusCard.css';


export default function StatusCard({ theIcon, msg }) {
    return (
        <div className='statusCard'>
            {theIcon}
            <p>{msg}</p>
        </div>
    );
}