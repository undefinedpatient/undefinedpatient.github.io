import { LinkPanelProperties } from "../lib/componentProperites";
import "@/app/ui/components/linkPanel.css";

function LinkPanel(props: LinkPanelProperties){
    return (
        <div className="link-panel">
            {props.children}
        </div>
    )
}

export default LinkPanel;