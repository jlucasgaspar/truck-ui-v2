import { Provider } from "react-redux";
import { createStore } from "redux";
import ReduxToastr from "react-redux-toastr";
import { RootReducer } from "store/reducers";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "layout/css/toastr.css"; // overriding some styles of react-redux-toastr;

const store = createStore(RootReducer);
export type IRootState = ReturnType<typeof RootReducer>;

export const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" preventDuplicates />
    {children}
  </Provider>
);