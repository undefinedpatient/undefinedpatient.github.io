import Image from "next/image";
import Link from "next/link";
import PageFooter from "@/app/components/PageFooter";
import { playfair_display } from "../ui/fonts";

import philosohyImage from "@/../public/imgs/philosophy.webp";
function PhilosophyPage() {
    return (
        <main className={`${playfair_display.className} main-philosophy`}>
            <Image src={philosohyImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080}></Image>
            <section className="section-philosophy">
                <h2 className="letter-spacing-animated">Philosophy</h2>
                <hr className="hr-animated-rl" />
                <div className="overflow-y-scroll">
                    <p>
                        &emsp;&emsp;I believe I am constantly evolving—reshaping my mindset in pursuit of its final, perfected form. 
                        I hold deep respect for those kind souls who work relentlessly to achieve their goals, and I have little patience for those who speak more than they act. 
                        I admire individuals who challenge trends and resist the pull of ignorance, 
                        while I espy those who want to achieve something without paying effort or reflection—and watch them bear the consequences of their own thoughtlessness.
                        How entertaining it is!

                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;Books? I do read some books, I even want to write one, whenever I get spare time &#40;Which I do not&#41; I will read, currently enlightened by Lovecraft.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;Bands? Linkin Park, Starset, Thousand Foot Krutch are 3 of my favourites.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;Cat? The utlimate god we all obey. I am a Cat person.
                    </p>
                    <br />
                    <p>
                        &quot;Discipline pairs with Freedom, without Freedom, you do not need it, without discipline, you do not deserve it!&quot;
                    </p>
                </div>
                <hr className="hr-animated-lr" />
            </section>
            <section>
            </section>
            <PageFooter previousUrl="/table-of-contents" currentPage={2} nextUrl="/dev" />

        </main>
    )
}

export default PhilosophyPage;