import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import ToggleRP from './ToggleRP'
import Square from '../HOCS/Square'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <h1>Here are the secrets</h1>
      </Toggle>
      <ToggleRP render={(isOpen, toggleOpen) => {
        return (
        <div>
          <Square isAdmin darkMode={isOpen}/>
          <button onClick={toggleOpen}>switch it up</button>
        </div>
)
      }} />
    </section>
  )
}
export default RenderProps
