// Reusable Tableau and generic iframe embed components
import React from "react";

// Generic responsive iframe wrapper you can reuse for other providers
export function IframeEmbed({
  src,
  title = "Embedded content",
  aspectRatio = "16 / 9",
  className = "embed-responsive",
  allowFullScreen = true,
  allow = "fullscreen; clipboard-write; autoplay; encrypted-media",
  loading = "lazy",
  ...iframeProps
}) {
  if (!src) {
    console.warn("IframeEmbed: Missing 'src' prop.");
    return null;
  }

  return (
    <div className={className} style={{ aspectRatio }}>
      <iframe
        title={title}
        src={src}
        loading={loading}
        allow={allow}
        allowFullScreen={allowFullScreen}
        frameBorder="0"
        {...iframeProps}
      />
    </div>
  );
}

// Tableau-specific helper that appends common embed params
export default function TableauEmbed({
  url,
  title = "Tableau Viz",
  hideTabs = true,
  hideToolbar = true,
  params = {},
  aspectRatio = "16 / 9",
  className = "embed-responsive",
  ...rest
}) {
  if (!url) {
    console.warn("TableauEmbed: Missing 'url' prop.");
    return null;
  }

  const baseParams = {
    ":showVizHome": "no",
    ":embed": "y",
    ...(hideTabs ? { ":tabs": "no" } : {}),
    ...(hideToolbar ? { ":toolbar": "no" } : {}),
    ...params,
  };

  const qp = new URLSearchParams(baseParams).toString();
  const src = url.includes("?") ? `${url}&${qp}` : `${url}?${qp}`;

  return (
    <IframeEmbed
      src={src}
      title={title}
      aspectRatio={aspectRatio}
      className={className}
      {...rest}
    />
  );
}

