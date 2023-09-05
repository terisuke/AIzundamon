import React, { useState } from 'react';
import Chat from './components/Chat';
import Voice from './components/Voice';
import SpeechRecognitionComponent from './components/SpeechRecognition';
import { useChatAPI } from './hooks/useChatAPI'; // 追加

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const { requestChatAPI } = useChatAPI(); // 追加


  const handleChat = async () => {
    const response = await requestChatAPI(inputText);
    setOutputText(response);
  };

  return (
    <div>
      <img src="src/zundatalk.png" alt="" style={{ height: '70vh' }} />
      <h1>ずんだもんが話を聞いてあげるのだ！</h1>
      <SpeechRecognitionComponent setInputText={setInputText} handleChat={handleChat} />
      <Voice text={outputText} />
    </div>
  );
};

export default App;