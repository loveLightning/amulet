import React from 'react'
import Modal from 'react-modal'

interface Props {
  setIsOpen: (open: boolean) => void
  modalIsOpen: boolean
  children: React.ReactNode
  color: string
}

export const MyModal = ({
  modalIsOpen,
  setIsOpen,
  children,
  color = '#F6F4F4',
}: Props) => {
  const customStyles = {
    content: {
      position: 'absolute',
      backgroundColor: color,
      padding: '15px',
      zIndex: '1000',
      maxWidth: '430px',
      width: '100%',
      borderRadius: '.5em',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    overlay: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0, .3)',
      zIndex: '1000',
      overflowY: 'auto',
    },
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      {children}
    </Modal>
  )
}
