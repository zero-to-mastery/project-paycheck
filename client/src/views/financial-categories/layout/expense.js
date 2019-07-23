import CommonConfig from "./common";

export default {
  name: "Expenses",
  layout: [...CommonConfig, { title: "Due Date", field: "dueDate", type: "date" }]
};
