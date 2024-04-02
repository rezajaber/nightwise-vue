import Base from "./base";

export const getPrio = async (): Promise<any[]> => {
  try {
    const records = await Base.getPocketbase()
      .collection("prio")
      .getFullList({ sort: "-created" });
    return records;
  } catch (error) {
    console.error("Failed to fetch priorities:", error);
    return [];
  }
};

export const createPrio = async (name: string): Promise<any> => {
  try {
    const data = { name };
    const record = await Base.getPocketbase().collection("prio").create(data);
    return record;
  } catch (error) {
    console.error("Failed to create priority:", error);
    throw error; // Propagate the error for handling at the calling site
  }
};

export const updatePrio = async (
  prio_id: string,
  name: string,
): Promise<any> => {
  try {
    const data = { name };
    const record = await Base.getPocketbase()
      .collection("prio")
      .update(prio_id, data);
    return record;
  } catch (error) {
    console.error("Failed to update priority:", error);
    throw error; // Propagate the error for handling at the calling site
  }
};

export const deletePrio = async (prio_id: string): Promise<void> => {
  try {
    await Base.getPocketbase().collection("prio").delete(prio_id);
  } catch (error) {
    console.error("Failed to delete priority:", error);
    // You might want to handle the error or rethrow it based on your error handling strategy
  }
};
