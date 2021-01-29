import React, {useState} from 'react'
import withStyles from '../HOCS/withStyles'
const MovieList = (props) => {

const [movies, setMovies] = useState(['Die Hard', 'Frozen', 'Goodfellas', '47 Meters Down'])
const [userInput, setUserInput] = useState('')

function addToList() {
    const newList = [...movies, userInput]
    setMovies(newList)
    setUserInput('')
}

    return (
    <div style={props.style}>{movies.map((movies) => (
        <h2>{movies}</h2>))}
        <input     
            placeholder='Add a movie'
            value={userInput}
            onChange={e=>setUserInput(e.target.value)} 
        /> {/* if there is an input, you need a corresponding useState func */}
        <button onClick={addToList}>Add To List</button>
    </div>
    )
}

export default withStyles(MovieList)