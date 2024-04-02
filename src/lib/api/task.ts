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
    title: title,
    description: description,
    due_date: due_date,
    user_id: "40164s5bfdq72sp",
  };

  // Add category_id and prio_id to the data object only if they have valid selections
  if (category_id && category_id !== "Category") {
    data.category_id = category_id;
  }
  if (prio_id && prio_id !== "Priority") {
    data.prio_id = prio_id;
  }

  const record = await Base.getPocketbase().collection("task").create(data);
  return record;
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
    title: title,
    description: description,
    due_date: due_date,
  };

  // Add category_id and prio_id to the data object only if they have valid selections
  if (category_id && category_id !== "Category") {
    data.category_id = category_id;
  }
  if (prio_id && prio_id !== "Priority") {
    data.prio_id = prio_id;
  }

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
