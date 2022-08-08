import React from 'react';
import Book from './Book';

//css
import '../styles/BookList.css'



const books =[
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg',
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: '30€'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg',
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: '80€'
    
    },
    
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg',
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: '80€'
    
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51tSl2hh5UL._SX379_BO1,204,203,200_.jpg',
        title: 'High Performance Browser Networking',
        author: 'lya Grigorik',
        price: '100€'
    
    },
    
     {
        img: 'https://m.media-amazon.com/images/I/51OtdTsaPRL.jpg',
        title: 'How JavaScript Works',
        author: 'Douglas Crockford',
        price: '50€'
    
    },
    
    
     {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41C7zeWNsFL._SX473_BO1,204,203,200_.jpg',
        title: 'A Million Zeros',
        author: 'Douglas Crockford',
        price: '60€'
    
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/61YE2rXD53L._SY498_BO1,204,203,200_.jpg',
        title: 'A Million And One Random Digits',
        author: 'Douglas Crockford',
        price: '70€'
    
    },
    
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51PKxi4d03S._SX379_BO1,204,203,200_.jpg',
        title: 'JavaScript: Patterns    ',
        author: 'Douglas Crockford',
        price: '40€'
    
    },
    
     {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41Tbi1m6uFL._SX331_BO1,204,203,200_.jpg',
        title: 'JavaScript: JavaScript Programming',
        author: 'Craig Berg ',
        price: '90€'
    
    },
     {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51tSl2hh5UL._SX379_BO1,204,203,200_.jpg',
        title: 'High Performance Browser Networking',
        author: 'lya Grigorik',
        price: '100€'
    
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/412w7SEE1aL._SX351_BO1,204,203,200_.jpg',
        title: 'A Smarter Way to Learn JavaScript',
        author: 'Mark Myers',
        price: '100€'
    
    },
    {
        img: 'https://pictures.abebooks.com/isbn/9780596802790-es.jpg',
        title: 'High Performance JavaScript',
        author: 'MZakas, Nicholas C.',
        price: '100€'
    
    }

] 





const BookList = () => {
    return ( 
        <section className='booklist'>
           {books.map((book)=> {
            const { img, title, author, price} = book;
            return <Book book={book}></Book>
            
           })}
          
           

        </section>
     );
}
 
export default BookList;