import './index.css'

const SimilarProductItem = props => {
  const {productData} = props
  const {imageUrl, title} = productData

  return (
    <li className="product-item">
      <img src={imageUrl} alt={`similar post ${title}`} className="thumbnail" />
      <h1 className="title">{title}</h1>
    </li>
  )
}

export default SimilarProductItem
