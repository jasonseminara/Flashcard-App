const BASE_URL = process.env.REACT_APP_BASE_URL;
//sharable functions
function checkStatus(resp) {
  if (!resp.ok) throw new Error(resp.statusMessage);
  console.log(resp);
  return resp.json();
}
// Quiz CRUD
function createQuiz(inputs) {
    const body = {"quiz": {"name": inputs.name, "description": inputs.description}}
    const jwt = localStorage.getItem("jwt")
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`},
      mode: 'cors',
      body: JSON.stringify(body)
    }
    console.log(init)
    return fetch(`${BASE_URL}/api/quizzes/`, init)
    .then(checkStatus)
    .catch(err => console.log(err))
  }

// Question CRUD
  function createQuestion(inputs, quizID){
    const body = {"question": {"q_value": inputs.q_value, "a_value": inputs.a_value, "quiz_id": quizID}}
    const jwt = localStorage.getItem("jwt")
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`},
      mode: 'cors',
      body: JSON.stringify(body)
    }
    console.log(init)
    return fetch(`${BASE_URL}/api/questions/`, init)
    .then(checkStatus)
    .catch(err => console.log(err))
  }



export {
  createQuiz,
  createQuestion
}

