import Base from "./base";

export const getCategory = async (): Promise<any[]> => {
  try {
    const records = await Base.getPocketbase()
      .collection("category")
      .getFullList({ sort: "-created" });
    return records;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

export const createCategory = async (name: string): Promise<any> => {
  try {
    const data = { name }; // Simplify object assignment
    const record = await Base.getPocketbase()
      .collection("category")
      .create(data);
    return record;
  } catch (error) {
    console.error("Failed to create category:", error);
    throw error; // Propagate the error for handling at the calling site
  }
};

export const updateCategory = async (
  category_id: string,
  name: string,
): Promise<any> => {
  try {
    const data = { name }; // Simplify object assignment
    const record = await Base.getPocketbase()
      .collection("category")
      .update(category_id, data);
    return record;
  } catch (error) {
    console.error("Failed to update category:", error);
    throw error; // Propagate the error for handling at the calling site
  }
};

export const deleteCategory = async (category_id: string): Promise<void> => {
  try {
    await Base.getPocketbase().collection("category").delete(category_id);
  } catch (error) {
    console.error("Failed to delete category:", error);
    // Consider rethrowing or handling the error based on your application's needs
  }
};
