import { Color, BaseStyle, InvertedStyle, NormalStyle } from './base'

// Button without Conditional Rendering
const ButtonWithoutConditional = ({ children, variant, inverted }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        ${BaseStyle}
        ${inverted ? 
          ` ${InvertedStyle}
            border-color: ${variant ? Color[variant] : 'grey'};
            transition: .2s ease-in;
  
          ` 
          : 
          ` ${NormalStyle}
            background-color: ${variant ? Color[variant] : 'grey'};
            transition: .2s ease-in;
          `
        }
      }
      button:hover {
        ${inverted ? 
          ` background-color: ${variant ? Color[variant] : 'grey'};
            color: white;
          `
          :
          ` opacity: .8;
          `
        }
      }
    `}
    </style>
  </button>
)

export default ButtonWithoutConditional