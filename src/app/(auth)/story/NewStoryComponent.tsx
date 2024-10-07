"use client";
import { CodeIcon, ImageIcon, MoreHorizontal, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MediumEditor, { delay } from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "./newStory.css";
import { createRoot } from "react-dom/client";
import { ImageUpload } from "@/actions/cloudinary";
import axios from "axios";
import { Backend_URL } from "@/app/lib/Constants";
import { useSession } from "next-auth/react";

type Props = {
  storyId: string;
  Storycontent: string | null | undefined;
};

export default function NewStoryComponent({ storyId, Storycontent }: Props) {
  const session = useSession();
  const contentEditableRef = useRef<HTMLDivElement | null>(null);
  const [openTools, setOpenTools] = useState<boolean>(false);
  const [buttonPosition, setbuttonPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedHandleSave = useRef(
    debounce(() => {
      handleSave();
    }, 1000)
  ).current;

  const handleSave = async () => {
    const content = contentEditableRef.current?.innerHTML;
    setSaving(true);

    try {
      const response = await fetch(Backend_URL + "/posts/" + storyId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.token}`,
        },
        body: JSON.stringify({
          title: "",
          subtitle: "",
          content: content,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
    } catch (error) {
      console.error("Error in saving:", error);
    }
    setSaving(false);
  };

  const InsertImageComp = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setOpenTools(false);
      const localImageUrl = URL.createObjectURL(file);
      const ImageComponent = (
        <ImageComp
          imageUrl={localImageUrl}
          file={file}
          handleSave={debouncedHandleSave}
        />
      );
      const wrapperDiv = document.createElement("div");
      const root = createRoot(wrapperDiv);
      root.render(ImageComponent);

      contentEditableRef.current?.appendChild(wrapperDiv);
    }
  };

  const InsertDivider = () => {
    const DividerComp = <Divider />;
    setOpenTools(false);
    const wrapperDiv = document.createElement("div");
    const root = createRoot(wrapperDiv);
    root.render(DividerComp);
    contentEditableRef.current?.appendChild(wrapperDiv);
    handleSave();
  };

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
          x = rect.left + window.screenX;
          y = rect.top + window.scrollY - 80;
        }
      }
    }

    return { x, y };
  };

  useEffect(() => {
    const handleInput = () => {
      if (contentEditableRef.current) {
        setContent(contentEditableRef.current.innerText);

        debouncedHandleSave();
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

  //   const [story, setStory] = useState<string>("");

  //   useEffect(() => {
  //     const fetchStoryById = async () => {
  //       try {
  //         const response = await fetch(Backend_URL + "/posts/" + storyId, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${session.data?.token}`,
  //           },
  //         });

  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }

  //         const result = await response.json();
  //         console.log(result.content);
  //         setStory(result.content);
  //       } catch (error) {
  //         console.error("Error in getting story:", error);
  //       }
  //     };
  //     fetchStoryById();
  //   }, []);

  return (
    <main
      id="container"
      className="max-w-[800px] mx-auto relative font-mono mt-5"
    >
      <p className="absolute -top-4 opacity-30">
        {saving ? "saving..." : "saved"}
      </p>
      <div
        id="editable"
        ref={contentEditableRef}
        contentEditable
        suppressContentEditableWarning
        className="outline-none focus:outline-none editable max-w-[800px] prose"
        style={{ whiteSpace: "pre-line" }}
      >
        {Storycontent ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: Storycontent }}></div>
          </>
        ) : (
          <>
            <h1 className="font-medium" data-h1-placeholder="Title"></h1>
            <p data-p-placeholder="Write you story ..."></p>
          </>
        )}
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
            onClick={InsertImageComp}
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 bg-white cursor-pointer`}
          >
            <ImageIcon size={20} className="opacity-60 text-green-800" />
          </span>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          <span
            onClick={InsertDivider}
            className={`border-[1.5px] border-green-500 rounded-full block p-[6px] ${
              openTools ? "scale-100 visible" : "scale-0 invisible"
            } ease-linear duration-100 delay-75 bg-white  cursor-pointer`}
          >
            <MoreHorizontal size={20} className="opacity-60 text-green-800" />
          </span>
        </div>
      </div>
    </main>
  );
}

const ImageComp = ({
  imageUrl,
  file,
  handleSave,
}: {
  imageUrl: string;
  file: File;
  handleSave: () => void;
}) => {
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(imageUrl);

  const updateImageUrl = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      await ImageUpload(formData).then((SecureImageUrl) => {
        setCurrentImageUrl(SecureImageUrl);
      });
    } catch (error) {
      console.log("Error uploading the image", error);
    }
  };

  useEffect(() => {
    updateImageUrl().then(() => {
      handleSave();
    });
  }, [imageUrl]);

  return (
    <div className="py-3">
      <div>
        <img
          src={currentImageUrl}
          alt="Image"
          className="max-w-full h-[450px]"
        />
        <div className="text-center text-sm max-w-md mx-auto">
          <p data-p-placeholder="Type caption for your image"></p>
        </div>
      </div>
      <p data-p-placeholder="..."></p>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="py-3 w-full">
      <div
        className="text-center flex items-center justify-center"
        contentEditable={false}
      >
        <MoreHorizontal size={32} />
      </div>
      <p data-p-placeholder="Write your text ..."></p>
    </div>
  );
};
