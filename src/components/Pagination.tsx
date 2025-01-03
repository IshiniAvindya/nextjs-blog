import React from "react";

interface PaginationProps {
  pagePrev: number | null;
  pageNext: number | null;
  basePath?: string; // Optional base path for URLs
}

export default function Pagination({
  pagePrev,
  pageNext,
  basePath = "/page",
}: PaginationProps) {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {/* Previous Button */}
      {pagePrev && (
        <a
          href={pagePrev === 1 ? "/" : `${basePath}/${pagePrev}`}
          style={{
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Previous
        </a>
      )}

      {/* Next Button */}
      {pageNext && (
        <a
          href={`${basePath}/${pageNext}`}
          style={{
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Next
        </a>
      )}
    </nav>
  );
}
