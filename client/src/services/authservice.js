const BASE_URL = process.env.REACT_APP_BASE_URL;

function checkStatus(resp) {
  if (!resp.ok) throw new Error(resp.statusMessage);
  console.log(resp);
  return resp.json();
}
function login (inputs) {
    const body = {"auth": {"email": inputs.email, "password": inputs.password}}
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    }
    console.log(init)
    fetch(`${BASE_URL}/api/user_token`, init)
    .then(checkStatus)
    .then(res => {
      localStorage.setItem("jwt", res.jwt)
    })
    .catch(err => console.log(err))
  }
  function register(inputs) {
    const body = {"user": {"email": inputs.email, "password": inputs.password, "password_confirmation": inputs.password}}
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    }
    console.log(init)
    fetch(`${BASE_URL}/api/users`, init)
    .then(res => res.json())
    .catch(err => console.log(err))
  }

export {
  login,
  register
}
