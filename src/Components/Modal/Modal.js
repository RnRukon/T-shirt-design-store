import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    // Define a function to handle clicks outside the modal
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // Close the modal when clicking outside of it
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div
                        className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center "
                        onClick={handleOutsideClick}
                    >
                        <div className="mx-3">
                            <div className="bg-white rounded-lg p-3">{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;