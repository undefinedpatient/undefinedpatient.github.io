import { SubSectionHeaderProperties } from "../lib/componentProperites";
import "@/app/ui/components/subSectionHeader.css";

function SubSectionHeader(props: SubSectionHeaderProperties){
    return (
        <span className={`sub-section-header ${props.colour} ${props.size}`}>{props.text}</span>
    )
}

export default SubSectionHeader;