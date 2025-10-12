import Link from "next/link";
import LinkPanel from "./LinkPanel";
import Image from "next/image";

function ArtLinkPanel() {
    return (
        <LinkPanel>
            <Link target="_blank" href={"https://www.deviantart.com/disorderedpatient"} className="link-svg">
                <Image src={"/svgs/deviantArt.svg"} alt="Deviant Art" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.artstation.com/disorderedpatient"} className="link-svg">
                <Image src={"/svgs/artstation.svg"} alt="Deviant Art" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/undefinedpatient/"} className="link-svg">
                <Image src={"/svgs/instagram.svg"} alt="Instagrem" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@disorderedpatient"} className="link-svg">
                <Image src={"/svgs/youtube.svg"} alt="Youtube" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://x.com/und0fined"} className="link-svg">
                <Image src={"/svgs/twitter.svg"} alt="X" fill={true}></Image>
            </Link>
        </LinkPanel>

    )
}

export default ArtLinkPanel;