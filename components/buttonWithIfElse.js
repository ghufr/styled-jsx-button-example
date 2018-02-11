import { Color, BaseStyle, InvertedStyle, NormalStyle } from './base'

const Normal = ({ children, variant }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        ${BaseStyle}
        ${NormalStyle}
        background-color: ${variant ? Color[variant] : 'grey'};
        transition: all .2s ease-in;
      }
      button:hover {
        opacity: .8;
      }
    `}
    </style>
  </button>
)

const Inverted = ({ children, variant }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        ${BaseStyle}
        ${InvertedStyle}
        border-color: ${variant ? Color[variant] : 'grey'};
        transition: all .2s ease-in;
      }
      button:hover {
        background-color: ${variant ? Color[variant] : 'grey'};
        color: white;
      }
    `}
    </style>
  </button>
)

const ButtonWithIfElse = ({ inverted, ...rest }) => {
  if(inverted) {
    return <Inverted {...rest}/>
  } else {
    return <Normal {...rest}/>
  }
}

export default ButtonWithIfElse