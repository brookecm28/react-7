import {useState} from 'react'

const ToggleRP = props => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen(!isOpen)
    }
    return props.render(isOpen, toggleOpen)
}

export default ToggleRP