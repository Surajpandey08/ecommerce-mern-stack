import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Phasellus finibus vehicula ligula ac pretium. Nam venenatis ut augue a placerat. Cras venenatis mauris leo. Phasellus at elit ante. Integer eu ex sapien. Nullam egestas turpis dolor, vel suscipit tellus sodales scelerisque.</p>
            <p>Phasellus finibus vehicula ligula ac pretium. Nam venenatis ut augue a placerat. Cras venenatis mauris leo. Phasellus at elit ante. Integer eu ex sapien. Nullam egestas turpis dolor, vel suscipit tellus sodales scelerisque.</p>
        </div>
    </div>
  )
}
