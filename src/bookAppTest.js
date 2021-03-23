import React from "react";
const Books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY218_.jpg",
    title: "Sapiens: A Brief History of Humankind",
    author: "by Yuval Noah Harari ",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "by Héctor García and Francesc Miralles ",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "by Héctor García and Francesc Miralles ",
  },
];
// function App2() {
//   return (
//     <div className="container">
//       <BookAppTest />
//       <BookAppTest />
//       <BookAppTest />
//     </div>
//   );
// }

function BookList() {
  return (
    <div className="booklist">
      {Books.map((book) => {
        // const { img, title, author } = book;
        return (
          <div>
            <Book {...book} />
            <div className="er">
              <Book {...book} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Book({ img, title, author }) {
  return (
    <div className="bookAppTest">
      <img src={img} alt="book-poster" />
      <h1 className="bookAppTest__title">{title}</h1>
      <h4 className="bookAppTest__author">{author}</h4>
    </div>
  );
}

export default BookList;
