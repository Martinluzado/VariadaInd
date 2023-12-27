import React, { useEffect, useState } from "react";
import "../Styles/Message.css";
const Message = ({ onClose }) => { const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Verificar si el mensaje ya se ha mostrado
    const hasMessageShown = localStorage.getItem("hasMessageShown");

    if (!hasMessageShown) {
      // Mostrar el mensaje si aún no se ha mostrado
      setShowMessage(true);

      // Marcar el mensaje como mostrado en localStorage
      localStorage.setItem("hasMessageShown", "true");
    }
  }, []);

  const handleClose = () => {
    // Ocultar el mensaje y llamar a la función onClose
    setShowMessage(false);
    onClose();
  };
  return (
    <div className="messageDiv">
  <div style={{ margin: "0" }}>
        <h1 className="pmessage">
          Variada Indumentaria les desea Felices Fiestas y próspero Año Nuevo!
        </h1>
      </div>
      <div style={{ margin: "0" }}>
        <button  className="closeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;
