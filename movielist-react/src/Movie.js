import React from 'react';


export default function Movie(props) {
    const rating = addStars(props.item.rating);
    return (
        <li className='list-group-item' id="movie-list">
            { props.item.title }
            <img src='./delete.png' alt="delete-btn" className='float-end' height='35px' onClick={() => {props.deleteItem(props.item.id)}}/>
            { rating }  
        </li>
    )
}

function addStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src='./star.png' alt='Star' className='float-end' height='25px'/>);
    }
    return stars;
}