import { useContext } from "react";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <Todoitem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
