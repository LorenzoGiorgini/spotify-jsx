import SingleCardMorning from "./SingleCardMorning"

const GoodMorning = (props) => {
    return (
        
            
            <section id="album-cards">
                <div className="container-fluid">
                <h2>Good morning</h2>
                    <div className="row py-2" id="good-mor">
                        {
                            props.fetchData && 
                            props.fetchData.slice(0 ,6).map(morning => {
                                return <SingleCardMorning data={morning} />
                            })
                        }
                    </div>
                </div>
            </section>
           
        
    )
}

export default GoodMorning