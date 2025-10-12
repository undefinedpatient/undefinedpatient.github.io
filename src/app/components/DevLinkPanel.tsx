import Link from "next/link";
import LinkPanel from "./LinkPanel";
import Image from "next/image";

function DevLinkPanel() {
    return (
        <LinkPanel>
            <Link target="_blank" href={"https://github.com/undefinedpatient"} className="link-svg">
                <Image src={"/svgs/github.svg"} alt="GitHub" fill={true}></Image>
            </Link>
        </LinkPanel>

    )
}

export default DevLinkPanel;