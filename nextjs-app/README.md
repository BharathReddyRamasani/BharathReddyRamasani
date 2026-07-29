Next.js + anime.js hero demo

How to run

1. Install dependencies:

   cd nextjs-app
   npm install

2. Run the dev server:

   npm run dev

3. Visit http://localhost:3000 to see the hero animation.

4. (Optional) Export an animated GIF of the hero with Puppeteer:

   npm run capture

The capture script requires puppeteer and will write nextjs-app/public/hero.gif. You can then copy that GIF into assets/ and update the README to reference it if you prefer a GIF over the SVG.
