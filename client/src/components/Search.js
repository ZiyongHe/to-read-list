import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { viewBook, saveBook } from '../utils/API'
import axios from 'axios'

function Search() {
  const [books, setBooks] = useState([])
  const [input, setInput] = useState('')

  const handleInput = (event) => {
    const search = event.target.value.trim().toLowerCase().split(' ').join('+')
    setInput(search)
  }

  const handleSearch = (input) => {
    setInput('')
    const query = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyCZ5Bm_AfqWpsNhTxOi7RNLyHrvdGwU17U`
    setInput('')
    // // const key = 'AIzaSyDUw9dPFHVx5JKmA_EEKyYhlwRA68Y9rMs'
    axios
      .get(query)
      .then((response) => {
        return response.data.items
      })
      .then((data) => {
        setBooks(data)
      })
  }

  return (
    <Container>
      <form className="my-3">
        <input
          className="w-50"
          type="text"
          id="search"
          placeholder="Search book here..."
          onChange={(event) => handleInput(event)}
        ></input>
        <input
          type="button"
          Value="Search"
          onClick={() => handleSearch(input)}
          className="mx-1"
        ></input>
      </form>

      {books
        ? books.map((book, index) => {
            if (!book.volumeInfo.imageLinks) {
              book.volumeInfo.imageLinks.thumbnail =
                '../utils/imgPlaceholder.JPEG'
            }
            //not in effect yet

            return (
              <Row className="p-3">
                <Col xs={3}>
                  <img
                    src={
                      book.volumeInfo.imageLinks.thumbnail
                        ? book.volumeInfo.imageLinks.thumbnail
                        : '../utils/imgPlaceholder.JPEG'
                    }
                    alt={book.volumeInfo.title}
                  />
                </Col>
                <Col xs={8}>
                  <h4>{book.volumeInfo.title}</h4>
                  <h5>{book.volumeInfo.authors}</h5>
                  <p>{book.volumeInfo.description}</p>
                </Col>
                <Col xs={1}>
                  <input
                    type="button"
                    style={{ width: '70px' }}
                    onClick={() => viewBook(book.volumeInfo.infoLink)}
                    className="my-3"
                    value="View"
                  ></input>
                  <input
                    type="button"
                    style={{ width: '70px' }}
                    id="save"
                    onClick={(event) => {
                      saveBook(books[index])
                      event.target.value = 'Saved'
                    }}
                    value="Save"
                  ></input>
                </Col>
              </Row>
            )
          })
        : 'Search for some books.'}
    </Container>
  )
}

export default Search
