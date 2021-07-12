const apiUrl = 'https://next-connect-back.herokuapp.com/api/v1'

export const comment = (comment) => {
 return (dispatch) => {
   fetch(`${apiUrl}/posts/${comment.post_id}/comments`, {
    method      : 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers     : {'Content-Type': 'application/json'},
    redirect: 'follow',
    referrer: 'no-referrer',
    credentials : 'include',
    body        : JSON.stringify({comment: comment})
   })
   .then(r=> r.json())
   .then(
     (data) => {
       dispatch({
         type: 'CREATE_COMMENT',
         payload: data
       })
     }
   )
 }
}

export default comment
