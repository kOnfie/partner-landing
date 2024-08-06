import "./SectionTemplate.scss";

export default function SectionTemplate({ component, title }) {
  return (
    <div className="SectionTemplate">
      <div className="container">
        <h3 className="SectionTemplate__header h3">{title}</h3>
      </div>
      <div className="hr"></div>
      <div className="container">
        <div className="SectionTemplate__inner">{component}</div>
      </div>
    </div>
  );
}
