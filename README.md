# Text-Summarizer

This project is a **Text Summarizer** with a structure containing both **Frontend (FE)** and **Backend (BE)** components.

## **Project Setup**

### **Frontend (FE) Setup**

1. Navigate to the **FrontEnd folder** in the project directory.
2. Open the `index.html` file in a browser to run the frontend.

### **Backend (BE) Setup**

1. Navigate to the **BackEnd folder** in the project directory.
2. Set up environment variables:

   - Create a `.env` file (if not already present) inside the `BE` folder.
   - Add the following variables:
     ```plaintext
     MONGODB_URL="your_MongoDb_URL_here"
     OPEN_API_KEY=your_openai_api_key_here
     ```
   - Replace `your_openai_api_key_here` with your actual OpenAI API key.

3. Install dependencies by running:
   ```bash
   npm install
   ```
4. Start the backend server with:
   ```bash
   npm run start
   ```
