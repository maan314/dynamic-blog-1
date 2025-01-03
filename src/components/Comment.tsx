import { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Please enter a comment!");
      return;
    }
    setComments([...comments, comment.trim()]);
    setComment('');
  };

  const handleDelete = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-[200] mx-auto p-4 mb-3 mt-3 border border-gray-300 rounded-lg shadow-md bg-black">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-2 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200"
        >
          Post Comment
        </button>
      </form>

      <h2 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="p-2 border border-gray-300 rounded-md bg-gray-50 flex justify-between items-start"
            >
              <div>
                <strong className="block text-black">You</strong>
                <p className="text-black">{comment}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comment;
