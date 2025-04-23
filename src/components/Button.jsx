import React from 'react'

function Button({name, isBeam , containerClass}) {
  return (
    <a className={`btn ${containerClass}`} href='#contact'>
        {isBeam && (
            <span className="relative flex h-3 w-3">
                <span className="btn-ping" />
                <span className="btn-ping_dot" />
            </span>
        )}
        {name}
    </a>
  )
}

export default Button