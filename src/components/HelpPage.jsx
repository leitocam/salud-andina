import React, { useState } from "react";
import { FaWhatsapp, FaLock } from "react-icons/fa";

const App = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    ciudad: "",
    edad: "",
  });
  const [password, setPassword] = useState("");
  const [showOverlay, setShowOverlay] = useState(false); // Controla el overlay

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("nombre", formData.nombre);
    formDataToSend.append("apellidos", formData.apellidos);
    formDataToSend.append("telefono", formData.telefono);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("ciudad", formData.ciudad);
    formDataToSend.append("edad", formData.edad);

    try {
      const response = await fetch("https://ongsaludandina.com/guardar_datos.php", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.text();
      alert(result); // Mensaje del backend
      setFormData({
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        ciudad: "",
        edad: "",
      }); // Limpiar formulario
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  const handleExport = () => {
    const password = prompt("Ingresa la contraseña:");
    if (password === "0000") {
      window.location.href = "https://ongsaludandina.com/exportar_datos.php";
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Overlay de contraseña */}
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Introduce la contraseña</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleExport()}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Aceptar
              </button>
              <button
                onClick={() => setShowOverlay(false)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sección destacada para WhatsApp */}
      <div
        style={{
          background: "linear-gradient(90deg, #25D366, #128C7E)",
          color: "white",
          padding: "70px 30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          ¡Contáctanos directamente por WhatsApp! <br />
          Dejanos cualquier consulta o duda que tengas.
        </h1>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "15px 30px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#25D366",
            backgroundColor: "white",
            borderRadius: "50px",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
          }}
        >
          <FaWhatsapp size={30} style={{ marginRight: "10px" }} />
          WhatsApp
        </a>
      </div>

      {/* Texto de "O" para indicar otra opción */}
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        O
      </div>

      {/* Formulario */}
      <h2 style={{ textAlign: "center" }}>Déjanos tus datos</h2>
      <form
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={formData.edad}
          onChange={handleChange}
          required
          style={{
            display: "block",
            margin: "10px auto",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "block",
            margin: "20px auto",
          }}
        >
          Enviar
        </button>
      </form>

      {/* Ícono de candado en la parte inferior */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <FaLock
          size={24}
          style={{ cursor: "pointer", color: "#6c757d" }}
          onClick={() => setShowOverlay(true)}
        />
      </div>
    </div>
  );
};

export default App;
