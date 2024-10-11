import React from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import ClapComponent from "./ClapComponent";
import CommentComponent from "./CommentComponent";
import SaveComponent from "./SaveComponent";
import ShareComponent from "./ShareComponent";

type Props = {
  authorFirstName: string | null;
  authorLastName: string | null;
  authorImage: string;
  publishedStory: any;
};

const RenderStory = ({
  authorFirstName,
  authorLastName,
  authorImage,
  publishedStory,
}: Props) => {
  const stripHtmlTags = (htmlString: string) => {
    return htmlString.replace(/<[^>]*>/g, "");
  };
  const h1Match = publishedStory.content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1Element = h1Match ? h1Match[1] : "";

  const h1ElementWithoutTag = stripHtmlTags(h1Element);
  return (
    <div className="flex items-center justify-center mt-6 max-w-[800px] mx-auto">
      <div>
        <h1 className="text-4xl font-bold my-8">{h1ElementWithoutTag}</h1>
        <div className="flex items-center space-x-5">
          <Image
            src={authorImage}
            className="rounded-full"
            width={44}
            height={44}
            alt="User"
          />
          <div className="text-sm">
            <p>
              {authorFirstName} {authorLastName}{" "}
              <span className="font-medium text-red-400 cursor-pointer">
                . follow
              </span>
            </p>
            <p className="opacity-60">
              Published on{" "}
              {new Date(publishedStory.updatedAt)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}
            </p>
          </div>
        </div>
        <div className="border-y-[1px] border-neutral-200 py-3 mt-6 flex items-center justify-center px-3">
          <div className="flex items-center space-x-4">
            <ClapComponent />
            <CommentComponent />
          </div>
          <div className="flex items-center space-x-4">
            <SaveComponent />
            <ShareComponent />
			<button>
				<MoreHorizontal size={24} className="opacity-80 text-green-800"/>
			</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderStory;
