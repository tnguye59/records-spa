export type Participation = Readonly<{
  id: number,
  createdAt: string,
  updatedAt: string,

  participationType: string,
  totalPoints: number
}>;
