import Image from "next/image";
import exampleImage from "../assets/img/Header_logo.png"; // 이미지 import

export default function imgcomp() {
  return (
    <div>
      <Image src={exampleImage} alt="Example" />
    </div>
  );
}
