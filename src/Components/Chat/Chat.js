import React, {useState} from 'react';

const Chat = () => {
    const [show,setShow]=useState(false);
    return (
        <div className="fixed  z-50 bottom-3 right-0">
            <div className="relative ">
                <div className="flex flex-col gap-1  pr-2">
                        <button
                            className={`duration-1000 relative  h-[60px] w-[60px] rounded-full ${show?"-top-[1px]":" top-32"}`}
                        >
                            <img className="h-[60px] " src="/images/messenger.png" alt="chat"/>
                        </button>
                        <button type="button"
                        className={`duration-1000 relative h-[60px] w-[60px] rounded-full ${show?"-top-[1px] transition-all":" top-16"}`}
                        >
                            <img className="h-[60px] " src="/images/whatsapp.png" alt="chat"/>
                        </button>

                        <button
                            onClick={() => setShow(state => !state)}
                            type='button'
                            className={`duration-1000  relative z-10 h-[60px] w-[60px] bg-[#f97316] rounded-full   ${show ? "rotate-[630deg]" : "rotate-[0deg]"}`}
                        >
                            <img className={`h-[60px] p-3 `} src={`${show?"/images/closee.png":"/images/chat.png"}`} alt="chat"/>
                        </button>
                </div>
            </div>

        </div>
    );
};

export default Chat;