import { useEffect, useState } from "react";

/**
 * useMobile
 * Ekran boyutuna göre mobil mi değil mi kontrol eder
 * @param breakpoint Mobil sayfa için max genişlik (default: 768px)
 */
export const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
