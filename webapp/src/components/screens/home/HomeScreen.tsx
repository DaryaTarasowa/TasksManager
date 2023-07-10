import TasksList from "../../pages/home/TasksList";
import Sidebar from "../../pages/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../../redux-store/reducer/sidebar";
import { getSidebarState } from "../../../redux-store/selectors";
import { selectionActions } from "../../../redux-store/reducer/selection";

export function HomeScreen() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(getSidebarState).isOpen;
  const onSidebarClose = () => {
    dispatch(sidebarActions.setOpen({ isOpen: false }));
    dispatch(selectionActions.reset());
  };
  return (
    <div className="sm:flex sm:flex-row-reverse">
      {isSidebarOpen && <Sidebar onClose={onSidebarClose} />}
      <TasksList />
    </div>
  );
}

export default HomeScreen;
