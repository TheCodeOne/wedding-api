export interface CompactGuests {
  name: string;
  lastUpdated: string;
}

export interface AttendingResponse {
  amounts: Amounts;
  attending: CompactGuests[];
  notAttending: CompactGuests[];
  notReplied: CompactGuests[];
}

interface Amounts {
  total: number;
  attending: number;
  notAttending: number;
}
