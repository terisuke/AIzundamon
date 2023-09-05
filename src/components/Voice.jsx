import React, { useEffect } from 'react';
import useVoiceAPI from '../hooks/useVoiceAPI';

const Voice = ({ text }) => {
    const { audioSrc, createAudio } = useVoiceAPI();

    useEffect(() => {
        if (text) {
            createAudio(text);
        }
    }, [text]);

    return (
        <div>
            {audioSrc && <audio src={audioSrc} controls autoPlay />}
        </div>
    );
};

export default Voice;