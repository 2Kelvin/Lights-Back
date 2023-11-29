import './Tips.css';
import WebsiteHeading from '../WebsiteHeading/WebsiteHeading';

export default function Tips() {
    return (
        <div className="tips">
            <WebsiteHeading />
            <h3>Tips</h3>
            <ul>
                <li>
                    Copy the link to your location on google maps and share it in the email. If you don't know how, follow this simple 1 minute <a target='blank' href='https://www.youtube.com/watch?v=BAPK7aoWfiQ'>tutorial</a>
                </li>
                <li>
                    Your email subject should be less than 10 words.
                </li>
                <li>
                    Don't include lengthy details in the email subject, you'll include this in the message section.
                </li>
                <li>
                    Provide your exact location in the email subject.
                </li>
                <li>
                    Example of a good email subject: Reporting a black out in Makongeni Phase 4, Thika.
                </li>
                <li>
                    If it's a personal power issue, you can provide your contact number for cutomer care to reach out.
                </li>
                <li>
                    Include your full name in the name section (provide atleast two names).
                </li>
            </ul>
        </div >
    );
}