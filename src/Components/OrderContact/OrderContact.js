import React from 'react';
import Modal from "../Modal/Modal";

const OrderContact = ({isOpen,closeModal}) => {

    return (
        <div className="flex items-center justify-center">
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div>

                    <div className="flex justify-end">
                        <button
                            className="  hover:bg-red-200 text-red-500 font-bold  rounded-full w-10 h-10"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                   <div className="flex justify-center">
                   <span className="text-2xl font-bold mb-4 p-3 uppercase text-center border-2 border-[#FE7E21] rounded-lg">Contact us before Ordering</span>
                   </div>
                    <div className="max-w-lg mx-auto text-center pb-10">
                        <p className="pt-5">{"Thanks for you choosing our package! We're excited to work with you. Before you order, let’s chat about your project. Please contact us to discuss. Thanks!"}</p>

                        <div className="flex gap-4 justify-center mt-16">
                            <a
                                className="hover:bg-[#f97316] hover:text-white border-2 border-gray-700 hover:border-[#f97316] duration-100 font-bold text-lg rounded-lg px-5 py-3"
                                href="https://api.whatsapp.com/send?phone=1323169833"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button type="button"
                                       >
                                    WHATSAPP
                                </button>
                            </a>
                            <a href="https://www.facebook.com/messages/t/118442278025815"
                               target="_blank"
                               rel="noreferrer"
                               className="hover:bg-[#f97316] hover:text-white border-2 border-gray-700 hover:border-[#f97316] duration-100 font-bold text-lg rounded-lg px-5 py-3"
                            >
                                <button type="button">
                                    MESSENGER
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default OrderContact;