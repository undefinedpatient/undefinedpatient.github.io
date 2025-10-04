import Image from "next/image";
import Link from "next/link";
import { doto, playfair_display } from "@/app/ui/fonts";
export default function BookCover() {
  return (
    <main className={`${playfair_display.className} main-book-cover`}>
      <Image src="/imgs/bookCover.jpg" alt="" className="image-background" width={1920} height={1080} />
      <section className="section-book-cover">
        <span className="p-4 text-3xl absolute top-4 lg:right-4">Twenty Anniversary Edition</span>
        <header className="flex-4">
          <h1>Patient</h1>
          <hr className="w-[min(100%,24rem)]" />
          <span className={`${doto.className} text-3xl`}>Programmer | Artist</span>
          <p className={`${doto.className} text-base md:text-xl max-w-[64ch]`}>
            The Journey of a autistic mind who determined to make the purest story in the world.
          </p>
        </header>
        <Link className={`${playfair_display.className} link-underline-animated text-3xl flex-1`} href='/table-of-content'>Start Reading &rarr;</Link>

      </section>
    </main>
  )
}
