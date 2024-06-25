export type Row = {
  id?: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: 0;
  parentId: number;
  estimatedProfit: number;
  child: Row[];
};
