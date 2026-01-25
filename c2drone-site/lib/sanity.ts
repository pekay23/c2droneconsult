// lib/sanity.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "nl69ezed",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // <--- Change this to false for now!
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
