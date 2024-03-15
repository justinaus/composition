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

### Shared Component (design system sample)
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

> set bottom sheet state.

- open
- close

### Service Layer

> effected by state.

```jsx
<BottomSheet>
  <BottomSheet.Dimmed />
  <BottomSheet.Paper>
    {state.element}
  </BottomSheet.Paper>
</BottomSheet>
```

### Usage
open bottom sheet.

> use hook(set element). 

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
