"use client"
import React, { useState, useEffect } from 'react';

const Commentsec = () => {
  // State for holding username and comment
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{username:string |null; comment:string | null}[]>([]);

  // Load comments from local storage on component mount
  useEffect(() => {
    // Ensure we're on the client-side before accessing localStorage
    if (typeof window !== 'undefined') {
    //   const savedComments = JSON.parse(localStorage.getItem('comments')) || []; // Default to empty array if null
    //   setComments(savedComments);
    }
  }, []);

  // Handle username change
  const handleUsernameChange = (e:any) => {
    setUsername(e.target.value);
  };

  // Handle comment change
  const handleCommentChange = (e:any) => {
    setComment(e.target.value);
  };

  // Submit comment
  const handleSubmit = () => {
    if (username.trim() === '' || comment.trim() === '') {
      alert('Please enter both username and comment');
      return;
    }

    const newComment = {
      username: username,
      comment: comment,
      id: new Date().getTime(), // Unique ID for each comment
    };

    // Save new comment to localStorage
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    // Ensure we're on the client-side before accessing localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }

    // Clear input fields after submit
    setUsername('');
    setComment('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Comment Section</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
      >
        Submit Comment
      </button>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-4">All Comments:</h3>
        <div>
          {comments.map((item) => (
            <div key={item.comment} className="mb-4 p-4 border border-gray-300 rounded-md shadow-sm">
              <strong className="text-blue-500">{item.username}</strong>
              <p className="mt-2">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commentsec;
