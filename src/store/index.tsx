import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { store } from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'layout/css/toastr.css'; // overriding some styles of react-redux-toastr;

export const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" preventDuplicates />
    {children}
  </Provider>
);