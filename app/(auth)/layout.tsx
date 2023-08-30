type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;
  return (
    <main className="flex h-full items-center justify-center">{children}</main>
  );
}
