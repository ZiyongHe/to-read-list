import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { getSavedBooks, deleteBook, viewBook } from '../utils/API'

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getSavedBooks().then((result) => setBooks(result))
  }, [books])

  return (
    <Container>
      <h3 className="row my-5 display-4 justify-content-md-center">
        Saved Books
      </h3>
      <Table bordered className="row">
        {books.map((book, index) => {
          return (
            <Row className="p-3" bg={'Secondary'}>
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
                  onClick={() => viewBook(book.link)}
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
        })}
      </Table>
    </Container>
  )
}

export default Saved
