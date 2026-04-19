# 🔐 Secure Authentication System (Node.js)
A production-ready backend authentication system built with Node.js and Express, implementing modern security practices like OTP verification, JWT authentication, refresh token rotation, and multi-device session management.

## 🚀 Features

- 🔐 Email OTP Verification (Nodemailer)
- 🔑 JWT Authentication (Access + Refresh Tokens)
- 🔄 Refresh Token Rotation (prevents replay attacks)
- 📱 Multi-device Session Management
- 🚪 Logout from single / all devices
- 🛡️ Token Blacklisting
- 🧱 Scalable Architecture (MVC + Services)

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT  
- **Email Service:** Nodemailer  


## 📂 Project Structure
```
├── src/
│   ├── config/
│   │   ├── config.js
│   │   └── database.js
│   ├── controllers/
│   │   └── auth.controlller.js
│   ├── models/
│   │   ├── otp.model.js
│   │   ├── session.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── services/
│   │   └── email.service.js
│   ├── utils/
│   │   └── utils.js
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## ⚙️ Environment Variables

Create a `.env` file in root:
```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```
## ▶️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/your-repo.git

# Install dependencies
npm install

# Run server
npm run dev
```
## 🔐 Authentication Flow
- User registers → OTP sent via email  
- User verifies OTP → account activated  
- Login → Access + Refresh tokens issued  
- Access token expires → Refresh token used  
- Refresh token rotates (new token issued)  
- Logout → session invalidated  
## 📡 API Endpoints
| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| POST   | /api/auth/register  | Register user              |
| GET   | /api/auth/verify-email    | Verify OTP                 |
| POST   | /api/auth/login     | Login user                 |
| GET   | /api/auth/refresh-token   | Refresh access token       |
| GET   | /api/auth/get-me   | Rotate Tokens       |
| GET   | /api/auth/logout    | Logout from current device |
| GET   | /api/auth/logoutAll | Logout from all devices    |

## 🧠 Security Practices Implemented
- Refresh token rotation
- Token blacklisting
- Session tracking
- OTP expiration handling

## 📌 Future Improvements
- Add rate limiting (prevent brute force)
- Add OAuth (Google login)
- Add Swagger API docs
- Dockerize the application

## 🙌 Author
**AKARSH SINGH**  
Github :[NotJustAkarsh](https://github.com/NotJustAkarsh)


---

# 📬 Postman API Documentation (Collection Structure)

Create a Postman Collection like this:

---

## 📁 Collection Name:
`Auth System API`

### 🔹 1. Register User

**POST** `/api/auth/register`

#### Body (JSON)
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```
#### Response
```json
{
  "message": "OTP sent to email"
}
```
### 🔹 2. Verify User

**GET** `/api/auth/verify-email`

#### Body (JSON)
```json
{
  "email": "test@example.com",
  "otp": "123566"
}
```
#### Response
```json
{
  "message": "Email verified successfully"
}
```
### 🔹 3. Login User

**POST** `/api/auth/login`

#### Body (JSON)
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```
#### Response
```json
{
  "message": "User Logged In Successfully"
}
```
### 🔹 4. Refresh Token

**GET** `/api/auth/refresh-token`

#### Response
```json
{
  "message": "Token Refreshed"
}
```
### 🔹 5. Rotate Token

**GET** `/api/auth/get-me`

#### Response
```json
{
  "message": "User Fetched"
}
```
### 🔹 6. Log Out

**GET** `/api/auth/logout`

#### Response
```json
{
  "message": "User Logged Out Successfully"
}
```
### 🔹 7. Log Out All

**GET** `/api/auth/logout-all`

#### Response
```json
{
  "message": "User Logged Out from all devices Successfully"
}
```
## 📬 API Collection
[Download Postman Collection](./postman_collection.json)


