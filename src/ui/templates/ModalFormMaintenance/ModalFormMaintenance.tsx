import { Modal } from "@molecules";
import { ReactNode } from "react";

interface ModalFormMaintenanceProps { 
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const ModalFormMaintenance = ({
  children, visible, onClose,
}: ModalFormMaintenanceProps) => {
  return (
    <Modal
      visible={visible}
      maxWidth="500px"
      onClose={onClose}
    >{children}</Modal>
  );
};