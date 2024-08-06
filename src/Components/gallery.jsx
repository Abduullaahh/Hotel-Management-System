import React from 'react'
import Modal from 'react-modal';
import './modal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const roomData = [
    {
      image: 'gallery1.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery2.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery3.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery4.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery5.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery6.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery7.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'gallery8.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
  ];

export default function Gallery()
{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState({});
  
    const openModal = (imageName) => {
        const room = roomData.find((room) => room.image === imageName);
        if (room) {
          setSelectedRoom(room);
          setModalIsOpen(true);
        }
      };
  
    const closeModal = () => {
      setSelectedRoom({});
      setModalIsOpen(false);
    };
  
  return (
    <div className='gallery' id='gallery'>
        <h1>Our Gallery</h1>
        <div>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery1.jpg')}>
                <img src="gallery1.jpg" alt="gallery1" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery2.jpg')}>
                <img src="gallery2.jpg" alt="gallery2" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery3.jpg')}>
                <img src="gallery3.jpg" alt="gallery3" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery4.jpg')}>
                <img src="gallery4.jpg" alt="gallery4" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery5.jpg')}>
                <img src="gallery5.jpg" alt="gallery5" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery6.jpg')}>
                <img src="gallery6.jpg" alt="gallery6" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery7.jpg')}>
                <img src="gallery7.jpg" alt="gallery7" />
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('gallery8.jpg')}>
                <img src="gallery8.jpg" alt="gallery8" />
            </button>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Details" className="ReactModal__Content" overlayClassName="modal-overlay">
            <img src={selectedRoom.image} alt="Selected" />
            <p className='text'>{selectedRoom.description}</p>
            <button  className='close-button'  onClick={closeModal}>&times;</button>
        </Modal>
    </div>
  )
}