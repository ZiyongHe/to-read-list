const key = API_KEY
const API_KEY = 'AIzaSyDUw9dPFHVx5JKmA_EEKyYhlwRA68Y9rMs'

export function searchBook(title) {}

export function getSavedBooks() {
  fetch('/saved').then((res) => res.json())
}

export function saveBook(data) {
  fetch('/saved', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  }).then((res) => res.json())
  // change button here as saved indicator
}

export function deleteBook(title) {
  fetch(`/:${title}`).then((res) => res.json())
}
