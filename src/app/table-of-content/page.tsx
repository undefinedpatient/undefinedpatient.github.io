import Link from "next/link";
import Image from "next/image";
import { playfair_display } from "../ui/fonts";

function TableOfContentsPage() {
    return (
        <main className={`${playfair_display.className} main-table-of-contents`}>
            <Image src="/imgs/tableOfContent.jpg" alt="" className="image-background" width={1920} height={1080} />
            <section className="section-table-of-contains-intro">
                
            </section>
            <section className="section-table-of-contents">
                <h2 className="text-nowrap">Table of Contents<hr className="w-[min(100%,24rem)]"/></h2>
                <div>
                    <ol>
                        <li>
                            <ul>
                                <li>
                                    <Link href="/" className="link-underline-animated text-3xl">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Philosophy</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <Link href="/" className="link-underline-animated text-2xl">
                                        <span>Dev</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Experiences</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Tech stacks</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Goals</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <Link href="/" className="link-underline-animated text-2xl">
                                        <span>Art</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Gallery</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Individual Arts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Collaborative Arts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="link-underline-animated text-xl">
                                        <span>Goals</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>

            </section>
        </main>
    );
}

export default TableOfContentsPage