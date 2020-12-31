import Posted from '../containers/Posted'
import NewPost from '../components/Feed/NewPost'
import './feedPage.css'

const FeedPage = () => {
  return (
    <>
      <NewPost />
      <Posted />
    </>
  )
}
export default FeedPage