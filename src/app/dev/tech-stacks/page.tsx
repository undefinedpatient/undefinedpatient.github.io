import Image from "next/image";
import { fira_code } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import CardTable from "@/app/components/CardTable";
import ProgressionCard from "@/app/components/ProgressionCard";

function TechStacksPage() {
    //Shows array of page options
    return (
        <main className={`${fira_code.className} main-pages`}>
            <Image src="/imgs/paper-texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Dev</h3>
            </section>
            <section className="section-pages">
                <div>
                    <h5>Tech Stacks</h5>
                    <hr className="hr-animated-lr"/>
                    <CardTable>
                        <ProgressionCard title="Nextjs" description="No Yet" progression={0.5}/>
                    </CardTable>

                </div>
                <div>
                </div>
            </section>
            <PageFooter previousUrl="/dev/experiences" currentPage={5} nextUrl="/art" />
        </main>
    )
}

export default TechStacksPage;