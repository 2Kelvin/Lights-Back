import lights from '../../images/lights.jpg';
import './WebsiteHeading.css';

function WebsiteHeading() {
    return (
        <header className="websiteHeading">
        <img src={lights} alt='logo'/>
            <h1>LIGHTS BACK</h1>
        </header>
    );
}

export default WebsiteHeading;