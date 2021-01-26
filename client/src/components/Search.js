import React from 'react'
import { Container } from 'react-bootstrap'

function Search() {
  const handleSearch = (event) => {
    const search = event.target.value.trim().toLowerCase().split(' ').join('+')
    const query = `https://www.googleapis.com/books/v1/volumes?q=game&key=AIzaSyDUw9dPFHVx5JKmA_EEKyYhlwRA68Y9rMs`
    fetch(query).then((result) =>
      result.items.map((item) => {
        const img = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : ''
        return {
          booksId: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          image: img,
          link: item.volumeInfo.infoLink,
          saved: false,
        }
      })
    )
  }

  return (
    <Container>
      <form style={{ justifyContent: 'center' }}>
        <input
          className="w50"
          type="text"
          id="search"
          placeholder="Search book here..."
        ></input>
        <button onClick={handleSearch}>Search</button>
      </form>
    </Container>
  )
}

export default Search
