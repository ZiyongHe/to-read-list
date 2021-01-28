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
  return fetch('/saved', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSave),
  }).then((res) => {
    res.json()
  })
}

export function deleteBook(id) {
  fetch(`/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export function viewBook(link) {
  window.location.href = link
}
