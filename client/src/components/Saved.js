import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getSavedBooks, deleteBook } from '../utils/API'

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getSavedBooks().then((result) => setBooks(result))
  }, [books])

  return (
    <Container>
      {books
        ? books.map((book, index) => {
            return (
              <Row className="p-3">
                <Col xs={3}>
                  <img src={book.image} alt={book.title} />
                </Col>
                <Col xs={8}>
                  <h2>{book.title}</h2>
                  <h5>{book.author}</h5>
                  <p>{book.description}</p>
                </Col>
                <Col xs={1}>
                  <input
                    type="button"
                    value="View"
                    style={{ width: '70px' }}
                    className="my-3"
                  ></input>
                  <input
                    type="button"
                    value="Delete"
                    style={{ width: '70px' }}
                    onClick={() => {
                      deleteBook(books[index]._id)
                    }}
                  ></input>
                </Col>
              </Row>
            )
          })
        : 'No books saved, go save some books!'}
    </Container>
  )
}

export default Saved
