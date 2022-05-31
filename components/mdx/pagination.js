import React from "react";
import Button from "components/button";

export default function Pagination({ previous, next }) {
  const justifyClass = previous && next ? "justify-between" : "justify-center";
  return (
    <div className={`${justifyClass} flex py-8`}>
      {previous && (
        <Button href={previous.href}>&laquo; Previous: {previous.label}</Button>
      )}
      {!previous && <div />}
      {next && <Button href={next.href}>&raquo; Next: {next.label}</Button>}
    </div>
  );
}
