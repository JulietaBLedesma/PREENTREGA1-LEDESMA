import React from "react";
import CartWidgets from "../CartWidgets/index"


const Navbar = () => {
  return (
    <div className="Navbar1">
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">KiraStore</button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
        <button className="categoria" type="button" id="remeras" href="#">Remeras</button>
        <button className="categoria" type="button" id="vestidos"  href="#">Vestidos</button>
        <button className="categoria" type="button" id="pantalones"  href="#">Pantalones</button>
        <button className="categoria" type="button" id="pantalones"  href="#"><CartWidgets/></button>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
     <div className="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
</div>
    </div>
  );
}

export default Navbar;
