import React, { useEffect } from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

const SpeechRecognitionComponent = ({ setInputText, handleChat }) => {
    const { transcript, startRecognition, stopRecognition } = useSpeechRecognition();

    useEffect(() => {
        setInputText(transcript);
    }, [transcript]);

    const handleStop = () => {
        stopRecognition();
        handleChat();  // stopRecognitionが呼ばれた後にChat APIを自動的に呼び出す。
    }

    return (
        <div>
            <button onClick={startRecognition}>話しかける</button>
            <button onClick={handleStop}>話し終える</button>
        </div>
    );
};


export default SpeechRecognitionComponent;
