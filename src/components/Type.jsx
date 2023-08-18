import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Backend Specialist",
          "Effective Communicator & Soft Skills Maven",
          "CRUD Operations Connoisseur",
          "High-Performance Backend Challenge Resolver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
