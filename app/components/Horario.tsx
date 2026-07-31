import { horarios } from "../data/site";

type HorarioProps = {
  variant: "hero" | "footer";
};

export default function Horario({ variant }: HorarioProps) {
  if (variant === "hero") {
    return (
      <div className="text-right text-beige self-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-lightmustard mb-2">
          Horario de atención:
        </h3>
        {horarios.map((group, groupIndex) => (
          <div
            key={group.title ?? `group-${groupIndex}`}
            className={
              groupIndex > 0
                ? "mt-4 pt-3 border-t border-beige/20"
                : undefined
            }
          >
            {group.title && (
              <p className="font-semibold text-lightmustard text-base sm:text-lg mb-1">
                {group.title}
              </p>
            )}
            {group.rows.map((row) => (
              <p key={row.label}>
                <span className="font-bold text-beige">{row.label}:</span>{" "}
                {row.hours}
              </p>
            ))}
          </div>
        ))}
        <div className="mt-2">
          <span className="font-bold text-beige">Dirección:</span>{" "}
          <span className="text-beige/70">San Fernando, 401, Miraflores</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <span className="font-bold font-playfair text-lg">Horario</span>
      {horarios.map((group, groupIndex) => (
        <div
          key={group.title ?? `group-${groupIndex}`}
          className={groupIndex > 0 ? "pt-2 border-t border-darkgreen/20" : undefined}
        >
          {group.title && (
            <div className="font-semibold text-mustard">{group.title}</div>
          )}
          {group.rows.map((row) => (
            <div key={row.label}>
              {row.label}: {row.hours}
            </div>
          ))}
        </div>
      ))}
      <div>Teléfono: +51 980 080 232</div>
    </div>
  );
}
