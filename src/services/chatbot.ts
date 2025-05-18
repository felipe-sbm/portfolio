export async function sendMessageToDeepSeek(userMessage: string) {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: "こにちわ！.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sem resposta.";
}
