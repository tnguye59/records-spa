export type RecordBook = Readonly<{
  id: number,
  createdAt: string,
  updatedAt: string,

  endTime: string | null,
  name: string,
  published: boolean,
  rushEndTime: string | null,
  rushStartTime: string | null,
  startTime: string | null,
  timeZone: string

  team_status: {
    team_id: number,
    team_name: string,
    total_points: number
  }
}>;
