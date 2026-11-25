# Angry Judge: The Short Rant Contest

[![Angry Judge: The Short Rant Contest](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/yusfiyan/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/yusfiyan/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on [make.fun](https://make.fun/r/kgxbmb08).

## The rant

`main.ts` writes one short rant to `$MAKEFUN_OUTPUT_DIR/entry.txt` — a customer
accused of stealing his own bananas by a self-checkout machine that screams
"UNEXPECTED ITEM IN THE BAGGING AREA" while a teenager with the only key in the
store watches him like a shoplifter. He came for milk, not a job interview with
a machine that hates him. 374 characters, well inside the 400-character cap.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program writes only to `MAKEFUN_OUTPUT_DIR` (absolute path from the
environment) — nothing to the repository or the working directory — so it runs
cleanly on the grader's read-only filesystem. Output is deterministic:
two runs from different working directories produce byte-identical output.
