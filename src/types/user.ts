export type User = Readonly<{
  id: number,
  discordName: string,
  email: string | null,
  admin: boolean,
  confirmedAt: string | null,
  confirmationSentAt: string,
  unconfirmedEmail: string | null,
  resetPasswordSentAt: string | null,
  createdAt: string,
  updatedAt: string
}>;
