// ---React Stuff
import { createRoot } from 'react-dom/client';
// --- Root App
import { AppContainer } from './AppContainer';
// --- Styles
import '../css/index.less';

// --------------------------------- React integration ---------------------------------
const rootHtmlElement = document.getElementById('root');
const root = createRoot(rootHtmlElement!);

root.render(<AppContainer />);
