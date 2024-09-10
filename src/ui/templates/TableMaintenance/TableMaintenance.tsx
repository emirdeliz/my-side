import { useState } from "react";
import { Modal, Table } from "@molecules";
import { GenericObject } from "@types";
import { Button, Flex, Icon, Link, Title } from "@atoms";
import { SectionTitle } from "../SectionTitle/SectionTitle";

interface TableMaintenanceProps<T> { 
  title: string;
  columns: Array<GenericObject>;
  dataSource: Array<T>;
  onEdit: (data: T) => void;
  onAdd: () => void;
  onConfirmDelete: (data?: T) => void;
}

export const TableMaintenance = <T extends GenericObject>({
  title, columns, dataSource, onEdit, onAdd, onConfirmDelete
}: TableMaintenanceProps<T>) => { 
  const [selectedItem, setSelectedItem] = useState<T>();
  const columnsEditable = columns.concat(
    {
      customCellRender: (data: T) => { 
        return (
          <Flex.Row hFull pt1>
            <Link ml3 onClick={() => onEdit(data)}>
              <Icon.Maintenance sm />
            </Link>
            <Link ml3 onClick={() => setSelectedItem(data)}>
              <Icon.TrashEmpty sm />
            </Link>
          </Flex.Row>
        );
    }}
  );

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Flex alignEnd>
        <Button onClick={onAdd}>Adicionar</Button>
      </Flex>
      <Modal
        confirm
        overlay
        visible={!!selectedItem}
        maxWidth="300px"
        onConfirm={() => {
          setSelectedItem(undefined);
          onConfirmDelete(selectedItem)
        }}
        onClose={() => setSelectedItem(undefined)}
      >
        <Title>Confirmar exclusão</Title>
      </Modal>
      <Table<T>
        sortable
        columns={columnsEditable}
        dataSource={dataSource}
      />
    </>
  );
};