export type Challenge = Readonly<{
  id: number,
  createdAt: string,
  updatedAt: string,

  maxCompletions: number,
  name: string,
  pointsCompletion: number,
  pointsFirst: number | null,
  pointsSecond: number | null,
  pointsThird: number | null
}>;
