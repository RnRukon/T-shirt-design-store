import React, {useState} from 'react';

const Chat = () => {
    const [show,setShow]=useState(false);
    return (
        <div className="fixed  z-50 bottom-3 right-0">
            <div className="relative ">
                <div className="flex flex-col gap-1  pr-2">
                    <a href="https://www.facebook.com/messages/t/118442278025815" target="_blank" rel="noreferrer"  className={`duration-1000 relative  h-[60px] w-[60px] rounded-full ${show ? "-top-[1px]" : " top-32"}`}>
                        <button
                          type="button"
                        >
                            <img className="h-[60px] " src="/images/messenger.png" alt="chat"/>
                        </button>
                    </a>

                    <a href="https://wa.me/01323169833" target="_blank" rel="noreferrer"
                       className={`duration-1000 relative h-[60px] w-[60px] rounded-full ${show ? "-top-[1px] transition-all" : " top-16"}`}>
                        <button type="button"

                        >
                        <img className="h-[60px] " src="/images/whatsapp.png" alt="chat"/>
                        </button>
                    </a>


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