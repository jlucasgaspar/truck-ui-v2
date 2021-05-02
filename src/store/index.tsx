import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { store } from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'layout/Toast/toastr.css'; // overriding some styles of react-redux-toastr;

export const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ReduxToastr
      timeOut={10000000000}
      preventDuplicates
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
    {children}
  </Provider>
);