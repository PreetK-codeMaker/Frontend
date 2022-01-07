export interface GuestModel
{
  guestID?: number;
  guestFirstName: string;
  guestLastName: string;
  guestEmail: string;
  emailPermission: number;
  company?: string;
}
