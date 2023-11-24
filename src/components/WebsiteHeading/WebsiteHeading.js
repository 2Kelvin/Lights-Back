import lights from '../../images/lights.jpg';
import './WebsiteHeading.css';

function WebsiteHeading() {
    return (
        <div className="websiteHeading">
            <img src={lights} alt='logo' />
            <h1>LIGHTS BACK</h1>
        </div>
    );
}

export default WebsiteHeading;