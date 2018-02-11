import ButtonIf from '../components/buttonWithIfElse'
import ButtonTernary from '../components/buttonWithTernary'
import ButtonWithoutConditional from '../components/buttonWithoutConditional'

const ButtonList = [
  {
    inverted: false,
    content: 'I am (Normal)'
  },
  {
    content: 'I am (Normal with Variant)',
    variant: 'red'
  },
  {
    inverted: true,
    content: 'I am (Inverted)'
  },
  {
    inverted: true,
    variant: 'violet',
    content: 'I am (Inverted with Variant)'
  }
]

export default () => (
  <div>
    <div>
      <h2>Button with 'If else return' conditional</h2>
      {/* Render All Posible Button with (If Else return conditional) */}
      {ButtonList.map((item) => <ButtonIf key={item.content} variant={item.variant} inverted={item.inverted}>{item.content}</ButtonIf>)}
    </div>
    <div>
      <h2>Button with Ternary</h2>
      {/* Render All Posible Button with (Ternary Operator conditional) */}
      {ButtonList.map((item) => <ButtonTernary key={item.content} variant={item.variant} inverted={item.inverted}>{item.content}</ButtonTernary>)}
    </div>
    <div>
      <h2>Button without 'If else return' Conditional</h2>
      {/* Render All Posible Button with (Ternary Operator conditional) */}
      {ButtonList.map((item) => <ButtonWithoutConditional key={item.content} variant={item.variant} inverted={item.inverted}>{item.content}</ButtonWithoutConditional>)}
    </div>
  </div>
)