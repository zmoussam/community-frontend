import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH } from "react-icons/fa";

interface BlogActionsProps {
  likes: number;
  comments: number;
  shares: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onReport?: () => void;
}

const BlogActions: React.FC<BlogActionsProps> = ({
  likes,
  comments,
  shares,
  onLike,
  onComment,
  onShare,
  onReport,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <div className="flex items-center space-x-8">
      <button
        onClick={onLike}
        className="flex items-center text-gray-600 hover:text-blue-500"
      >
        <FaThumbsUp className="mr-1" />
        Like
        <span className="ml-1 text-sm text-gray-500">({likes})</span>
      </button>
      <button
        onClick={onComment}
        className="flex items-center text-gray-600 hover:text-blue-500"
      >
        <FaComment className="mr-1" />
        Comment
        <span className="ml-1 text-sm text-gray-500">({comments})</span>
      </button>
      <button
        onClick={onShare}
        className="flex items-center text-gray-600 hover:text-blue-500"
      >
        <FaShare className="mr-1" />
        Share
        <span className="ml-1 text-sm text-gray-500">({shares})</span>
      </button>
    </div>
  );
};

export default BlogActions;
