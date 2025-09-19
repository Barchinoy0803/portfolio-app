import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex gap-4 justify-center p-4 footer">
            <a target="_blank" className="text-2xl" href="https://github.com/Barchinoy0803"><FaGithub /></a>
            <a target="_blank" className="text-2xl" href="https://www.linkedin.com/in/barchinoy-yusupova-02bb8234a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgGFJe3DmSNmLnUY32Eh4gQ%3D%3D"><FaLinkedin /></a>
            <a target="_blank" className="text-2xl" href="https://t.me/yusupovabarchinoy"><FaTelegram /></a>
        </div>
    )
}

export default Footer