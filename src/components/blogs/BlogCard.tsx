import React from "react";
import { Card, CardTitle, CardContent } from "../ui/card";
type Props = { key: number; title: string; summary: string };

export default function BlogCard({ title, summary }: Props) {
  return (
    <Card className="pl-2 shadow-gray-600">
      <CardTitle>{title}</CardTitle>
      <CardContent>{summary}</CardContent>
    </Card>
  );
}
