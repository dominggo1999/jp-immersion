import React from 'react'
import { tokenize } from 'kuromojin'
import { Button } from 'ui'

tokenize('ありがとうございました').then((q) => {
  console.log(q)
})

const App = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

export default App
