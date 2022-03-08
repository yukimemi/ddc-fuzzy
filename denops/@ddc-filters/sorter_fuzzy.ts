import { Candidate } from "https://deno.land/x/ddc_vim@v1.4.0/types.ts";
import {
  BaseFilter,
  FilterArguments,
} from "https://deno.land/x/ddc_vim@v1.4.0/base/filter.ts";
import * as fuzzy from "../../fuzzy.ts";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: FilterArguments<Params>): Promise<Candidate[]> {
    const normalize = (s: string) =>
      args.sourceOptions.ignoreCase ? s.toLowerCase() : s;
    const matches = new Map<Candidate, fuzzy.Match>(
      args.candidates.map((candidate) => [
        candidate,
        fuzzy.findBestMatch(
          normalize(args.completeStr),
          normalize(candidate.word),
        ),
      ]),
    );
    return Promise.resolve(
      args.candidates.sort((a, b) => {
        const x = matches.get(b)?.score ?? 0;
        const y = matches.get(a)?.score ?? 0;
        return x - y;
      }),
    );
  }
  override params(): Params {
    return {};
  }
}
