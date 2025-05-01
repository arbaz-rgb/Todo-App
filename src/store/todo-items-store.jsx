import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItem, action) => {
  let newTodoItem = currTodoItem;

  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }

  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
