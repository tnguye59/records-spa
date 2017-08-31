export type RecordBook = Readonly<{
  id: number,
  name: string,
  published: boolean,
  timeZone: string,
  startTime: string | null,
  endTime: string | null,
  rushStartTime: string | null,
  rushEndTime: string | null,
  createdAt: string,
  updatedAt: string
}>;
