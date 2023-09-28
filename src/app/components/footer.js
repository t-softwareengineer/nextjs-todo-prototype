import Image from 'next/image';
import { FaGithubAlt } from "react-icons/fa6";

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="footer">
      <span>
        <Image 
          src="/vercel.svg" 
          alt="Vercel Logo"
          width={72}
          height={16}
          >
        </Image>
      </span>
      <small className="d-block mt-2 text-uppercase">
        copyright &copy; {currentDate.getFullYear()}
      </small>
      <small>Created by <FaGithubAlt /> t-softwareengineer</small>
    </footer>
  );
}

export default Footer;