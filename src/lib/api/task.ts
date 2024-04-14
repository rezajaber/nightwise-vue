// @ts-nocheck
import Base from "./base";

export const getTasks = async (): Promise<any[]> => {
  const userId = Base.getAuthStore().baseModel.id; // Getting user_id from authentication store
  try {
    const records = await Base.getPocketbase()
      .collection("task")
      .getFullList({
        sort: "-created",
        filter: `user_id = '${userId}'`,
      });
    return records;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
};

export const createTask = async (
  title: string,
  description: string,
  category_id: string | null,
  prio_id: string | null,
  due_date: Date,
  task_done: boolean,
): Promise<any> => {
  const userId = Base.getAuthStore().baseModel.id; // Getting user_id from authentication store
  const data: any = {
    title,
    description,
    category_id,
    prio_id,
    due_date,
    task_done,
    user_id: userId, // Using the dynamic user_id
  };

  try {
    const record = await Base.getPocketbase().collection("task").create(data);
    return record;
  } catch (error) {
    console.error("Failed to create task:", error);
    throw error; // It's usually better to throw the error so that the calling context can handle it
  }
};

export const updateTask = async (
  taskId: string,
  title: string,
  description: string,
  category_id: string | null,
  prio_id: string | null,
  due_date: Date,
  task_done: boolean,
): Promise<any> => {
  const data: any = {
    title,
    description,
    category_id,
    prio_id,
    due_date,
    task_done,
  };

  try {
    const record = await Base.getPocketbase()
      .collection("task")
      .update(taskId, data);
    return record;
  } catch (error) {
    console.error("Failed to update task:", error);
    throw error;
  }
};

export const deleteTask = async (task_id: string): Promise<void> => {
  try {
    await Base.getPocketbase().collection("task").delete(task_id);
  } catch (error) {
    console.error("Failed to delete tasks:", error);
    // Consider throwing the error here as well, or handling it in a specific way if needed.
  }
};
