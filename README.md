# ai-chatbot
A full-stack AI chatbot with a React frontend and Node.js backend, using SQL for data persistence. User messages are sent via webhook to an n8n workflow, which routes the request to OpenAI's API and returns the generated response back through the webhook — enabling a decoupled, automation-driven AI integration layer.
