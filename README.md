# EPℇC Corvux

## Project Structure

This project is divided into two main parts:

### 1. Public Landing Page (Production)
- **Location**: `app/page.tsx` (root)
- **Purpose**: Lead capture and waitlist signup
- **Deployment**: This is what users see when visiting the deployed site
- **Features**:
  - Hero section with video background
  - Product benefits
  - Waitlist form
  - FAQ section
  - Contact information

### 2. Private App Pages (Development)
- **Location**: `app/(private)/`
- **Purpose**: Internal development of the actual application
- **Access**: Only accessible during development
- **Features**:
  - Authentication system (`/login`)
  - Dashboard (`/dashboard`)
  - Regulations pages (`/regulations/*`)
  - User management

## Development vs Production

### Development Mode
- All pages are accessible
- Private pages show a development banner
- Regulations dropdown links to private pages

### Production Mode
- Only the landing page is accessible
- Private pages are hidden from public access
- Focus on lead generation and waitlist building

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the public landing page.
Visit `http://localhost:3000/(private)/dashboard` to access development pages.

## Deployment

When deployed, only the public landing page will be accessible to users. The private pages remain for development purposes.
