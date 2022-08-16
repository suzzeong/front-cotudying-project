import GlobalStyles from './GlobalStyles';
import Router from './shared/Router';
import { authorizationToken } from './AuthorizationToken';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
