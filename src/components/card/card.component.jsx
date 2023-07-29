import { Component } from "react";

class Card extends Component {


    render() {
        const {name, id} = this.props.monster;
        return (<div className='card-container' key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
        </div>);
    }
}

export default Card;