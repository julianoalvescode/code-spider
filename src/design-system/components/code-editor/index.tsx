import React from "react";
import { Controller } from "react-hook-form";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

import * as I from "./types";

export const CodeEditor: React.FC<I.ICodeEditorProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="code"
      render={({ field: { onChange, value } }) => (
        <AceEditor
          mode="javascript"
          theme="dracula"
          onChange={onChange}
          name="acer_editor"
          value={value}
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="250px"
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            enableSnippets: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            autoScrollEditorIntoView: true,
            enableEmmet: true,
          }}
          highlightActiveLine={true}
        />
      )}
    />
  );
};
