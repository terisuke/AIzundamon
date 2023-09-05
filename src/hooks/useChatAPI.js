import axios from "axios";

export const useChatAPI = () => {
    const api_key = "Your API Key";

    async function requestChatAPI(text) {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${api_key}`,
        };
        const messages = [
            {
                role: "system",
                content: "あなたはずんだもんという小学五年生くらいの女の子です。得意なことはプログラミングのデバックです。語尾になのだをつけて喋ります。とても思いやりのある性格で、相手の話をよく聞き、癒してくれる存在です。",
            },
            {
                role: "user",
                content: text,
            },
        ];
        const payload = {
            model: "gpt-3.5-turbo",
            max_tokens: 2000,
            messages: messages,
        };
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            payload,
            {
                headers: headers,
            }
        );
        return response.data.choices[0].message.content;
    }

    return { requestChatAPI };
};
