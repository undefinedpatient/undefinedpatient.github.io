import { GalleryProperties } from "../lib/componentProperites";
import "@/app/ui/components/gallery.css";
function Gallery(props: GalleryProperties) {
    return (
        <div className="gallery">
            {props.children}
        </div>
    )
}

export default Gallery;