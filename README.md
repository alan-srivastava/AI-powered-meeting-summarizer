UserName: AlankritSrivastava-Lumio

# Meeting Summarizer

A web application to generate concise meeting summaries and email them to recipients using Gemini AI and Gmail.

## Features

- Upload or paste meeting transcripts
- Enter custom prompts for summary generation
- Generate summaries using Google Gemini API
- Send summaries via email (Gmail)
- Modern, interactive frontend UI

## Technologies Used

- Node.js (Express backend)
- ES Modules (import/export syntax)
- Nodemailer (Gmail integration)
- Google Gemini API
- HTML, CSS, JavaScript (frontend)

## Setup Instructions

### 1. Clone the Repository

```
git clone <your-repo-url>
```

### 2. Install Dependencies

```
cd meeting-summarizer/backend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```
GEMINI_API_KEY=your_gemini_api_key
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
```

#### .env Variable Details

- `GEMINI_API_KEY`: Your Google Gemini API key. Used to access Gemini AI for generating meeting summaries.
- `EMAIL_USER`: The Gmail address that will be used to send emails. Example: `projecttesting0310@gmail.com`.
- `EMAIL_PASS`: The Gmail App Password for the above account. This is NOT your regular Gmail password. Generate an App Password from your Google Account security settings ([instructions here](https://support.google.com/accounts/answer/185833)).

- Make sure your Gmail account allows access via App Passwords and is not blocking sign-in attempts.

### 4. Run the Backend Server

```
node server.js
```

### 5. Open the Frontend

Open `frontend/index.html` in your browser.

## Usage

1. Paste your meeting transcript.
2. Enter a prompt (e.g., "Summarize action items").
3. Click **Generate Summary**.
4. Enter recipient email and click **Send** to email the summary.

## Troubleshooting

- **Email not sending:**
  - Check `.env` for correct Gmail and App Password.
  - Make sure App Password is active and Gmail account allows access.
- **Gemini API errors:**
  - Ensure your API key is valid and has access to Gemini models.
- **CORS issues:**
  - Backend uses CORS; make sure you access frontend from allowed origins.

## License

MIT

## Credits

- UI design inspired by modern SaaS dashboards.
- Gemini API by Google.
- Email via Nodemailer and Gmail.
