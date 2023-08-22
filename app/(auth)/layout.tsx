type AuthLayoutProps = {
  children: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;
  return (
    <main className="h-full flex items-center justify-center">
      {children}
    </main>
  );
}