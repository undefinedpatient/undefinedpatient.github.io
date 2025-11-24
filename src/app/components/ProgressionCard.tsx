import { ProgressionCardProperties } from "../lib/componentProperites";
import ProgressBar from "./ProgressBar";
import "@/app/ui/components/progressionCard.css";
function ProgressionCard(props: ProgressionCardProperties){
    return (
        <div className="progression-card">
            <h6>{props.title}</h6>
            <hr />
            <p>{props.description}</p>
            <ProgressBar progression={props.progression} proportions={props.proportions}/>
        </div>
    )
}

export default ProgressionCard;