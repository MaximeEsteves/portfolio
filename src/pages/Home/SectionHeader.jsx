import "./SectionHeader.scss";

function SectionHeader({ eyebrow, title, description, actions, align = "left" }) {
  const alignmentClass = align === "center" ? "is-center" : "is-left";

  return (
    <div className={`section-header ${alignmentClass}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div className="section-title-row">
        <h2>{title}</h2>
        {actions && <div className="section-actions">{actions}</div>}
      </div>
      {description && (
        <p
          className="section-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <div className="section-line" aria-hidden="true" />
    </div>
  );
}

export default SectionHeader;
