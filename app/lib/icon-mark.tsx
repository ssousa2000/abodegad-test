type IconMarkProps = {
  size: number;
  background: string;
  foreground: string;
  borderRadius: number;
};

// Serif "D" centered in a 24×24 viewBox for predictable alignment at any scale.
const D_PATH =
  "M6 4h5.5c5.2 0 8.5 3.6 8.5 8s-3.3 8-8.5 8H6V4zm2.5 2.5v11H11c3.2 0 5-2.4 5-5.5S14.2 6.5 11 6.5H8.5V6.5z";

export function IconMark({
  size,
  background,
  foreground,
  borderRadius,
}: IconMarkProps) {
  const markSize = Math.round(size * 0.5625);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        borderRadius,
      }}
    >
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path fill={foreground} d={D_PATH} />
      </svg>
    </div>
  );
}
