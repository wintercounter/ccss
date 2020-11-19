-   new Map structure => performance
-   removed mid names
    -   not used
    -   much smaller code
-   faster boot
    -   no extra instance creation => use default
    -   no extra prop creation through loops
    -   no more deep merge
    -   simplified property construction
-   reduced size
-   `pipe` renamed to `compose`
-   no auto apply plugins for default, apply your own (use\*Plugin)
-   prop-mid removed
-   faster and improved TypeScript types completely based on `csstype` supporting CCSS shorthands and CCSS shorthand values
-   `ccssd` got removed => switch to function wrapper