import { ImageResponse } from "next/og";
import { brandColors } from "./lib/brand";
import { IconMark } from "./lib/icon-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <IconMark
        size={180}
        background={brandColors.darkgreen}
        foreground={brandColors.beige}
        borderRadius={32}
      />
    ),
    { ...size }
  );
}
