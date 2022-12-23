import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategoryOption, activeCategoryId} = props

      const onClickCategory = () => changeCategoryOption(category.categoryId)
      const activeCategoryClassName =
        activeCategoryId === category.categoryId
          ? ` category-name active-category`
          : `category-name`

      return (
        <li
          className="category-items"
          onClick={onClickCategory}
          key={category.categoryId}
        >
          <p className={activeCategoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props

      const OnClickRating = () => {
        changeRating(rating.ratingId)
      }

      const activeRatingClassName =
        activeRatingId === rating.ratingId ? `rate-up active-rating` : `rate-up`

      return (
        <li
          className="rating-items"
          onClick={OnClickRating}
          key={rating.ratingId}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={activeRatingClassName}>&up</p>
        </li>
      )
    })
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const OnEnterSearchInput = event => {
    const {enterSearchProducts} = props

    if (event.key === 'Enter') {
      enterSearchProducts()
    }
  }

  const {onClickClear} = props

  return (
    <div className="filters-group-container">
      <div className="product-input-container">
        <input
          type="search"
          placeholder="Search"
          className="product-input-box"
          onChange={onChangeSearchInput}
          onKeyDown={OnEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      <ul className="category_list">
        <h1 className="category-heading">Category</h1>
        {renderCategoryList()}
      </ul>
      <ul className="rating-list">
        <h1 className="rating-heading">Rating</h1>
        {renderRatingsList()}
      </ul>
      <button type="button" className="clear-btn" onClick={onClickClear}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
