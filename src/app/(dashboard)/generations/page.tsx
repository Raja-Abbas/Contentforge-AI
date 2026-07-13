"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from "lucide-react";

const columns = ["Title", "Tool", "Provider", "Tokens", "Duration", "Date"];

export default function GenerationsPage() {
  return (
    <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Generation History</h1>
          <p className="text-muted-foreground">
            View all your past content generations and their details.
          </p>
        </div>

        <Card className="rounded-xl border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Past Generations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    {columns.map((col) => (
                      <th
                        key={col}
                        className="pb-3 text-left font-medium text-muted-foreground"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={columns.length} className="py-16">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 mb-4">
                          <History className="h-8 w-8 text-violet-400" />
                        </div>
                        <p className="text-lg font-medium text-foreground mb-1">
                          No generations yet
                        </p>
                        <p className="text-sm text-muted-foreground max-w-sm">
                          Start creating to see your history. All your content generations will appear here.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
