import React, { useState } from "react";
import { StyleEditorBlock } from "react-web-editor"; // Replace 'react-web-editor' with the actual package name

function WebPageEditor() {
  const [content, setContent] = useState("string");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const color = "blue"; // Replace with your desired color
  function YourOwnComponent({ color }) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          color: "white",
        }}
      >
        Your Content Goes Here
      </div>
    );
  }
  return (
    <StyleEditorBlock
      width={200}
      height={300}
      left={left}
      top={top}
      parentStyle={{ width: 600, height: 800 }}
      unit={"px"}
    >
      <YourOwnComponent color={color} />{" "}
      {/* Replace YourOwnComponent with your actual component */}
    </StyleEditorBlock>
  );
}

export default WebPageEditor;
