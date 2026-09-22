# Magical website artwork

Created September 22, 2026 with the built-in image-generation tool. Original PNGs are preserved here, alongside optimized WebP versions. All three are 1672 × 941 landscape illustrations (approximately 16:9).

## Placement

- `magical-arrival-hero`: above-the-fold header on the organizer, family landing page, and all seven household guides.
- `planning-desk`: organizer Planning Desk chapter and family Daily Plans introduction.
- `ready-for-magic`: organizer Extras & Preparation chapter and family Bring Along section.

These are decorative fantasy scenes. Actual hotel, room and venue photographs remain in their existing factual selection cards. Ticket artwork and emoji are preserved.

## Generation prompts

### magical-arrival-hero

Use case: illustration-story. Create a premium wide 16:9 website hero illustration for a magical Disney-inspired Williams family vacation planner. A sweeping storybook theme park at blue hour: an illuminated fairytale castle in the right third, Victorian Main Street rooftops and a curved miniature steam railway in the foreground, reflective lagoon, firefly-like golden lights and tasteful fireworks. Deep midnight navy, emerald foliage, warm champagne gold, subtle lavender sky. Rich painterly architectural detail, sophisticated cinematic travel-poster quality, inviting and wondrous rather than childish. Leave the left third mostly quiet dark blue sky and soft distant landscape so HTML heading text can overlay legibly. No text, lettering, logos, watermark, UI, borders, or recognizable characters. Composition should crop gracefully on mobile with castle near center-right. This is a decorative fantasy illustration, not a photograph of a real hotel.

### ready-for-magic

Use case: illustration-story. Create a wide 16:9 editorial illustration for the packing and preparation section of a sophisticated magical family theme-park travel website. A beautiful open vintage tan leather suitcase on a cream upholstered bench near a Victorian resort window; neatly arranged sunhat, small backpack, walking shoes, refillable water bottle, folded rain poncho and charging cable. Through the window distant dreamy castle lights and a few golden sparkles at dusk. Rich painterly travel-poster illustration, elegant warm ivory, muted emerald, midnight blue and champagne gold palette, gentle inviting light, plenty of breathing room, no clutter. A coherent single scene, not collage. No text, no logos, no watermark. Decorative illustration not a product advertisement.

### planning-desk

Use case: illustration-story. Wide 16:9 premium painterly illustration for a magical family vacation planner's planning-desk section. A charming Victorian explorer's desk overlooking a softly lit fantasy theme park at blue hour. On the desk an open cream travel journal with blank pages, elegant gold compass, vintage admission tickets with no legible lettering, fountain pen, little brass lantern, a loose simple illustrated map without labels. In background arched window with distant castle silhouette and tiny warm fairy lights. Navy blue, emerald, warm ivory and champagne gold. Detailed tactile paper and wood, cinematic lamplight, calm thoughtful inviting atmosphere. Horizontal composition with restrained clutter and breathing room. No text, numbers, logos, UI, watermark or recognizable characters. Illustration, not a screenshot or actual travel document.

## Rebuilding

The app assets are in `app/public/magical/art/`. `build-standalone.cjs` copies them to `standalone-planner/magical/art/`; `build-family-site.cjs` copies that directory to `family-site/art/`.

Use the family publishing workflow with the current exported itinerary when updating established family plans. A generator run without an export makes placeholder guides.
