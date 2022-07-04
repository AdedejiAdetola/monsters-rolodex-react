import Card from "./Card";

//Display iterations of the list
const CardList = (props) => {
    console.log(props)
    const state = props.state;
    return ( 
        <div>
            <ul className="gridify">
                {
                    state.map(statee => {
                        return (
                            <Card input={props.input} statee={statee} key={statee.id}/>
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default CardList;