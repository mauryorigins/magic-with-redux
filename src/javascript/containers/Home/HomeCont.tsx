// ---Dependencys
import React, { useState } from 'react';
// ---Components
import Message from 'Cont/Home/components/Message';
import ShowList from 'Cont/Home/components/ShowList';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HomeCont(): React.ReactElement {
  // --- Const Hooks and States
  const [showList, setShowList] = useState(false);
  // ---- Main Methods
  function handleClick () {
    setShowList(!showList);
    console.log('cambio showList', showList);
  }

  return (
    <>
      <Message />
      <Message />
      <Message />
      <Message />
      <ShowList handleclick={handleClick} showList={showList} />
    </>
  );
}
