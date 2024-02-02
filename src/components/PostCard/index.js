import {Link} from 'react-router-dom'
import {FcLike, FcComments, FcShare} from 'react-icons/fc'

import './index.css'

const PostCard = props => {
  const {productData} = props
  const {id, title, imageUrl} = productData

  return (
    <Link to={`/products/${id}`} className="item-name">
      <li className="product-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <div className="btn-section">
          <button className="like-btn" type="button" aria-label="Like">
            <FcLike className="like-icon" />
          </button>
          <button className="like-btn" type="button" aria-label="Like">
            <FcComments className="like-icon" />
          </button>
          <button className="like-btn" type="button" aria-label="Like">
            <FcShare className="like-icon" />
          </button>
        </div>
      </li>
    </Link>
  )
}
export default PostCard
