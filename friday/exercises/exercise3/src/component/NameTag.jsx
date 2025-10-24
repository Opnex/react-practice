import React, { useState } from 'react';
import './NameTag.css';

const NameTag = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');


  const handleDownload = () => {
    const formattedTag = `
--- NAME TAG ---
Hello, my name is
${name.toUpperCase() || 'YOUR NAME'}
${title || 'Your Title'}
${company || 'Your Company'}
    `.trim();

    alert('Name Tag Content:\n' + formattedTag);
    

    console.log('Name Tag Content:', formattedTag);
  };

  return (
    <div className="name-tag-generator">
      <h2>Name Tag Generator</h2>
      
      
      <div className="input-group">
        <div className="input-field">
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-field">
          <label htmlFor="title">Job Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter your job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-field">
          <label htmlFor="company">Company:</label>
          <input
            id="company"
            type="text"
            placeholder="Enter your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input"
          />
        </div>
      </div>

      
      <button 
        className="download-btn"
        onClick={handleDownload}
        disabled={!name && !title && !company}
      >
        Download Name Tag
      </button>

      
      <div className="name-tag-preview">
        <div className="name-tag">
          <div className="name-tag-header">
            <span className="hello-text">Hello, my name is</span>
          </div>
          <div className="name-tag-content">
            <h2 className="name">{name.toUpperCase() || 'YOUR NAME'}</h2>
            <p className="title">{title || 'Your Title'}</p>
            <p className="company">{company || 'Your Company'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameTag;