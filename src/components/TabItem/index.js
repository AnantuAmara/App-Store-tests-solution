// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
