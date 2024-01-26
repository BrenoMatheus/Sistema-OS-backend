export interface IOrder{
  id: number,
  equipmentID: number,
  technicianID: number,
  type: string, 
  defect: string, 
  causes: string, 
  status: boolean, 
  solution: string, 
  date_init_os: Date, 
  date_end_os?: Date,
  total: number,
}