import React from "react";

export default function Callout({ children }) {
  return (
    <div className="px-6 text-slate-400 bg-[#1E1449] rounded-lg border border-slate-400">
      {children}
    </div>
  );
}
