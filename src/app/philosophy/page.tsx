import Image from "next/image";
import Link from "next/link";
import PageFooter from "@/app/components/PageFooter";
import { playfair_display } from "../ui/fonts";

import philosohyImage from "@/../public/imgs/philosophy.jpg";
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
                        while I observe those who blindly follow popular currents without reflection—and watch them bear the consequences of their own thoughtlessness.
                        How entertaining it is!

                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;I do read some books, whenever I get spare time &#40;Which I do not&#41; I will read, currently enlightened by Lovecraft.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;Bands? Linkin Park, Starset, Thousand Foot Krutch are 3 of my favourites.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;Cat? Cat is the utlimate god we should all adore and admire. The fattier the better.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;AI? Sorry I do not have much interest in it, just a bunch of neurons, nothing else but a trend, but if I got 48hours a day I would definitely learn it.
                    </p>
                    <br />
                    <p>
                        &emsp;&emsp;DEI? How deep must the insecurity run for someone to invent a whole new belief system just to feel included? Honestly, just be confident, I am more self-assured than they are
                    </p>
                    <br />
                    <p>
                        &quot;Discipline pairs with Freedom, without Freedom, you do not need it, without discipline, you do not deserve it&quot;
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