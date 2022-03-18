// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTabBtn = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTabBtn} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
