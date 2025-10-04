import Link from "next/link";
import Image from "next/image";
import { inter, playfair_display } from "../ui/fonts";

function TableOfContentPage() {
    return (
        <section className={`${playfair_display.className}`}>
            <Image src="/imgs/tableOfContent.jpg" alt="" className="image-background" width={1920} height={1080}/>
            <Link href="/" className={`${inter.className} a-link-underline-animated`}>Go Back</Link>
            <div>
                <ol>
                    <li>
                        <Link href="/" className="link-underline-animated text-xl">Home</Link>
                    </li>
                    <hr />
                    <li>
                        <Link href="/" className="link-underline-animated text-xl">Dev</Link>
                    </li>
                    <hr />
                    <li>
                        <Link href="/" className="link-underline-animated text-xl">Art</Link>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default TableOfContentPage
