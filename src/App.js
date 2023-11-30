import React, { useRef } from "react";

import EmailEditor from "react-email-editor";

const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      alert(JSON.stringify(design, null, 2));
      console.log("exportHtml", html);
    });
  };

  const onReady = (unlayer) => {
    console.log("I am working", unlayer);
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    unlayer.init({
      id: "editor-container",
    });

    unlayer.loadDesign({
      html: "<div>This is a legacy HTML template.</div>",
      classic: true,
    });

    // unlayer.loadDesign(template);
    // unlayer.saveDesign(function (design) {
    //   console.log("design", design);
    // });

    // unlayer.addEventListener("design:updated", function (updates) {
    //   // Design is updated by the user

    //   unlayer.exportHtml(function (data) {
    //     var json = data.design; // design json
    //     var html = data.html; // design html

    //     // Save the json, or html here
    //   });
    // });
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};

export default App;
