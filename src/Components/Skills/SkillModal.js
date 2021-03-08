import React from 'react';

export const SkillModal = (props) => {
  return (
    <>
      <div className='modal-background'>
        <div className="modal">
          {props.about}
        </div>
      </div >
    </>
  )
}