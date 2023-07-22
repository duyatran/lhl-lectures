// import { useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'Hooks are fun!';

  useDocumentTitle(title);

  return (
    <h2>Document Title component</h2>
  );
}

export default DocumentTitle;