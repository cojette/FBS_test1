
import type { DateRange } from "react-day-picker";

export const sellers = [
  "Minjun Kim", "Seoyeon Lee", "Doyun Park", "Jiwu Choi", "Haeun Jeong",
  "Yejun Song", "Somin Han", "Eunwoo Lim", "Jiho Yoon", "Sia Kang",
  "Liam Smith", "Olivia Johnson", "Noah Williams", "Emma Brown", "Oliver Jones",
  "Ava Garcia", "Elijah Miller", "Sophia Davis", "James Rodriguez", "Isabella Martinez",
  "Lucas Hernandez", "Mia Lopez", "Mason Gonzalez", "Amelia Wilson", "Ethan Anderson",
  "Harper Thomas", "Logan Taylor", "Evelyn Moore", "Aiden Jackson", "Abigail Martin"
];

const hashCode = (s: string) => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);

export const generateSellerData = (sellerName: string, dateRange?: DateRange) => {
    // Combine seller name and date range for a more unique seed
    const dateSeed = dateRange?.from ? dateRange.from.getTime() : 1;
    const seedString = sellerName + dateSeed;
    const sellerHash = Math.abs(hashCode(seedString));
    
    const uploaded = Math.floor((sellerHash % 50) + 10); // 10-59
    const approved = Math.floor(uploaded * (0.8 + ((sellerHash % 20) / 100))); // 80-99% of uploaded
    const shared = Math.floor(approved * (0.7 + ((sellerHash % 30) / 100))); // 70-99% of approved
    const meetingsBooked = Math.floor(shared * (0.3 + ((sellerHash % 40) / 100))); // 30-69% of shared
    return {
      name: sellerName.split(' ')[0] + ' ' + sellerName.split(' ')[1][0] + '.',
      uploaded,
      approved,
      shared,
      meetingsBooked,
    };
};
