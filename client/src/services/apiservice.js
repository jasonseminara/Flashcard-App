const BASE_URL = process.env.REACT_APP_BASE_URL;

function checkStatus(resp) {
  if (!resp.ok) throw new Error(resp.statusMessage);
  return resp.json();
}

function getDecks() {
  return fetch(`${BASE_URL}/decks`)
  .then(checkStatus);
}

export {
  getDecks,
}
