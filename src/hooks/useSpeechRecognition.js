import { useState, useEffect } from 'react';

const useSpeechRecognition = () => {
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        // `webkitSpeechRecognition`は特定のブラウザでしか使えないので、ブラウザが対応しているか確認
        if ('webkitSpeechRecognition' in window) {
            const speechRecognition = new webkitSpeechRecognition();
            speechRecognition.lang = 'ja';
            speechRecognition.continuous = true;

            speechRecognition.onresult = ({ results }) => {
                setTranscript(results[0][0].transcript);
            };

            setRecognition(speechRecognition);
        }
    }, []);

    const startRecognition = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const stopRecognition = () => {
        if (recognition) {
            recognition.stop();
        }
    };

    return { transcript, startRecognition, stopRecognition };
};

export default useSpeechRecognition;