---
id: cli
title: CLI
---

## Usage

We try to make our best efforts to provide an _out-of-the-box_
developer experience by providing TypeScript types and TSDoc
comments for inline documentation, example and help.

However, in different cases (eg: not using TypeScript) it can come
handy to have a tool when you're able to search props and their names.

```text
ccss p
┌─────────┬───────┬───────┬───────────┐                                                                                                                                                                               ┌─────────┬───────┬───────┬───────────┐
│ (index) │ short │ light │   long    │
├─────────┼───────┼───────┼───────────┤
│    0    │  'p'  │ 'pad' │ 'padding' │
└─────────┴───────┴───────┴───────────┘
```

```text
ccss color
┌─────────┬───────┬──────────────────┬───────────────────────┐
│ (index) │ short │      light       │         long          │
├─────────┼───────┼──────────────────┼───────────────────────┤
│    0    │  'c'  │     'color'      │        'color'        │
│    1    │ 'bgc' │    'bg-color'    │  'background-color'   │
│    2    │ 'bBc' │  'bd-bot-color'  │ 'border-bottom-color' │
│    3    │ 'bc'  │    'bd-color'    │    'border-color'     │
│    4    │ 'bLc' │ 'bd-left-color'  │  'border-left-color'  │
│    5    │ 'bRc' │ 'bd-right-color' │ 'border-right-color'  │
│    6    │ 'bTc' │  'bd-top-color'  │  'border-top-color'   │
│    7    │ 'crc' │ 'col-rule-color' │  'column-rule-color'  │
└─────────┴───────┴──────────────────┴───────────────────────┘
```