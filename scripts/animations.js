import { gsap } from "gsap";
//animation for the popup modal
export function animatePopup(popup, status) {
  gsap.to(popup, 0.7, {
    opacity: "80%",
    top: "-1px",
    ease: "ease.in",
    backgroundColor: status ? "#14D814" : "#f2150b",
  });

  setTmeout(() => {
    gsap.to(popup, 0.5, {
      opacity: "0",
      top: "-150px",
      ease: "ease.out",
      backgroundColor: "yellow",
    });
  }, 5000);
}
