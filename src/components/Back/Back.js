import React from "react";
import { useNavigate } from "react-router-dom";
function Back() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/Home", { replace: true });
  };

  return <button onClick={() => navigate(-1)}>Go back</button>;
}

export default Back;
