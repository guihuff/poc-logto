"use client";

import { Button } from "@/shared/ui";

type Props = {
  onSignOut: () => Promise<void>;
};

export const SignOut = ({ onSignOut }: Props) => {
  return (
    <Button
      onClick={() => {
        onSignOut();
      }}
    >
      Sign Out
    </Button>
  );
};
