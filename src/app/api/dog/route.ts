import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Function to get all dog images from the public/images directory
function getDogImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  return files
    .filter((file) => file.startsWith('dog') && file.endsWith('.jpg'))
    .map((file) => `/images/${file}`);
}

export async function GET() {
  try {
    const images = getDogImages();
    if (images.length === 0) {
      return NextResponse.json(
        { error: 'No dog images found' },
        { status: 404 }
      );
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error('Error fetching dog image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dog image' },
      { status: 500 }
    );
  }
}
