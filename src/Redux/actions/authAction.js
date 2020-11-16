const auth = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/registrations', {
      withCredentials: true,
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify({user: user})
    }).then(res => {
      return res.json()
    }).then(json => {
      dispatch({type: 'AUTH_SUCCESS', user: json.user})
    }).catch(error => console.log(error))
  }
  
}

export default registerNewUser