import { mkdirSync, writeFileSync } from "node:fs";

// One-line Monday-morning punchline (max 200 chars, judged on laughs).
// Fresh angle: the bed vs. alarm war goes to couples therapy — and the
// therapist judges ME, not the alarm. No tired snooze/coffee cliche,
// just a tiny scene with a punchline that lands.
const joke =
  "Monday morning, my bed and my alarm went to couples therapy. The therapist took one look at me and sided with the bed.";

mkdirSync("/output", { recursive: true });
// Fail loudly rather than ever writing an entry the gate would refuse.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${joke.length}`);
}
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
