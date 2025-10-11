import { CardTableProperties } from "../lib/componentProperites";
import "@/app/ui/components/cardTable.css";
function CardTable(props: CardTableProperties) {
    return (
        <div className="card-table-container">
            <h5>{props.title}</h5>
            <span>{props.subtitle}</span>
            <div className="card-table">
                {props.children}
            </div>
        </div>
    )
}

export default CardTable;