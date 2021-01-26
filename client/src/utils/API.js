const API_KEY = 'AIzaSyDUw9dPFHVx5JKmA_EEKyYhlwRA68Y9rMs'
const key = API_KEY

export function searchBook(title) {}

export function getSavedBooks() {
  return fetch('/book/saved').then((res) => res.json())
}

export function saveBook(data) {
  fetch('/book/saved', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  }).then((res) => res.json())
  // change button here as saved indicator
}

export function deleteBook(title) {
  fetch(`/book/:${title}`, {
    method: 'DELETE',
  }).then((res) => res.json())
}
