# Contact Form Setup Guide

## 📧 Step 1: Set up EmailJS (Free Email Service)

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

{{#if attachment}}
Attachment: {{attachment}}
{{/if}}
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `AbCdEf123456`)

---

## 🔒 Step 2: Set up Google reCAPTCHA v3

### 1. Register Your Site
1. Go to [https://www.google.com/recaptcha/admin/create](https://www.google.com/recaptcha/admin/create)
2. Fill in the form:
   - **Label**: Zetphy Portfolio
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: 
     - `localhost` (for development)
     - Your production domain (e.g., `zetphy.com`)
3. Click "Submit"

### 2. Get Your Keys
After registration, you'll get:
- **Site Key** (starts with `6L...`) - This is public
- **Secret Key** (keep this private) - For backend verification

---

## ⚙️ Step 3: Configure Your Project

### Update the following files:

#### 1. `/src/app/components/Contact.tsx`
Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual reCAPTCHA Site Key (around line 27):

```typescript
const token = await window.grecaptcha.execute('6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', { action: 'submit' });
```

#### 2. `/index.html`
Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual reCAPTCHA Site Key (around line 10):

```html
<script src="https://www.google.com/recaptcha/api.js?render=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" async defer></script>
```

#### 3. Install EmailJS Package
Run in your terminal:
```bash
pnpm add @emailjs/browser
```

#### 4. Update Contact.tsx to use EmailJS
Replace the TODO section in `handleSubmit` function with:

```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
const templateParams = {
  from_name: formData.fullName,
  from_email: formData.email,
  message: formData.message,
  'g-recaptcha-response': token
};

await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

---

## 🧪 Step 4: Test

### Development Testing:
1. Run `pnpm dev`
2. Go to Contact page
3. Fill out the form and submit
4. Check your email inbox

### Production:
1. Deploy your site
2. Add your production domain to reCAPTCHA admin
3. Test the contact form on live site

---

## 💡 Quick Start (Testing Mode)

If you want to test without setting everything up:
1. Comment out the reCAPTCHA line in `Contact.tsx`
2. Replace the EmailJS call with:
   ```typescript
   console.log('Form submitted:', formData);
   alert('This is a demo. Set up EmailJS to enable real email sending.');
   ```

---

## 📝 Notes

- **Free Limits**:
  - EmailJS: 200 emails/month
  - reCAPTCHA: Unlimited

- **Security**: 
  - Never commit your Secret Key to Git
  - The Site Key (Public Key) is safe to expose

- **Support**:
  - EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
  - reCAPTCHA: [https://developers.google.com/recaptcha/docs/v3](https://developers.google.com/recaptcha/docs/v3)
