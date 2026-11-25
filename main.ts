import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I didn't miss the deadline, the deadline missed me \u2014 it arrived early, took one look at my draft, and left without even saying goodbye, which honestly stings more than being late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
