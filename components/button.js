import React from "react";
import { purpleToBlue } from "lib/gradients";

export default function Button({ href, children }) {
  const colors = "border-slate-400 text-slate-200 hover:shadow-inner";
  return (
    <a
      href={href}
      className={`${colors} ${purpleToBlue} whitespace-nowrap py-3 px-6 text-sm font-semibold uppercase !no-underline rounded rounded-md border`}
    >
      {children}
    </a>
  );
}
