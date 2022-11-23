import React from "react";

export default function postLayout({children}) {
  return (
    <div>
      <h1>Post</h1>
      <ul>
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      {children}
    </div>
  );
}
