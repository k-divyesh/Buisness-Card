import twitter from '../assets/TwitterIcon.png';
import faceBook from '../assets/FacebookIcon.png';
import instagram from '../assets/InstagramIcon.png';
import github from '../assets/GitHubIcon.png';

export default function Footer() {
    return (
        <footer>
            <img src={twitter} />
            <img src={faceBook} />
            <img src={instagram} />
            <img src={github} />
        </footer>
    );
}
