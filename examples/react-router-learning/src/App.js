import React, { memo } from 'react'
// import Nesting from './router/Nesting'
// import CustomLink from './router/CustomLink'
// import PreventingTransitions from './router/preventingTransitions'
import RecursivePaths from './router/recursivePaths'
export default memo(function App() {
  return (
    <div>
      {/* <CustomLink /> */}
      <RecursivePaths />
    </div>
  )
})
