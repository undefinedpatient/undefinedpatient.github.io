import { ProgressionCardProperties } from "../lib/componentProperites";
import ProgressBar from "./ProgressBar";
import "@/app/ui/components/cardTable.css";
function ProgressionCard(props: ProgressionCardProperties){
    return (
        <div className="progression-card">
            <h6>{props.title}</h6>
            <p>{props.description}</p>
            <ProgressBar progression={props.progression}/>
        </div>
    )
}

export default ProgressionCard;