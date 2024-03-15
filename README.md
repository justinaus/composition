# React-composition-sample

## Demo
https://react-composition-sample.vercel.app/

## Getting Started

```bash
yarn install
```

```bash
yarn dev
```


## Bottom sheet sample

[UI Composition](https://kyleshevlin.com/ui-composition/?utm_source=pocket_saves)
- Separation of Concerns
- Loose Coupling
- Scalability

### Component
BottomSheet.tsx

```jsx
<BottomSheet>
  <BottomSheet.Dimmed />
  <BottomSheet.Paper>
    <BottomSheet.Header />
    <BottomSheet.Body />
    <BottomSheet.Actions />
  </BottomSheet.Paper>
</BottomSheet>
```

### State
bottomSheetState.ts

- element
- options

### Hook
useBottomSheet.tsx

- open
- close

> set bottom sheet state.

### Usage
open bottom sheet.

> use hook.

```typescript
const { open } = useBottomSheet();

open(
  <>
    <BottomSheet.Header />
    <BottomSheet.Body />
    <BottomSheet.Actions />
  </>
);
```

## Used
- [Next.js](https://nextjs.org)
- [Recoil](https://recoiljs.org/docs/introduction/motivation)
- [Emotion css props](https://emotion.sh/docs/css-prop)
