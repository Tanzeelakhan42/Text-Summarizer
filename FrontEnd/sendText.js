async function sendText(text) {
  try {
    let endPoint = "http://localhost:3000/api/text/save";
    let response = await fetch(endPoint, {
      method: "POST", // Specifies the request method
      headers: {
        "Content-Type": "application/json", // Add headers for JSON
      },
      body: JSON.stringify({ text: text }), // Convert data to JSON string
    });
    // console.log("sendTextResponse", response);
    let result = await response.json();
    console.log("result=", result.data.summary);
    let summarizedText = result.data.summary;
    return summarizedText;
  } catch (error) {}
}
export default sendText;
