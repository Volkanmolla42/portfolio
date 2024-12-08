import { Spinner } from "./components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-svh z-[100] inset-0">
      <Spinner size="lg" />
    </div>
  );
}
