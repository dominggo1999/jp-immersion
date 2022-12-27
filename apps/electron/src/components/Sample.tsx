import React from 'react'
import { Button } from 'ui'

const Sample = () => {
  return (
    <div className="flex m-4 gap-x-10 flex-wrap gap-y-3">
      <Button>Hello World!</Button>
      <Button variant="secondary">Hello World!</Button>
      <Button variant="destructive">Hello World!</Button>
      <Button variant="transparent">Hello World!</Button>
      <Button
        isLoading
        fullWidth
      >
        Preparing Tokenizer
      </Button>
    </div>
  )
}

export default Sample
