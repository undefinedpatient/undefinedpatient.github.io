import Link from "next/link";
import Image from "next/image";
import { playfair_display } from "../ui/fonts";

function TableOfContentsPage() {
    return (
        <main className={`${playfair_display.className} main-table-of-contents`}>
            <Image src="/imgs/tableOfContent.jpg" alt="" className="image-background" width={1920} height={1080} />
            <section className="section-table-of-contains-intro">
                <p className="text-3xl">Disordered Patient</p>
                <p>
                    <span className="text-2xl">About the Author</span>
                    <hr />
                    &emsp;Patient (Ethan, Choi), born in 2005, discovered early on the joy of creation and the transformative power of computers. Inspired by the possibilities they unlock, he began his journey into the worlds of art and computer science at the age of 18.
                    <br />
                    &emsp;With a keen eye for aesthetics, Ethan is passionate about frontend development, placing strong emphasis on visual detail and user experience. He is currently exploring the Next.js framework, which he believes will be instrumental in shaping his future career.
                    <br />
                    &emsp;Ethan is currently a junior pursuing a Computer Science degree at&nbsp;
                    <a href="https://hkust.edu.hk/" className="underline">
                        Hong Kong University of Science and Technology
                    </a>
                    &nbsp;where he maintains a CGA above 3.6 out of 4.3.
                    <br />
                    <br />
                    <hr />
                </p>

                <ul>

                </ul>
            </section>
            <section className="section-table-of-contents">
                <h2 className="text-nowrap whitespace-nowrap">Table of Contents<hr className="w-[min(100%,24rem)]" /></h2>
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
                                    <Link href="/dev" className="link-underline-animated text-3xl">
                                        <span>Dev</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dev" className="link-underline-animated text-xl">
                                        <span>Experiences</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dev" className="link-underline-animated text-xl">
                                        <span>Tech stacks</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dev" className="link-underline-animated text-xl">
                                        <span>Goals</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <Link href="/art" className="link-underline-animated text-3xl">
                                        <span>Art</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/art" className="link-underline-animated text-xl">
                                        <span>Gallery</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/art" className="link-underline-animated text-xl">
                                        <span>Individual Arts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/art" className="link-underline-animated text-xl">
                                        <span>Collaborative Arts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/art" className="link-underline-animated text-xl">
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