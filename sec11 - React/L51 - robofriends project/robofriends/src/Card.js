import React from "react";

//!-> What is props ?
// https://builtin.com/articles/react-props
// Props is a special keyword in React that stands for properties 
// and is used for passing data from one component to another. 
// Data with props are passed in a unidirectional flow from parent to child.


// ES6 STYLE
const Card = ({ name, email, id }) => {
// const Card = (props) => {
    // const { name, email, id } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img src={`https://robohash.org/${props.id}?200x200`} alt='profilePhoto' /> */}
            <img src={`https://robohash.org/${id}?200x200`} alt='profilePhoto' />
            <div>
                {/* <h2>{props.name}</h2>
                <p>{props.email}</p> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;