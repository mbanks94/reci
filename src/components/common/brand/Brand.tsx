import Image from "react-bootstrap/esm/Image";
import logo from "../../../images/logo.png";

export const Brand = () => {
  return (
    <>
      <div>
        <Image
          alt="reci box"
          src={logo}
          width="100"
          fluid
          className="d-inline-block"
        />{" "}
        <span className="appName">Reci</span>
      </div>
    </>
  );
};
