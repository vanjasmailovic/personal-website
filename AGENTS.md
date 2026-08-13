# Repository instructions

## Selected Experience company logos

- Company logos in the **Selected Experience** section must have a visually consistent textual/wordmark height across every viewport, including mobile and desktop.
- Normalize the visible letter height, not the image element, source canvas, transparent whitespace, surrounding frame, or non-text symbol. Per-logo sizing and positioning are expected when source artwork differs.
- After changing a logo asset or its styles, visually compare all Selected Experience logos together at the affected viewport sizes. Do not consider the change complete if any company name appears materially larger or smaller than the others, or if its wordmark is clipped.
- Preserve each logo's aspect ratio. Handle optical alignment and source-image whitespace separately from wordmark-height normalization.

## Case study content

- Preserve the existing Problem / Built / Tech / Outcome structure and keep every case study anonymized. Do not imply ownership of product areas or features Vanja did not work on.
- Treat the following corpus-derived word counts as hard maximums, not targets. Prefer shorter copy when it preserves the meaning:
  - Title: 5 words.
  - Problem: 18 words.
  - Built: 22 words.
  - Outcome: 29 words.
  - Tech: 10 pills, with no more than 5 words in any pill.
- Count words as whitespace-separated tokens; hyphenated compounds count as one word. The content collection schema enforces the same limits, so do not bypass or weaken its validation to fit new copy.
- Include `Python` as the first Tech pill whenever Python was materially used in the implementation. Never omit it merely to make room for a more specialized library; remove a lower-signal pill if necessary to preserve the 10-pill maximum. If Python was not used, do not add it.
- Case-study wording on the website and in the portfolio PDF must match verbatim unless an accepted exception is recorded in `CONTENT_REVIEW.md`. After changing website case-study copy, report the exact field-level PDF delta. Do not replace the public PDF until Vanja supplies a matching Google Slides export.
- After changing a case study, run the content/type check and production build, then visually inspect the affected accordions together on desktop and mobile. Verify ordering, wrapping, technology pills, accordion behavior and horizontal overflow.
