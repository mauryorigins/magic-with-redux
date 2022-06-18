// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import { Tests } from 'Pages/Home/HomeCont/Tests/Tests';
import { RendersCounter } from 'Utils/compsTemplates/RendersCounter/RendersCounter';

/**
 * HomeCont Component: where all the posts will be displayed
 * @returns {ReactElement} ReactElement
 */
export function HomeCont(): ReactElement {
  // --- Const Hooks and States
  // ---- Main Methods
  return (
    <RendersCounter id="HomeCont">
      <Tests />
    </RendersCounter>
  );
}
