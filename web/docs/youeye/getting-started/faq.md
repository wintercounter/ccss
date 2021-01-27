---
id: faq
title: F.A.Q.
---

## How about performance?

Generating CSS at runtime has performance costs, especially
if your code is in a hot path (and usually with CSS-in-JS that's true
for all your styles). However, the hit isn't more than using dynamic values
in `styled-components` or using `styled-system`. We were also very
restrictive about the shipped features to keep the core as primitive as
possible. CCSS on its own avoiding a lot of processing other solutions have.

However, to boost performance YouEye has a Babel-plugin supporting static extraction.
It replaces all Ui calls with native DOM elements and class names.

## Why just not use `styled-system`?

It's not YouEye's goal to have an amount of features `styled-system` have. However, the mapping
approach used by **CCSS** is making the compiler capable of supporting
custom properties and custom values which helps you to create your own custom
design system, ergo: Styled System could be implemented using CCSS.
