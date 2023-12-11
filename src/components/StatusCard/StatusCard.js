import './StatusCard.css';

// a pure status card: it's icon & message changes depending on the props passed
// it generates either an email sent successfully card or error sending email card
export default function StatusCard({ theIcon, msg }) {
    return (
        <div className='statusCard'>
            {theIcon}
            <p>{msg}</p>
        </div>
    );
}