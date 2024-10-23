import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskCookbook from "@cookbookdev/docsbot/react";
import BrowserOnly from "@docusaurus/BrowserOnly";

/** It's a public API key, so it's safe to expose it here */

const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE4NDgxNzhhZGI5YjAzMTQ1YzRjMmIiLCJpYXQiOjE3Mjk2NDQ1NjcsImV4cCI6MjA0NTIyMDU2N30.e27wW3pU5tYtagb5yD2KhD74eJzqgUPUyZG6fdNp3pE";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>
        {() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />}
      </BrowserOnly>
    </>
  );
}
