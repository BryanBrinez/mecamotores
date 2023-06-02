import Slidebar from "@components/Slidebar";
export default function RootLayout({ children }) {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-scren overflow-hidden">
      <Slidebar />
      <div className="p-4">
      {children}
      </div>
    </div>
  );
}
