import MoreProjects from "@/components/Home/Projects/MoreProjects";

export default function PreviewPage() {
  return (
    <div
      style={{
        backgroundColor: "#f0ebe6",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "4rem 8rem",
        gap: "64px",
        overflow: "auto",
      }}
    >
      {/* Context card mimicking a project article */}
      <article
        style={{
          flex: "0 0 auto",
          width: "420px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "375px",
            backgroundColor: "#d4d0cb",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{ color: "#6b6b6b", fontFamily: "Inter, sans-serif", fontSize: "14px" }}
          >
            Image projet
          </span>
        </div>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#212be8",
            letterSpacing: "0.2em",
            fontFamily: "Inter, sans-serif",
          }}
        >
          03
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 700,
            color: "#0a0a0a",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Projet 3
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            fontWeight: 600,
            color: "#212be8",
            fontFamily: "Inter, sans-serif",
          }}
        >
          À définir
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["PWA", "Node.js", "Express"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid #d4d0cb",
                padding: "6px 14px",
                backgroundColor: "#ffffff",
                fontFamily: "Inter, sans-serif",
                color: "#0a0a0a",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* The new "Voir plus de projets" component */}
      <div style={{ height: "601px", display: "flex" }}>
        <MoreProjects />
      </div>
    </div>
  );
}
