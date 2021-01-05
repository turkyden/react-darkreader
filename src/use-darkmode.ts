import { useState, useRef, useEffect } from "react";

import { getTargetElement, BasicTarget } from "./dom";

export type Options = {
  mixColor?: string;
  backgroundColor?: string;
};

const defaultOptions = {
  mixColor: "#fff",
  backgroundColor: "#fff"
};

export default function useDarkmode(
  target: BasicTarget,
  { mixColor, backgroundColor }: Options = defaultOptions
): [boolean, () => void] {
  const [dark, setDark] = useState(
    window.localStorage.getItem("darkmode") === "true"
  );

  const layerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const ele = getTargetElement(target) as HTMLElement;

    const css = `
      .darkmode-layer {
        position: absolute;
        pointer-events: none;
        background: ${mixColor || "#fff"};
        mix-blend-mode: difference;
      }
      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .darkmode-background {
        background: ${backgroundColor || "#fff"};
        position: absolute;
        pointer-events: none;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }
    `;

    const layer = document.createElement("div");
    const background = document.createElement("div");

    layer.classList.add("darkmode-layer");
    background.classList.add("darkmode-background");
    layer.classList.add("darkmode-layer--simple");

    if (ele) {
      ele.style.position = "relative";
      ele.insertBefore(layer, ele.firstChild);
      ele.insertBefore(background, ele.firstChild);
    }

    layerRef.current = layer;

    // add css
    const linkElement = document.createElement("link");

    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      "data:text/css;charset=UTF-8," + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);
  }, []);

  useEffect(() => {
    if (dark) {
      layerRef.current?.classList.add("darkmode-layer--simple");
    } else {
      layerRef.current?.classList.remove("darkmode-layer--simple");
    }
    window.localStorage.setItem("darkmode", dark.toString());
  }, [dark]);

  return [dark, () => setDark((prevState) => !prevState)];
}

