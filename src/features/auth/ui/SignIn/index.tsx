"use client";

import { Button } from "@/shared/ui";

type Props = {
  onSignIn: () => Promise<void>;
};

export const SignIn = ({ onSignIn }: Props) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        onSignIn();
      }}
    >
      Sign In
    </Button>
  );
};
