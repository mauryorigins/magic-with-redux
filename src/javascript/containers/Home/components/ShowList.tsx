// ---Dependencys
import { ReactElement } from 'react';
import { Button } from 'antd';
// ---Others
import data from 'Others/data.json'

// ------------------------------------------ PROP TYPES-----------------------------------------
interface Props {
  handleclick: () => any;
  showList: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ShowList(props: Props) : ReactElement {
  // --- Const Hooks and States
  const { handleclick, showList } = props;
  const { loaders } = data;
  // ---Inner Types
  interface Item {
    name: string;
    id: string;
  }
  return (
    <>
      <Button
        type="primary"
        onClick={handleclick}
      >
        Show Loaders
      </Button>
      {showList && loaders.map((item: Item, index: number) => <p key={index}>{item.name}</p>)}
    </>
  );
}
