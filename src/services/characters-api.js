const BASE_URL = '/api/characters';

export function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    header: { 'content-type': 'application/json' }
  }).then(res => res.json());
}

export function create(character) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json());
}

export function update(character) {
  return fetch(`${BASE_URL}/${character._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
