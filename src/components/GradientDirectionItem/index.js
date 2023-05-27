// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, updateActiveDirection, isActive} = props
  const {directionId, displayText} = directionItem
  const onChangeDirection = () => {
    updateActiveDirection(directionId)
  }
  const bgColor = isActive ? '#ededed' : '#ffffff79'
  return (
    <ListItem>
      <CustomButton
        type="button"
        onClick={onChangeDirection}
        bgColor={bgColor}
        isActive
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}
export default GradientDirectionItem
