import React, { ReactElement } from 'react'
import Builder from '../src/components/Builder/Builder'

interface Props {
  
}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Builder />
    </div>
  )
}
