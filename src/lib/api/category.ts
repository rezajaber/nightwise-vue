import Base from "./base";

export const createCategory = async (name: string): Promise<any> => {
  const data = {
    name: name,
  };
  const record = await Base.getPocketbase().collection("category").create(data);
  return record;
};

export const updateCategory = async (
  name: string,
  category_id: string,
): Promise<any> => {
  const data = {
    name: name,
  };
  const record = await Base.getPocketbase()
    .collection("category")
    .update(category_id, data);
  return record;
};

export const deleteCategory = async (category_id: string): Promise<void> => {
  try {
    await Base.getPocketbase().collection("category").delete(category_id);
  } catch (error) {
    console.error("Failed to delete tasks:", error);
  }
};
