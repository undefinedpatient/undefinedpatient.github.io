import { ProgressBarProperties } from "../lib/componentProperites";
import "@/app/ui/components/progressBar.css";

function ProgressBar(props: ProgressBarProperties) {
    return (
        <div className="progress-bar">
            {
                Array.from({ length: props.proportions }).map((_, i) => {
                    if (i / props.proportions > props.progression)
                    return (
                        <span key={i} className="progress-bar-box-off" />
                    )
                    return (
                        <span key={i} className="progress-bar-box-on" />
                    )

                })
            }
        </div>
    )
}

export default ProgressBar;