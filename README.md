# InterviewIQ

InterviewIQ is an AI-powered mock interview platform where a user can upload a resume, enter a target role, and generate a role-aware interview session. The app asks exactly 5 questions, evaluates the answers with AI, and produces feedback that can be downloaded as a PDF report.

## What it does

- Upload a resume and extract its text for interview personalization.
- Enter the role you want to practice for, such as Frontend Developer, Backend Developer, Data Analyst, or similar.
- Generate exactly 5 AI interview questions based on role, experience, interview mode, resume details, skills, and projects.
- Run the interview with timed questions and AI follow-up feedback.
- Score the interview and show a performance breakdown.
- Download a clean PDF report with question-wise scores and feedback.
- Track past interviews and review performance history.
- Support premium/credit-based interview generation and payment flow.

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, React Router, Tailwind CSS, Motion, Recharts, jsPDF
- Backend: Node.js, Express, MongoDB, Mongoose
- AI: OpenRouter API
- File parsing: pdfjs-dist, Multer
- Payments: Razorpay
- Authentication: Cookie-based JWT auth and Google sign-in flow

## Project Structure

- client/ - React frontend
- server/ - Express backend API

## Key User Flow

1. Sign in or create an account.
2. Upload your resume.
3. Enter the job role and interview details.
4. Generate 5 AI-based interview questions.
5. Answer the questions one by one.
6. Receive AI feedback and final scoring.
7. Download the interview report as a PDF.

## Features

### Resume-Based Interview Generation

The platform reads an uploaded PDF resume and uses the extracted content to create more relevant interview questions.

### Role-Aware Questioning

The interview engine adapts questions to the selected role and experience level, so the session feels closer to a real hiring process.

### Timed Interview Experience

Each question has a time limit, helping simulate pressure and improve real interview readiness.

### AI Feedback and Scoring

Answers are evaluated using AI and broken down into practical metrics like confidence, communication, and correctness.

### Downloadable PDF Report

The report page includes a downloadable PDF containing the overall score, per-question evaluation, and written feedback.

### Interview History

Users can revisit past sessions and compare their progress over time.

## Local Setup

### Prerequisites

- Node.js and npm
- MongoDB connection string
- OpenRouter API key
- Razorpay test credentials if you want to use payments

### 1. Start the backend

```bash
cd server
npm install
npm run dev
```

Create a server `.env` file with the required values before starting the API:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 2. Configure the frontend

Create a `client/.env` file for the browser-side environment variables:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

`VITE_FIREBASE_APIKEY` is used for Google sign-in through Firebase, and `VITE_RAZORPAY_KEY_ID` is used on the pricing page when creating payment options in the browser.

### 3. Start the frontend

```bash
cd client
npm install
npm run dev
```

If you change the backend port, update the API base URL in `client/src/App.jsx`.

## Scripts

### Client

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the frontend for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

### Server

- `npm run dev` - Start the Express server with nodemon

## API Overview

- `POST /api/interview/resume` - Upload and analyze a resume
- `POST /api/interview/generate-questions` - Generate 5 interview questions
- `POST /api/interview/submit-answer` - Submit an answer and get AI feedback
- `POST /api/interview/finish` - Complete the interview and save the report
- `GET /api/interview/report/:id` - Fetch a completed interview report
- `GET /api/interview/get-interview` - List interview history

## Notes

- Resume upload expects a PDF file.
- Question generation requires role, experience, and interview mode.
- The interview uses AI feedback and stores performance data for later review.

## License

This project is provided as-is for learning, demo, and development use.

