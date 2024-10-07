import React from "react";
import Image from "next/image";
import exampleImage from "../assets/img/header_logo.png";

export default function imgcomp() {
  return (
    <div>
      <Image src={exampleImage} alt="Example" />
    </div>
  );
}
