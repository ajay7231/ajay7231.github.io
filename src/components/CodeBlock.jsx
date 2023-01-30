import React, { useState, useEffect } from "react";
import Prism from "prismjs";

const CodeBlock = ({ className = "language-js", children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  });
  return (
    <div>
      <pre className="md:text-base text-[10px]">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
