"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer
} from "@/components/ui/chart"

const data = [
  {
    name: 'Minjun K.',
    WhatsApp: 400,
    Instagram: 240,
    Facebook: 140,
    customers: 780,
  },
  {
    name: 'Seoyeon L.',
    WhatsApp: 300,
    Instagram: 139,
    Facebook: 100,
    customers: 539,
  },
  {
    name: 'Doyun P.',
    WhatsApp: 200,
    Instagram: 980,
    Facebook: 200,
    customers: 1380,
  },
  {
    name: 'Jiwu C.',
    WhatsApp: 278,
    Instagram: 390,
    Facebook: 150,
    customers: 818,
  },
  {
    name: 'Haeun J.',
    WhatsApp: 189,
    Instagram: 480,
    Facebook: 210,
    customers: 879,
  },
];


export function SellerSnsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">SNS Distribution by Seller</CardTitle>
        <CardDescription>Shares and customers reached per seller</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
              />
              <Legend />
              <Bar dataKey="WhatsApp" stackId="a" fill="var(--color-chart-1)" name="WhatsApp" />
              <Bar dataKey="Instagram" stackId="a" fill="var(--color-chart-2)" name="Instagram" />
              <Bar dataKey="Facebook" stackId="a" fill="var(--color-chart-3)" name="Facebook" />
              <Bar dataKey="customers" fill="var(--color-chart-5)" name="Customers Reached" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
