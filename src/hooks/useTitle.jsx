import { useEffect } from "react";

const useTitlte = (title) => {
  useEffect(() => {
    document.title = `${title} | Edukins`;
  }, [title]);
};

export default useTitlte;
