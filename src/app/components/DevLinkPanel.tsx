import Link from "next/link";
import LinkPanel from "./LinkPanel";
import Image from "next/image";
import githubSvg from "@/../public/svgs/github.svg";
function DevLinkPanel() {
    return (
        <LinkPanel>
            <Link target="_blank" href={"https://github.com/undefinedpatient"} className="link-svg">
                <Image src={githubSvg} alt="GitHub" fill={true}></Image>
            </Link>
        </LinkPanel>

    )
}

export default DevLinkPanel;