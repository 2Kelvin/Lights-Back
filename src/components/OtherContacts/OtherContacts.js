import './OtherContacts.css';

function OtherContacts() {
    return(
        <section className="otherContacts">
            <h2>Other contacts to reach out to KPLC customer care</h2>
            <div className='parent'>
                <div className='childDiv tel'>
                    <h3>TELEPHONE NUMBERS</h3>
                    <p>+254 203201000</p>
                    <p>0703070707</p>
                    <p>0732170170</p>
                </div>
                <div className='childDiv ussd'>
                    <h3>USSD</h3>
                    <p>*977#</p>
                </div>
                <div></div>
            </div>
        </section>
    );
}

export default OtherContacts;