export type Team = {
  id: number,
  image: string,
  name: string,
  role: string[],
  type: 'captain' | 'member' | 'mentor',
  gradYear?: string,
  bio?: string
}