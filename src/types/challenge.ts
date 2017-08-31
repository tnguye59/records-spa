export type Challenge = Readonly<{
  id: number,
  name: string,
  maxCompletions: number,
  pointsFirst: number | null,
  pointsSecond: number | null,
  pointsThird: number | null,
  pointsCompletion: number,
  createdAt: string,
  updatedAt: string
}>;
