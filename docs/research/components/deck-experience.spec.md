# DeckExperience specification

## Overview

- Target: `src/components/deck-experience.tsx`
- Interaction model: scroll, click, hover, keyboard, and time-driven.

## Structure

The component creates a viewport-sized, borderless frame for the complete local SpaceVibe Deck document. The embedded document contains the hero, demo reel, sticky tour, closing band, and footer.

## Styling

- Parent and frame: width/height 100%, no border, no outer scrolling.
- Fallback/background: `#0a0c0b` to prevent a light flash during startup.
- Height: `100dvh` with `100vh` fallback.

## Assets

- Production CSS and JavaScript chunks in `public/assets/`.
- Partner mark in `public/landing-prototype/assets/`.
- Demo poster, WebM, and MP4 in `public/`.

## Responsive behavior

The embedded experience uses its original fluid frame tokens and mobile breakpoint at 47.5rem, so it follows the parent viewport exactly at desktop, tablet, and mobile sizes.
