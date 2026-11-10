
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#090914",
      color: "white",
      fontFamily: "Arial",
      padding: "30px",
      textAlign: "center"
    }}>
      <h1 style={{fontSize: "42px"}}>
        IMAGINA <span style={{color: "#a78bfa"}}>AI</span>
      </h1>

      <p>Donnez vie à votre imagination grâce à l'intelligence artificielle.</p>

      <h2>Créez des images extraordinaires</h2>

      <textarea
        placeholder="Décrivez l'image que vous souhaitez créer..."
        style={{
          width: "90%",
          maxWidth: "600px",
          height: "120px",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "25px"
        }}
      />

      <br />

      <button style={{
        marginTop: "20px",
        padding: "16px 30px",
        borderRadius: "12px",
        background: "#8b5cf6",
        color: "white",
        border: "none",
        fontSize: "17px"
      }}>
        Générer mon image
      </button>

      <p style={{marginTop: "35px", color: "#aaa"}}>
        3 créations gratuites pour commencer
      </p>
    </main>
  );
}
