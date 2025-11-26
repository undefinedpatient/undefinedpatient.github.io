import Link from "next/link";
import Image from "next/image";
import { playfair_display } from "../ui/fonts";
import PageFooter from "../components/PageFooter";
import ChapterLink from "../components/ChapterLink";

import tableImage from "@/../public/imgs/tableOfContent.webp";
function TableOfContentsPage() {
    return (
        <main className={`${playfair_display.className} main-table-of-contents`}>
            <Image src={tableImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080} />
            <section className="section-table-of-contains-intro">
                <p className="text-3xl">Disordered Patient</p>
                <p className="max-w-[48ch]">
                    <h5 className="letter-spacing-animated">About the Author</h5>
                    <hr className="hr-animated-lr" />
                    &emsp;Patient (Ethan, Choi), born in 2005, discovered early on the joy of creation and the transformative power of computers. Inspired by the possibilities they unlock, he began his journey into the worlds of art and computer science at the age of 18.
                    <br />
                    &emsp;With a keen eye for aesthetics, Ethan is passionate about development with strong emphasis on visual detail and user experience. He is currently exploring the Next.js framework, which he believes will be instrumental in shaping his future career.
                    <br />
                    &emsp;Ethan is currently a junior pursuing a Computer Science degree at&nbsp;
                    <a href="https://hkust.edu.hk/" className="underline">
                        Hong Kong University of Science and Technology
                    </a>
                    &nbsp;where he currently study COMP3031 Scala3 COMP3711 Algorithm COMP3511 OS.
                    <br />
                    <br />
                    <hr className="hr-animated-lr" />
                </p>
            </section>
            <section className="section-table-of-contents">
                <h2 className="text-nowrap whitespace-nowrap">Table of Contents<hr className="w-[min(100%,24rem)]" /></h2>
                <div>
                    <ol>
                        <li>
                            <ul>
                                <li>
                                    <ChapterLink text="Home" url="/" description="" pageNumber={0} className="link-underline-animated text-3xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Philosophy" url="/philosophy" description="" pageNumber={2} className="link-underline-animated text-xl"/>
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <ChapterLink text="Dev" url="/dev" description="" pageNumber={3} className="link-underline-animated text-3xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Experiences" url="/dev/experiences" description="" pageNumber={4} className="link-underline-animated text-xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Tech Stacks" url="/dev/tech-stacks" description="" pageNumber={5} className="link-underline-animated text-xl"/>
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <ChapterLink text="Art" url="/art" description="" pageNumber={6} className="link-underline-animated text-3xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Gallery" url="/art/gallery" description="" pageNumber={7} className="link-underline-animated text-xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Individual Arts" url="/art/individual-arts" description="" pageNumber={8} className="link-underline-animated text-xl"/>
                                </li>
                                <li>
                                    <ChapterLink text="Collaborative Arts" url="/art/collaborative-arts" description="" pageNumber={9} className="link-underline-animated text-xl"/>
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <hr className="w-[min(100%,24rem)]" />
                        <li>
                            <ul>
                                <li>
                                    <Link href="/laboratory" className="link-underline-animated text-xl">
                                        <span>Laboratory</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>

            </section>
            <PageFooter previousUrl="/" currentPage={1} nextUrl="/philosophy"/>
        </main>
    );
}

export default TableOfContentsPage