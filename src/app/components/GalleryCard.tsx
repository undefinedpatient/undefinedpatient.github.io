import Image from "next/image";
import { GalleryCardProperties } from "../lib/componentProperites";

function GalleryCard(props: GalleryCardProperties) {
    return (
        <div className="gallery-card">
            <Image src={props.src} alt="" fill={true}/>
            <h6>{props.title}</h6>
            <span>{props.subtitle}</span>
            <p>{props.description}</p>
        </div>
    );
}

export default GalleryCard;