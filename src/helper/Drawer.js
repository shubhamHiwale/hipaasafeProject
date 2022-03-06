import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Drawer = ({ toggleDrawer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};

export default Drawer;
