function PracticeAreas(){
    return (
        <div className = "practice-areas-container">
            <div className = "practice-areas-header">
                <h2>Practice Areas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className = "practice-areas-list">
                <Block
                    icon = "image-icon"
                    title = "Bankruptcy Law"
                    text = "Lorem ipsum dolor sit amet consectetur."

                />
                <Block
                    icon = "image-icon-two"
                    title = "Business Law"
                    text = "Lorem ipsum dolor sit amet consectetur."

                />
                <Block
                    icon = "image-icon-three"
                    title = "Civil Rights Law"
                    text = "Lorem ipsum dolor sit amet consectetur."

                />
            </div>
        </div>
    )
}


function Block({icon, title, text}){
    return (
        <div className = "block-practiceAreas">
            <div className = {icon}></div>
            <h3> {title}</h3>
            <p className = "block-text"> {text}</p>
        </div>
    )

}

export default PracticeAreas;