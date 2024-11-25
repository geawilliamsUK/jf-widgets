import React, { useEffect } from "react";

declare global {
  interface Window {
    Persona: {
      Client: new (options: {
        templateId: string;
        environmentId: string;
        onReady?: () => void;
        onComplete?: (result: {
          inquiryId: string;
          status: string;
          fields: any;
        }) => void;
      }) => PersonaClient;
    };
  }

  interface PersonaClient {
    open: () => void;
  }
}

const KYCWidget = () => {
  useEffect(() => {
    // Ensure the Persona script is loaded when the component is mounted
    const script = document.createElement("script");
    script.src = "https://cdn.withpersona.com/dist/persona-v5.1.2.js";
    script.integrity = "sha384-nuMfOsYXMwp5L13VJicJkSs8tObai/UtHEOg3f7tQuFWU5j6LAewJbjbF5ZkfoDo";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const startKyc = () => {
    // Ensure the Persona client is created and invoked when the user clicks
    if (window.Persona) {
      const client: PersonaClient = new window.Persona.Client({
        templateId: "itmpl_UuuaS5X4g9iokybgnZzdBwqm16K5",
        environmentId: "env_dTWUpy9ABSzdDqJnFvEA9ckE16Go",
        onReady: () => client.open(),
        onComplete: ({ inquiryId, status, fields }) => {
          console.log(`Completed inquiry ${inquiryId} with status ${status}`);
        },
      });
    } else {
      console.error("Persona library not loaded yet.");
    }
  };

  return (
    <div>
      <h1>KYC Validation Widget</h1>
      <button onClick={startKyc}>Start KYC</button>
    </div>
  );
};

export default KYCWidget;