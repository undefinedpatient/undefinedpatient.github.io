import Image from "next/image";
import { fira_code } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";

function DevExperiencesPage() {
    //Shows array of page options
    return (
        <main className={`${fira_code.className} main-pages`}>
            <Image src="/imgs/paper-texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3>Dev</h3>
            </section>
            <section className="section-pages">
                <div>
                    <h5>Experiences</h5>


                </div>
                <div>
                </div>
            </section>
            <PageFooter previousUrl="/dev" currentPage={4} nextUrl="/dev/tech-stacks" />
        </main>
    )
}

export default DevExperiencesPage;