import React, {useState} from 'react';

const Chat = () => {
    const [show,setShow]=useState(false);
    return (
        <div className="fixed  z-50 bottom-3 right-0">
            <div className="relative ">
                <div className="flex flex-col gap-1  pr-2">
                        <button
                            className={`duration-1000 relative  ${show?"-top-[1px]":" top-32"}`}
                        >
                            <img className="h-[60px] " src="/images/messenger.png" alt="chat"/>
                        </button>
                        <button type="button"
                        className={`duration-1000 relative   ${show?"-top-[1px] transition-all":" top-16"}`}
                        >
                            <img className="h-[60px] " src="/images/whatsapp.png" alt="chat"/>
                        </button>

                        <button
                            onClick={() => setShow(state => !state)}
                            type='button'
                            className=" relative z-10 bg-[#f97316] rounded-full  "
                        >
                            <img className="h-[60px] p-3 " src="/images/chat.png" alt="chat"/>
                        </button>
                </div>
            </div>

        </div>
    );
};

export default Chat;