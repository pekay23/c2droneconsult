import { createClient } from "next-sanity";
// FIXED IMPORT: Use the named export as suggested
import { createImageUrlBuilder } from "@sanity/image-url"; 

export const client = createClient({
  projectId: "nl69ezed",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Good for development to see fresh data
});

// Use the named export to create the builder
const builder = createImageUrlBuilder(client);

// This function remains the same, it just uses the correctly created builder now
export function urlFor(source: any) {
  return builder.image(source);
}
