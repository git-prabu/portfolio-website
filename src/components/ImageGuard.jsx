import { useEffect } from "react";

/*
  Casual-download deterrents for images:
  - blocks the right-click context menu when the target is an image
  - blocks drag-to-save on images
  Note: this is NOT real protection. Anything the browser renders can still be
  taken via dev tools (Network tab) or by opening the file URL directly — that
  is unavoidable for any public site. These handlers only stop casual saving.
*/
export default function ImageGuard() {
  useEffect(() => {
    const onContextMenu = (e) => {
      if (e.target.closest("img")) e.preventDefault();
    };
    const onDragStart = (e) => {
      if (e.target.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
