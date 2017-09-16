export type User = Readonly<{
  id: number,
  createdAt: string,
  updatedAt: string,

  admin: boolean,
  confirmationSentAt: string,
  confirmedAt: string | null,
  discordName: string,
  email: string | null,
  passwordUpdatedAt: string | null,
  resetPasswordSentAt: string | null,
  unconfirmedEmail: string | null
}>;
