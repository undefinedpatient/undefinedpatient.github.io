import "@/app/ui/components/chapterOverviewCard.css";

function ChapterOverviewCard(props: ChapterOverviewProperties){
    
    return (
        <div className="chapter-overview-card-dev">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default ChapterOverviewCard;