import { useEffect, useState } from "react";

export default function useMedia(queries, values, defaultValue) {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  const [value, set] = useState(matches);

  useEffect(() => {
    const handler = () => set(matches);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener(handler);
  }, []);
  return value;
}
