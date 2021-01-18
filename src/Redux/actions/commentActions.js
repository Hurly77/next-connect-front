const apiUrl = 'http://localhost:3000/api/v1'

export const comment = (comment) => {
 return (dispatch) => {
   fetch(`${apiUrl}/posts/${comment.post_id}/comments`, {
    method      : 'POST',
    headers     : {'Content-Type': 'application/json'},
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
