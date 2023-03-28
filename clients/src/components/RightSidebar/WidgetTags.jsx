import React from 'react';

import './RightSidebar.css';

const tags = [
  'c',
  'css',
  'express',
  'firebase',
  'html',
  'java',
  'javascript',
  'mern',
  'mongodb',
  'mysql',
  'next.js',
  'node.js',
  'php',
  'python',
  'reactjs',
];

const WidgetTags = () => {
  return (
    <div className="widget-tags">
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
