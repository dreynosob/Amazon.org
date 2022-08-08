import React from 'react';
//css
import '../styles/Book.css'
const Book = (props) => {
    const { img, title, author, price} = props.book
    return ( 
        <article className='book'>
            <img src={img} alt=''/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <h5>{price}</h5>
            <div className='botones'>
            
            

            </div>
            

        </article>
     );
}
 
export default Book;