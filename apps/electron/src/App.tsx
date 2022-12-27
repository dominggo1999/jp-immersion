import React from 'react'
import { tokenize } from 'kuromojin'
import Sample from './components/Sample'

tokenize('ありがとうございました').then((q) => {
  console.log(q)
})

const App = () => {
  return (
    <>
      <Sample />
    </>
  )
}

export default App
