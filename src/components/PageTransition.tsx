import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}
