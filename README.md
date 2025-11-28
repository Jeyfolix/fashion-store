# Fashion Store

A modern e-commerce platform for clothes, shoes, beauty items, and salon services.

## Features

- 🛍️ Product catalog with image upload
- 💇 Salon service booking
- 🛒 Shopping cart
- 👨‍💼 Admin panel for product management
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Local Development

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd fashion-store
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Set up database:
\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

5. Run development server:
\`\`\`bash
npm run dev
\`\`\`

## Environment Variables

Create a \`.env.local\` file with:

\`\`\`env
DATABASE_URL="mysql://username:password@localhost:3306/fashion_store"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
\`\`\`

## Deployment

This project is configured for deployment on Vercel.
