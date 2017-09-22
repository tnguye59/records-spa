export type Challenge = Readonly<{
  id: number,
  type: 'challenges',

  attributes: {
    created_at: string,
    max_completions: 1,
    name: string,
    updated_at: string
  }
}>;
