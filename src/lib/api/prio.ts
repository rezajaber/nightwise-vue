import Base from "./base";

export const getPrio = async (): Promise<any[]> => {
  try {
    // you can also fetch all records at once via getFullList
    const records = await Base.getPocketbase().collection("prio").getFullList({
      sort: "-created",
    });
    return records;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
};

export const createPrio = async (name: string): Promise<any> => {
  const data = {
    name: name,
  };
  const record = await Base.getPocketbase().collection("prio").create(data);
  return record;
};

export const updatePrio = async (
  name: string,
  prio_id: string,
): Promise<any> => {
  const data = {
    name: name,
  };
  const record = await Base.getPocketbase()
    .collection("prio")
    .update(prio_id, data);
  return record;
};

export const deletePrio = async (prio_id: string): Promise<void> => {
  try {
    await Base.getPocketbase().collection("prio").delete(prio_id);
  } catch (error) {
    console.error("Failed to delete tasks:", error);
  }
};
