import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const About = () => {

  const { text, setText } = useContext(GlobalContext)
  return (
    <div>
      {text}
    </div>
  )
}

export default About