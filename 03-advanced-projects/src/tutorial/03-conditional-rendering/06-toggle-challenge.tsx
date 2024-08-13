import { useState } from "react";

export function ToggleChallenge() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
}

function Alert() {
  return <div className="alert alert-danger">hello world</div>;
}
