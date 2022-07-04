const Card = (props) => {
    //console.log(props);
    const statee = props.statee;
    return ( 
        statee.name.toLowerCase().includes(props.input.toLowerCase()) 
        &&
        <div className="monster">
            <img src={`https://robohash.org/${statee.id}?set=set2&size=180x180`} alt='monster'/>
            <h1>{statee.name}</h1>
            <p>{statee.username}</p>
            <p>{statee.email}</p>
        </div>
     );
}
 
export default Card;