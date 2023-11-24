import './Tips.css';
import WebsiteHeading from '../WebsiteHeading/WebsiteHeading';

export default function Tips() {
    return (
        <div className="tips">
            <WebsiteHeading/>
            <h3>Tips</h3>
            <p>
                Copy the link to your location on google maps and share it in the email. If you don't know how, follow this simple 1 minute <a target='blank' href='https://www.youtube.com/watch?v=BAPK7aoWfiQ'>tutorial</a>
            </p>
        </div >
    );
}