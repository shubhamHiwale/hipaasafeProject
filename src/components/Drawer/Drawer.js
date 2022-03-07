import React from "react";
import "react-modern-drawer/dist/index.css";
import Patient from "../../DrawerField/Patient";

const Drawer = () => {
  const [isOpen2, setIsOpen2] = React.useState(false);
  const toggleDrawer2 = () => {
    setIsOpen2((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen2}
        onClose={toggleDrawer2}
        direction="right"
        className="bla bla bla"
      >
        <Patient />
      </Drawer>
      ;
    </>
  );
};

export default Drawer;
