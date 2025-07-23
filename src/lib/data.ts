
export const sellers = [
  "Minjun Kim", "Seoyeon Lee", "Doyun Park", "Jiwu Choi", "Haeun Jeong",
  "Yejun Song", "Somin Han", "Eunwoo Lim", "Jiho Yoon", "Sia Kang",
  "Liam Smith", "Olivia Johnson", "Noah Williams", "Emma Brown", "Oliver Jones",
  "Ava Garcia", "Elijah Miller", "Sophia Davis", "James Rodriguez", "Isabella Martinez",
  "Lucas Hernandez", "Mia Lopez", "Mason Gonzalez", "Amelia Wilson", "Ethan Anderson",
  "Harper Thomas", "Logan Taylor", "Evelyn Moore", "Aiden Jackson", "Abigail Martin"
];

export const generateSellerData = (sellerName: string) => {
    // Simple hash function to generate consistent "random" values for a seller
    const sellerHash = sellerName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const uploaded = Math.floor((sellerHash % 50) + 10); // 10-59
    const approved = Math.floor(uploaded * (0.8 + ((sellerHash % 20) / 100))); // 80-99% of uploaded
    const shared = Math.floor(approved * (0.7 + ((sellerHash % 30) / 100))); // 70-99% of approved
    return {
      name: sellerName.split(' ')[0] + ' ' + sellerName.split(' ')[1][0] + '.',
      uploaded,
      approved,
      shared,
    };
};
