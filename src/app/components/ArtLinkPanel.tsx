import Link from "next/link";
import LinkPanel from "./LinkPanel";
import Image from "next/image";
import deviantArtSvg from "@/../public/svgs/deviantArt.svg";
import artStationSvg from "@/../public/svgs/artstation.svg";
import instagremSvg from "@/../public/svgs/instagram.svg";
import youtubeSvg from "@/../public/svgs/youtube.svg";
import twitterSvg from "@/../public/svgs/twitter.svg";
function ArtLinkPanel() {
    return (
        <LinkPanel>
            <Link target="_blank" href={"https://www.deviantart.com/disorderedpatient"} className="link-svg">
                <Image src={deviantArtSvg} alt="Deviant Art" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.artstation.com/disorderedpatient"} className="link-svg">
                <Image src={artStationSvg} alt="Art Station" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/undefinedpatient/"} className="link-svg">
                <Image src={instagremSvg} alt="Instagrem" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@disorderedpatient"} className="link-svg">
                <Image src={youtubeSvg} alt="Youtube" fill={true}></Image>
            </Link>
            <Link target="_blank" href={"https://x.com/und0fined"} className="link-svg">
                <Image src={twitterSvg} alt="X" fill={true}></Image>
            </Link>
        </LinkPanel>

    )
}

export default ArtLinkPanel;