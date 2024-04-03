import Base from "./base";

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

export const createTask = async (
  title: string,
  description: string,
  category_id: string | null,
  prio_id: string | null,
  due_date: Date,
): Promise<any> => {
  const data: any = {
    title,
    description,
    category_id,
    prio_id,
    due_date,
    user_id: "40164s5bfdq72sp", // Assume this is a fixed user ID for demonstration
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
): Promise<any> => {
  const data: any = {
    title,
    description,
    category_id,
    prio_id,
    due_date,
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
