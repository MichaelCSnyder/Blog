import './single.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx'

export default function Single() {
  return (
    <div className="single">
      <div className="singlePost">
        <div className="singlePostTitle">
          Lorem ipsum dolor, sit amet
        </div>
        <div className="singlePostText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam autem impedit quod minus ipsa temporibus eum, veniam a cum ratione. Quae beatae eligendi distinctio mollitia veniam voluptates animi. Ducimus, molestiae.
        </div>
      </div>
      <Sidebar />
    </div>

  )
}
