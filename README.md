# UNO-Capstone

This application is an updated website redesign for Bar IQ, meant to better represent their changing brand as the company continues to grow and reach new industries.

## Demo

Visit the live site using the GitHub Pages link in the `about` section of the repository, or use this link: https://colewortman.github.io/UNO-Capstone/faq

## Code

To get started locally, navigate to the `web` folder and run:
```bash
npm install
npm run dev
```

## Release Notes

Milestone 1: Basic project setup and research/discovery

Milestone 2: Design and create React components for the site

Milestone 3: Update section designs and add responsiveness across devices

Milestone 4: Finishing sections, pages, and redesigns

Milestone 5: Polishing, adding animations

## Key Parts of the Codebase

.github/workflows: handles automated testing and GitHub Pages deployment

web/public: contains all static assets (images, videos, etc.)

  - public/docs: generated documentation using TypeDoc `(required by UNO, suggest removing from production)`

web/lib/animations.ts: defines resusable animation configurations for UI transitions

web/app: contains the logic of the app
  
  - page.tsx: renders the home page

  - page.tsx in faq/, integration/, pricing/, ROI: renders their pages respectively

  - tests/: contains unit tests for validating rendering

web/app/components/: contains all .tsx files responsible for the design and logic of the site

  - ui/: installed components used throughout the app

## Suggested Improvements

Test for browser compatability across Safari, Firefox, and Edge (developed testing in Chrome)

Test for responsiveness on tablets

Add sign up/in pages

Connect a backend with proper authentication/authorization for user access
