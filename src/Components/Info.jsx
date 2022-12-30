import userImg from '../assets/Rectangle 90.png';
import EmailIcon from '../assets/Icon.png';
import LinkedInIcon from '../assets/Vector.png';

function Info() {
    return (
        <div className="info">
            <img className="userImage" src={userImg} alt="User Image" />
            <div className="general">
                <h3 className="name">Laura Smith</h3>
                <div className="jobTitle">Front End Developer</div>
                <a className="websiteLink">laurasmith.website</a>
            </div>
            <div className="buttons">
                <button className="email">
                    <img src={EmailIcon} alt="" />
                    Email
                </button>
                <button className="linkedIn">
                    <img src={LinkedInIcon} alt="" /> LinkedIn
                </button>
            </div>
        </div>
    );
}

export default Info;
