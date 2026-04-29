"use client";

import { useMemo, useState } from "react";
import { Button } from "@/shared/ui";

type Props = {
  claims: Record<string, unknown> | null | undefined;
};

export const UserInfoModal = ({ claims }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const formattedClaims = useMemo<string>(() => {
    if (!claims) {
      return "No user data available.";
    }

    return JSON.stringify(claims, null, 2);
  }, [claims]);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        View User Info
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-900">Logged User Data</h2>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>

            <pre className="max-h-[60vh] overflow-auto rounded-md bg-slate-100 p-4 text-left text-xs text-slate-800">
              {formattedClaims}
            </pre>
          </div>
        </div>
      ) : null}
    </>
  );
};
