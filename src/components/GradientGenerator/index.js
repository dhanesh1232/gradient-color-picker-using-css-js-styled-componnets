import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  PageContainer,
  ColorInput,
  ColorContainer,
  ColorPicker,
  DirectionHeading,
  DirectionList,
  MainHeading,
  ColorPallet,
  ColorValue,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    gradientActiveDirection: gradientDirectionsList[0].directionId,
    color1: '#014f7b',
    color2: '#8ae323',
  }

  updateActiveDirection = directionId => {
    this.setState({gradientActiveDirection: directionId})
  }

  updateNewColor1 = event => {
    this.setState({color1: event.target.value})
  }

  updateNewColor2 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {gradientActiveDirection, color1, color2} = this.state
    return (
      <PageContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientActiveDirection}
        color1={color1}
        color2={color2}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <DirectionHeading>Choose Direction</DirectionHeading>
        <DirectionList>
          {gradientDirectionsList.map(eachList => (
            <GradientDirectionItem
              data-testid="top"
              directionItem={eachList}
              key={eachList.directionId}
              isActive={eachList.directionId === gradientActiveDirection}
              updateActiveDirection={this.updateActiveDirection}
            />
          ))}
        </DirectionList>
        <ColorPicker>Pick the Colors</ColorPicker>
        <ColorContainer>
          <ColorPallet>
            <ColorValue htmlFor="startColor">{color1}</ColorValue>
            <ColorInput
              type="color"
              id="startColor"
              value={color1}
              onChange={this.updateNewColor1}
              data-testid="gradientGenerator"
            />
          </ColorPallet>
          <ColorPallet>
            <ColorValue htmlFor="endColor">{color2}</ColorValue>
            <ColorInput
              type="color"
              id="endColor"
              value={color2}
              onChange={this.updateNewColor2}
              data-testid="gradientGenerator"
            />
          </ColorPallet>
        </ColorContainer>
        <GenerateButton type="button" data-testid="gradientGenerator">
          Generate
        </GenerateButton>
      </PageContainer>
    )
  }
}

export default GradientGenerator
