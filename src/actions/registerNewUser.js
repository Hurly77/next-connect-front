const registerNewUser = (user = {}) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEW_USER'})
    fetch('http://localhost:3000/registrations', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(user, {withCredentials: true})
    }).then(res => {
      console.log(res)
      return res.json()
    }).then(json => {
      console.log(json)
      dispatch({type: 'NEW_USER', user: json.user})
    }).catch(error => console.log(error))
  }
  
}

export default registerNewUser