export interface Cat {
  id: string,
  url: string,
  width: number,
  height: number
  breeds: Breed[]
}

export interface Breed {
  id: string,
  name: string,
  description: string,
  wikipedia_url: string,
  affection_level: number,
  child_friendly: number
}
