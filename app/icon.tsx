import { ImageResponse } from "next/og";
import { brandColors } from "./lib/brand";
import { IconMark } from "./lib/icon-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <IconMark
        size={32}
        background={brandColors.darkgreen}
        foreground={brandColors.beige}
        borderRadius={6}
      />
    ),
    { ...size }
  );
}
