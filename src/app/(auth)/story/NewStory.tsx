"use client";
import React, { useRef } from "react";

export default function NewStory() {
  const contentEditableRef = useRef<HTMLDivElement | null>(null);

  return (
    <main
      id="container"
      className="max-w-[800px] mx-auto relative font-mono mt-20"
    >
      <div
        id="editable"
        ref={contentEditableRef}
        className="outline-none focus:outline-none editable max-w-[800px]"
      >
		test
	  </div>
    </main>
  );
}
