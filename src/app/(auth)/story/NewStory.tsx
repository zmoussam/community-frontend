"use client";
import { CodeIcon, ImageIcon, MoreHorizontal, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "./newStory.css";

export default function NewStory() {
  const contentEditableRef = useRef<HTMLDivElement | null>(null);
  const [openTools, setOpenTools] = useState<boolean>(false);

  const [buttonPosition, setbuttonPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [content, setContent] = useState("");

  const getCaretPosition = () => {
    let x = 0;
    let y = 0;

    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection = window.getSelection() as Selection;

      if (selection?.rangeCount > 0) {
        const range = selection.getRangeAt(0).cloneRange();
        const rect = range.getClientRects()[0];
        if (rect) {
          x = rect.left;
          y = rect.top - 80;
        }
      }
    }

    return { x, y };
  };

  useEffect(() => {
    const handleInput = () => {
      if (contentEditableRef.current) {
        setContent(contentEditableRef.current.innerText);
      }
    };

    const editableDiv = contentEditableRef.current;
    if (editableDiv) {
      editableDiv.addEventListener("input", handleInput);
    }

    return () => {
      if (editableDiv) {
        editableDiv.removeEventListener("input", handleInput);
      }
    };
  }, []);

  useEffect(() => {
    const { x, y } = getCaretPosition();
    setbuttonPosition({ left: -50, top: y });
  }, [content]);

  useEffect(() => {
    if (typeof window.document !== "undefined") {
      const editor = new MediumEditor(".editable", {
        elementsContainer: document.getElementById("container") as HTMLElement,
        toolbar: {
          buttons: [
            "bold",
            "italic",
            "underline",
            "anchor",
            "h1",
            "h2",
            "h3",
            "quote",
          ],
        },
      });
      return () => {
        editor.destroy();
      };
    }
  }, []);

  return (
    <main
      id="container"
      className="max-w-[800px] mx-auto relative font-mono mt-5"
    >
      <div
        id="editable"
        ref={contentEditableRef}
        contentEditable
        suppressContentEditableWarning
        className="outline-none focus:outline-none editable max-w-[800px] prose"
        style={{ whiteSpace: "pre-line" }}
      >
        <h1 className="font-medium" data-h1-placeholder="Title"></h1>
        <p data-p-placeholder="Write you story ..."></p>
      </div>
      <div
        className={`z-10 ${buttonPosition.top === 0 ? "hidden" : ""}`}
        style={{
          position: "absolute",
          top: buttonPosition.top,
          left: buttonPosition.left,
        }}
      >
        <button
          onClick={() => setOpenTools(!openTools)}
          id="tooltip"
          className="border-[1px] border-neutral-500 p-1 rounded-full inline-block"
        >
          <Plus
            className={`duration-300 ease-linear ${
              openTools ? "rotate-90" : ""
            }`}
          />
        </button>
        <div
          id="tool"
          className={`flex items-center space-x-4 absolute top-0 left-14 ${
            openTools ? "visible" : "invisible"
          } `}
        >
          <span
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 bg-white`}
          >
            <ImageIcon size={20} className="opacity-60 text-green-800" />
          </span>
          <input type="file" accept="image/*" style={{ display: "none" }}  />
          <span
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 delay-75 bg-white`}
          >
            <MoreHorizontal size={20} className="opacity-60 text-green-800" />
          </span>
          <span
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 delay-100 bg-white`}
          >
            <CodeIcon size={20} className="opacity-60 text-green-800" />
          </span>
        </div>
      </div>
    </main>
  );
}
