import Image from "next/image";
import { GalleryCardProperties } from "../lib/componentProperites";

function GalleryCard(props: GalleryCardProperties) {
    return (
        <div className="gallery-card">
            <h4>{props.title}</h4>
            <hr/>
            <span>{props.subtitle}</span>
            <p>{props.description}</p>
            <Image src={props.src} priority={true} placeholder="blur" alt="" fill={true} />
        </div>
    );
}

export default GalleryCard;