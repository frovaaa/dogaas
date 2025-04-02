# DOGAAS (Dogs as a Service)

A simple API service that provides random dog images, similar to CATAAS (Cats as a Service).

## Current Features

- Random dog image endpoint (`/api/dog`)
- Full-screen image display at `/dog` route
- Automatic redirection from root to `/dog`
- High-quality images from Unsplash
- Fast response times with Turbopack
- TypeScript support
- Modern UI with Tailwind CSS

## API Endpoints

### Get Random Dog Image

```
GET /api/dog
```

Returns a JSON response with a random dog image URL:

```json
{
  "url": "/images/dogX.jpg"
}
```

## Future Features

- [ ] Image filters (blur, grayscale, etc.)
- [ ] GIF support
- [ ] Image size options (small, medium, large)
- [ ] Text overlay on images (like CATAAS)
- [ ] Image tags/categories
- [ ] Cloudinary integration for better image hosting
- [ ] Rate limiting
- [ ] Caching layer
- [ ] API documentation with Swagger/OpenAPI
- [ ] Docker support
- [ ] CI/CD pipeline

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Unsplash API credentials:
   ```
   UNSPLASH_ACCESS_KEY=your_access_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Development

This project is built with:

- Next.js 15.2.4
- TypeScript
- Tailwind CSS
- Unsplash API
- Turbopack

## License

MIT License - feel free to use this project as you wish.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
