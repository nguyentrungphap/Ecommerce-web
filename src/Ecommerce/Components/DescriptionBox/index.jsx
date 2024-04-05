import React from "react";
import Style from "./style.module.scss";
function DescriptionBox() {
  return (
    <div className={Style.DescriptionBox}>
      <div className={Style.Navigator}>
        <div className={Style.NavBox}>Description</div>
        <div className={`${Style.NavBox} ${Style.Fade}`}>Reviews (122)</div>
      </div>
      <div className={Style.Description}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          delectus atque laudantium harum! Quod, asperiores fugiat. Tempore,
          magnam quidem tenetur provident libero cum aperiam minima ullam
          aliquam rerum reiciendis. Dicta. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quidem delectus atque laudantium harum!
          Quod, asperiores fugiat. Tempore, magnam quidem tenetur provident
          libero cum aperiam minima ullam aliquam rerum reiciendis. Dicta.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          excepturi sed odio vero sunt, eius officiis asperiores dolore. Vel
          sunt a nihil magnam? Consequatur amet laborum mollitia et incidunt
          nemo?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
