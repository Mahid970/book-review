const ListedBookCard = ({ book }) => {
  console.log(book);
  return (
    <div>
      <div>{book.bookName}</div>
    </div>
  );
};

export default ListedBookCard;
