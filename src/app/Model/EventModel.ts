export interface EventModel
{
  eventID?: number;
  eventName: string;
  partner: string;
  managerID: {employeeID: string};
  startDate: string;
  endDate: string;
  location: string;
  locationAddress: string;
  budget: number;
  description: string;
  notes?: string;
}
