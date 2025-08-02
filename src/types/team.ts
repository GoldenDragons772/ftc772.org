export type Team = {
  id: number,
  image: string,
  name: string,
  role: string[],
  type: 'member' | 'mentor',
}