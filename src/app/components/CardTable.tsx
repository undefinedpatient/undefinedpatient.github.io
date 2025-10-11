import { CardTableProperties } from "../lib/componentProperites";

function CardTable(props: CardTableProperties) {
    return (
        <div className="card-table">
            {props.children}
        </div>
    )
}

export default CardTable;