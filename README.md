# React Node AI Chatbot

A full-stack AI chatbot with a React frontend and Node.js backend, using SQL for data persistence. User messages are sent via webhook to an n8n workflow, which routes the request to OpenAI's API and returns the generated response back through the webhook.

## 🏗️ Architecture Flow

```
React (Frontend)
   → Node.js (Backend API)
      → Webhook → n8n Workflow
         → OpenAI API
      ← Response ← n8n Workflow
   ← Node.js sends response to frontend
```

## 🛠️ Tech Stack

- **Frontend:** React
- **Backend:** Node.js
- **Database:** SQL
- **Auth:** JWT (planned)
- **Workflow Automation:** n8n
- **AI Model:** OpenAI

---

## ✅ Completed

### Register Page

- UI created (responsive)
- Name, email, password validation
- Backend Node.js POST route to receive registration data
- Duplicate username/email check before insert
- User data storing in database

### Login Page

- UI created (responsive)

### Chat Page

- UI created (responsive)

### Database

- Single `users` table set up for register/login auth
- Node.js backend connected to DB
- Auth routing coded for registration flow

---

## 🚧 Pending / Remaining Work

### Login

- [ ] Email & password validation
- [ ] Credential check against database
- [ ] JWT auth token generation on successful login

### Auth & Session

- [ ] JWT authentication (generate, verify, refresh)
- [ ] Cookie-based session storage
- [ ] Caching for auth/session data

### Routing & Access Control

- [ ] Redirect logged-in users directly to chat page
- [ ] Restrict chat page access — block entry without valid login/cookie
- [ ] Protected route handling in React (auth guards)

### Chat Functionality

- [ ] n8n workflow design for chat message handling
- [ ] Connect chat page to backend for sending/receiving messages
- [ ] Store chat messages in database, scoped per user
- [ ] Node.js backend validation for chat requests
- [ ] Handle message sending flow (frontend → backend → n8n → OpenAI → back to frontend)

---

## 📌 Overall Status

🚧 **Developing Phase**

- Register flow: ✅ Fully working (frontend + backend + DB)
- Login flow: ⏳ UI done, logic pending
- Chat flow: ⏳ UI done, functionality pending
- Auth (JWT, cookies, route protection): ⏳ Not started

## 📄 License

Not specified yet.
