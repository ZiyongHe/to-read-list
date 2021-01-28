const API_KEY = 'AIzaSyDUw9dPFHVx5JKmA_EEKyYhlwRA68Y9rMs'
const key = API_KEY

export function searchBook(title) {}

export function getSavedBooks() {
  return fetch('/saved').then((response) => response.json())
}

export function saveBook(data) {
  const newSave = {
    title: data.volumeInfo.title,
    author: data.volumeInfo.authors,
    description: data.volumeInfo.description,
    image: data.volumeInfo.imageLinks.thumbnail,
    link: data.volumeInfo.infoLink,
  }
  console.log(newSave)
  return fetch('/saved', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSave),
  }).then((res) => {
    console.log(res)
    res.json()
  })
}

export function deleteBook(title) {
  fetch(`/:${title}`, {
    method: 'DELETE',
  }).then((res) => res.json())
}

export function viewBook(link) {
  window.location.href = link
}
