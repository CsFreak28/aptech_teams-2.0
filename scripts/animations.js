import { gsap } from "gsap";
export function animatePopup(popup, status) {
  gsap.to(popup,0.7, {
    opacity: "1",
    scale: "1",
    top: "3%",
    ease: "ease.in",
    backgroundColor: status ? "#32cd32" : "#f2150b",
  });

  setTimeout(() => {
    gsap.to(popup, 0.5, {
      opacity: "0",
      scale: "0",
      top: "-150px",
      ease: "ease.out",
      backgroundColor: "yellow",
    });
  }, 3000);
}
