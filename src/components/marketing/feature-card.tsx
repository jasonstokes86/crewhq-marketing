'use client';
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = "text-violet-600" 
}: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-none bg-transparent hover:bg-muted/50 transition-colors">
      <CardHeader>
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 ${iconColor}`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
