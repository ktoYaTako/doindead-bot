export default interface ITask {
  title: string;
  description: string;
  tags: string;
  budget_from: number;
  budget_to: number;
  deadline_days: number;
  number_of_reminders: number;
  rules: {
    budget_from: number;
    budget_to: number;
    deadline_days: number;
    qty_freelancers: number;
  };
  token: string;
}
