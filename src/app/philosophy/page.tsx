import Image from "next/image";
import Link from "next/link";
import PageFooter from "@/app/components/PageFooter";
import { playfair_display } from "../ui/fonts";

function PhilosophyPage(){
    return (
        <main className={`${playfair_display.className} main-philosophy`}>
            <Image src="/imgs/philosophy.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section className="section-philosophy">
                <h2>Philosophy</h2>
                <hr className="hr-animated-rl"/>
                <div className="overflow-y-scroll">
                    <p className="p-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sint molestiae corporis minima et tenetur optio,
                        excepturi nostrum exercitationem quas eaque nihil molestias dolor consequatur soluta maxime id ipsa eos?
                    </p>
                </div>
                <hr className="hr-animated-lr"/>
                <Link href="/table-of-contents" className="link-underline-animated text-xl">Back to Table of Contents</Link>
            </section>
            <section>
            </section>
            <PageFooter previousUrl="/table-of-contents" currentPage={2} nextUrl="/dev"/>

        </main>
    )
}

export default PhilosophyPage;