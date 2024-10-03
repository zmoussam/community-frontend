"use client";
import dynamic from "next/dynamic";

// Dynamically import the MediumEditor component to disable SSR for it
const NewStory = dynamic(() => import("./NewStoryComponent"), {
  ssr: false,
});

export default NewStory;
