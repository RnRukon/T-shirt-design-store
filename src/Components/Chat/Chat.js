import React, {useState} from 'react';

const Chat = () => {
    const [show,setShow]=useState(false);
    return (
        <div className="fixed  z-50 bottom-0 right-0">
            <div className="relative flex flex-col gap-1  px-5">
                <div className={`flex flex-col gap-1  ${show?"block":"hidden"}`} >
                        <button>
                            <img className="h-20 " src="/images/messenger.png" alt="chat"/>
                        </button>
                        <button type="button">
                            <img className="h-20 " src="/images/whatsapp.png" alt="chat"/>
                        </button>
                    </div>
                <button
                    onClick={() => setShow(state => !state)}
                    type='button'
                >
                    <img className="h-20 " src="/images/chat.png" alt="chat"/>
                </button>
            </div>
        </div>
    );
};

export default Chat;