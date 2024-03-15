type Props = {
  className?: string;
};

export function BottomSheet({
  className,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 500,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Paper({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      css={{
        zIndex: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      className={className}
    >
      <div
        css={{
          padding: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Header({
  title,
  closeButton,
}: {
  title: string | React.ReactNode;
  closeButton?: {
    onClick: () => void;
  };
}) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'flex-start',
      }}
    >
      <h2
        css={{
          flex: 1,
        }}
      >
        {title}
      </h2>
      {closeButton && (
        <button type="button" onClick={closeButton.onClick}>
          X
        </button>
      )}
    </div>
  );
}

function Actions({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      css={{
        marginTop: 20,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Body({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      css={{
        marginTop: 20,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function Dimmed({
  ...rest
}: Pick<React.DOMAttributes<HTMLDivElement>, 'onClick'>) {
  return (
    <div
      css={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      {...rest}
    />
  );
}

BottomSheet.Dimmed = Dimmed;
BottomSheet.Paper = Paper;
BottomSheet.Header = Header;
BottomSheet.Body = Body;
BottomSheet.Actions = Actions;
