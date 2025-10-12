import Image from "next/image";
import { fira_code } from "../ui/fonts";
import PageFooter from "../components/PageFooter";

function DevPage() {
    //Shows array of page options
    return (
        <main className={`${fira_code.className} main-pages`}>
            <Image src="/imgs/paper_texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Dev</h3>
            </section>
            <section className="section-pages">
                <div>
                    <Image src="/imgs/mountain0.jpg" alt="mountain0" width={612} height={408} className="image-header shadowed"/>
                    <hr className="hr-animated-lr"/>
                    <h5>Overview</h5>
                    <p></p>

                </div>
                <div>
                    page2<br></br>fasd
                </div>
            </section>
            <PageFooter previousUrl="/philosophy" currentPage={3} nextUrl="/dev/experiences"/>
        </main>
    )
}

export default DevPage;