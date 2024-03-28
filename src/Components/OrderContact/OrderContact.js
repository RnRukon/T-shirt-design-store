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
                    <h1 className="text-2xl font-bold mb-4 uppercase text-center">Contact us before Ordering</h1>
                    <div className="max-w-lg mx-auto text-center">
                        <p className="pt-5">Thanks for choosing out package! We're exited to work with you. Before you order, let's chate
                            about your needs.Please contact us to discuss.Thanks!</p>

                        <div className="flex gap-4 justify-center mt-16">
                            <button type="button" className="bg-orange-700 text-white font-bold text-lg rounded-full px-5 py-3">
                                WHATSAPP
                            </button>
                            <button type="button" className="bg-orange-700 text-white font-bold text-lg  rounded-full px-5 py-3">
                                MESSENGER
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default OrderContact;