import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
  fetch: nodeFetch as unknown as typeof fetch,
});

async function downloadImage(url: string, filepath: string): Promise<void> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));
}

async function main() {
  try {
    // Create images directory if it doesn't exist
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Search for dog images
    const result = await unsplash.search.getPhotos({
      query: 'dog',
      perPage: 30,
      orientation: 'landscape',
    });

    if (result.errors) {
      console.error('Error fetching images:', result.errors);
      return;
    }

    // Download each image
    for (let i = 0; i < result.response.results.length; i++) {
      const photo = result.response.results[i];
      const url = photo.urls.regular;
      const filepath = path.join(imagesDir, `dog${i + 1}.jpg`);

      console.log(`Downloading image ${i + 1}...`);
      await downloadImage(url, filepath);
      console.log(`Downloaded: ${filepath}`);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
