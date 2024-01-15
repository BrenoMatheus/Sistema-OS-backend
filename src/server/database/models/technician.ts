export interface ITechnician{
    id: number,
    name: string, 
    email: string, 
    category: string,
    description?: string,
  }

export interface IEquipment{
    id: number,
    name: string, 
    serieNumber: string, 
    type: string,
    description?: string,
  }