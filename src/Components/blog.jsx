import React from 'react'
import Modal from 'react-modal';
import './modal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const roomData = [
    {
      image: 'blog1.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'blog2.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
    {
      image: 'blog3.jpg',
      description: 'This spacious room is designed to accommodate families, featuring a comfortable arrangement with one double bed and two single beds. Whether you are traveling with loved ones or friends, our family room provides ample space and comfort for a relaxing stay. Our meticulously designed rooms offer a serene escape, whether you are traveling with family, friends, or your significant other. With comfortable beds, cozy seating, and modern amenities, our rooms ensure a relaxing stay that caters to your every need. Discover unparalleled comfort and luxury in our thoughtfully crafted rooms. Ideal for families, couples, and friends, each room features spacious layouts, plush bedding, and stylish decor. Enjoy modern amenities and breathtaking views, ensuring an unforgettable stay that caters to your every desire. Whether you are seeking a romantic getaway or a fun-filled vacation, our rooms provide the perfect sanctuary for relaxation and rejuvenation. RENT: 50,000 per 24 hrs',
    },
  ];

export default function Blog()
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
    <div className='blog' id='blogs'>
        <div className='back-off'>
            <div className='blog-head'>
                <h1>Blogs & Reviews</h1>
            </div>
            <p className='blog-line'>Experience exceptional services, luxurious amenities, and personalized hospitality that redefine your stay with us.</p>
            <button  className='gallery-imgs'  onClick={() => openModal('blog1.jpg')}>
                <img src="blog1.jpg" alt="blog1" />
                <p>This spacious room is designed to accommodate 
                    families, featuring a comfortable arrangement
                     with one double bed and two single beds. <b>Read more...</b>
                </p>
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('blog2.jpg')}>
                <img src="blog2.jpg" alt="blog2" />
                <p>This spacious room is designed to accommodate 
                    families, featuring a comfortable arrangement
                     with one double bed and two single beds. <b>Read more...</b>
                </p>
            </button>
            <button  className='gallery-imgs'  onClick={() => openModal('blog3.jpg')}>
                <img src="blog3.jpg" alt="blog3" />
                <p>This spacious room is designed to accommodate 
                    families, featuring a comfortable arrangement
                     with one double bed and two single beds. <b>Read more...</b>
                </p>
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