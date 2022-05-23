export interface VoteRaw {
  id: number,
  image_id: string,
  created_at: string,
  value: number
}

export interface Vote {
  id: number,
  image_id: string,
  created_at: Date,
  value: number
}

