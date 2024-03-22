import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
import "../../styles/codeview.css";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);

const Details = ({ title, children, lang = "xml" }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <>
      <details className="code-view">
        <summary>{title}</summary>
        <pre>
          <code ref={codeRef} className={`${lang} hljs`}>
            {children}
          </code>
        </pre>
      </details>
    </>
  );
};

export default Details;
