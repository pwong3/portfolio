import React, { useState } from 'react';
import '../../Styles/SkillCard.css';
import { SkillModal } from './SkillModal';

export const SkillCard = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
    console.log('openModal' + openModal)
  }
  return (
    <>
      <div className='skill-card' style={{ color: props.bgColor }} onClick={handleOpenModal}>
        <div className='logo-bg' style={{ backgroundColor: props.bgColor }}>
          <img className='logo' src={props.image} alt={props.alt} />
        </div>
        <p>{props.name}</p>
        {/* {openModal ? <SkillModal openModal={openModal} about={props.about} /> : null} */}
      </div >
      <div className='modal'>
        <div className="modal-header">
          <div className='title'>{props.name}</div>
          <button>&times;</button>
        </div>
        <div className="modal-body">
          {props.about}
        </div>
      </div >
    </>
  )
}