import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonList = props => {
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
const [nextUrl, setNextUrl] = useState("")
const [pokemon, setPokemon] = useState([])

useEffect(() => {
    axios.get(url).then(res => {
    setPokemon(res.data.results)
    setNextUrl(res.data.next)
    })

    return () => console.log('Component will unmount when you return')
}, [url])

    return (
    <div>{JSON.stringify(pokemon)}
    <button onClick={() => setUrl(nextUrl)}>NEXT</button>
    </div>
    )
}

export default PokemonList