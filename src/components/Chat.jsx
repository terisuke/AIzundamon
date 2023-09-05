import React from 'react';
import { useChatAPI } from '../hooks/useChatAPI';

const Chat = ({ inputText, setOutputText }) => {
    const { requestChatAPI } = useChatAPI();

    const handleChat = async () => {
        const response = await requestChatAPI(inputText);
        setOutputText(response);
    };

    return (
        <div>
            <button onClick={handleChat}>Chat</button>
        </div>
    );
};

export default Chat;

