import Base from "./base";

export const createTask = async (
  title: string,
  description: string,
  category: string,
  due_date: Date,
): Promise<any> => {
  const data = {
    title: title,
    description: description,
    category: category,
    due_date: due_date,
    user_id: "40164s5bfdq72sp",
  };
  const record = await Base.getPocketbase().collection("task").create(data);
  return record;
};

export const getTasks = async (): Promise<any[]> => {
  try {
    const records = await Base.getPocketbase().collection("task").getFullList({
      sort: "-created",
    });
    return records;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
};

export const updateTask = async (
  taskId: string,
  title: string,
  description: string,
  category: string,
  due_date: Date,
): Promise<any> => {
  const data = {
    title: title,
    description: description,
    category: category,
    due_date: due_date,
  };

  try {
    const record = await Base.getPocketbase()
      .collection("task")
      .update(taskId, data);
    return record;
  } catch (error) {
    console.error("Failed to update task:", error);
    throw error; // Rethrow the error to handle it in the calling context if necessary
  }
};

export const deleteTask = async (task_id): Promise<void> => {
  try {
    await Base.getPocketbase().collection("task").delete(task_id);
  } catch (error) {
    console.error("Failed to delete tasks:", error);
  }
};
