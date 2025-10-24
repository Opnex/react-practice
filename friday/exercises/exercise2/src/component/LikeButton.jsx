import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

 
  const handleLikeToggle = () => {
    if (isDisabled) return; 
    
   y
    setIsDisabled(true);
    
    
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
   
    if (newLikedState) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    
    
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <div className="like-container">
      <button 
        className={`like-btn ${isLiked ? 'liked' : 'unliked'} ${isDisabled ? 'disabled' : ''}`}
        onClick={handleLikeToggle}
        disabled={isDisabled}
      >
        
        <span className="emoji">
          {isLiked ? '❤️' : '🤍'}
        </span>
        <span className="text">
          {isLiked ? 'Liked' : 'Like'}
        </span>
      </button>
      
      
      <div className="like-count">
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </div>
      
      <div className="instruction">
        {isDisabled ? 'Please wait...' : '(Click to toggle)'}
      </div>
    </div>
  );
};

export default LikeButton;