import React from "react";
import { Modal } from "@mantine/core";

const PostOptions = ({ isOpen, toggleModal }) => {
  return (
    <div className="relative">
      <Modal
        className="absolute bottom-0"
        opened={isOpen}
        size="100%"
        xOffset="2"
        yOffset="300"
        onClose={() => toggleModal()}
        withCloseButton={false}
      ></Modal>
    </div>
  );
};

export default PostOptions;
