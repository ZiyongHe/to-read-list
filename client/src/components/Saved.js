import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getSavedBooks } from '../utils/API'

function Saved() {
  const [books, setBooks] = useState([
    {
      title: '',
      author: '',
      description: '',
      image: '',
    },
  ])

  useEffect(() => {
    getSavedBooks().then((result) => setBooks(result))
  }, [books])

  return (
    <Container>
      {books
        ? books.map((book) => {
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
                  <button>View</button>
                  <button>Save</button>
                </Col>
              </Row>
            )
          })
        : 'No books saved, go save some books!'}
    </Container>
  )
}

export default Saved
