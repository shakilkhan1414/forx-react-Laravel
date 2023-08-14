import React from 'react'

export const ContentWrapper = (props) => {
  return (
    <main id={props.styleControl? "main" : ""} className={props.styleControl ? "main row d-flex justify-content-center align-items-center" : ""}>
        {props.children}
    </main>
  )
}

