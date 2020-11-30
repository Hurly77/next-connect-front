const mapResults = (users) => {
  return users.map(user =>{
    return (
      <div className="search-card">
        <h1>{user.first_name}</h1>
        <button>Add Friend</button>
      </div>
    )
  })
}

const Results = ({found}) => {
  console.log(found)
  return (
    <div className="searchResults">
      {(mapResults(found)) ?  (mapResults(found)) : <h1>No</h1>}
    </div>
  )
}
 
export default Results