import {Vote, VoteRaw} from "./vote";

export class VoteFactory {

  static fromRaw(raw: VoteRaw): Vote {
    return {
        ...raw,
        created_at: new Date(raw.created_at)
      };
  }
}
