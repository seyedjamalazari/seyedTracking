import React, { useRef, useState } from "react";
import { CopyClipboardStyle } from "./copyClipboard.style";

const CopyClipBord = () => {
  const input = useRef(null);

  function copyToClipboard(e) {
    input.current.select();
    document.execCommand("copy");
  }

  return (
    <>
      <CopyClipboardStyle>
        <div>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <input ref={input} value={window.location.href} />
      </CopyClipboardStyle>
    </>
  );
};
export default CopyClipBord;
