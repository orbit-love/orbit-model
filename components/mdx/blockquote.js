import React from "react";

export default function Blockquote({ children }) {
  return (
    <div className="px-6 text-slate-400 border-l-8 border-indigo-900">
      {children}
    </div>
  );
}
