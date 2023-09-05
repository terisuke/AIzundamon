import { useState } from 'react';
import axios from 'axios';

const useVoiceAPI = () => {
    const [audioSrc, setAudioSrc] = useState(null);

    const createAudio = async (text) => {
        try {
            const data = await createVoice(text);
            const blobUrl = URL.createObjectURL(data);
            setAudioSrc(blobUrl);
            return blobUrl;
        } catch (error) {
            console.error('Error while creating audio:', error);
            return null;
        }
    };

    const createQuery = async (text) => {
        try {
            const response = await axios.post(
                `http://localhost:50021/audio_query?speaker=1&text=${text}`
            );
            return response.data;
        } catch (error) {
            console.error('Error while creating query:', error);
            return null;
        }
    };

    const createVoice = async (text) => {
        try {
            const query = await createQuery(text);
            const response = await axios.post(
                'http://localhost:50021/synthesis?speaker=1',
                query,
                { responseType: 'blob' }
            );
            return response.data;
        } catch (error) {
            console.error('Error while creating voice:', error);
            return null;
        }
    };

    return { audioSrc, createAudio };
};

export default useVoiceAPI;
