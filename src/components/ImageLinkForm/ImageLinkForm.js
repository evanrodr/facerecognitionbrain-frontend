import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa3 br3 shadow-5'>
          <input className='custom-input center' type="text" placeholder='Enter image URL' onChange={onInputChange} />
          <button className='w-20 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;