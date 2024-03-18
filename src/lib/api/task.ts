import Base from "./base";

export const getTasks = async (): Promise<any> => {
  return await Base.getPocketbase().collection("task").getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00"',
  });
};

export const createTask = async (title: string): Promise<any> => {
  const data = {
    title: title,
    description: "Javacript",
    category: "Kategorie",
    due_date: "2022-01-01 10:00:00.123Z",
    user_id: "ohbcpavrkosxagz",
  };
  const record = await Base.getPocketbase().collection("task").create(data);
  return record;
};
