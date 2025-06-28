import React from "react";

type Props = { message: string };

export default function EmptyPage({ message }: Props) {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      {message}
    </div>
  );
}
