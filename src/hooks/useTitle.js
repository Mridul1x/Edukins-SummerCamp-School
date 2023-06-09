import { useEffect } from "react";

const useTitlte = (title) => {
  useEffect(() => {
    document.title = `${title} | Groovy`;
  }, [title]);
};

export default useTitlte;
