import BottomSheetLayer from './BottomSheetLayer';

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      {children}
      <BottomSheetLayer />
    </div>
  );
}
