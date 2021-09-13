import { useMediaQuery } from "react-responsive";

export default function useDevice() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return {
    isDesktop,
    isTablet,
    isMobile,
    isNotMobile,
  };
}
