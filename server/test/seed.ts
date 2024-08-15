// ts-node globally required
import { PrismaClient, Prisma } from '@prisma/client'

const client = new PrismaClient()

async function seed() {
  const avatars = [
    '👩', '👨', '🧑', '👧', '👦', '🧒', '👶', '👵', '👴', '🧓',
    '👩‍🦰', '👨‍🦰', '🧑‍🦰', '👩‍🦱', '👨‍🦱', '🧑‍🦱', '👩‍🦲',
    '👨‍🦲', '🧑‍🦲', '👩‍🦳'
  ];

  const favoriteColors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const favoriteFoods = ['pizza', 'sushi', 'burger', 'pasta', 'salad'];

  const usersData: Prisma.UsersCreateInput[] = Array.from({ length: 20 }).map((_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    address: `123 Example Street, City ${i + 1}`,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    f_color: favoriteColors[Math.floor(Math.random() * favoriteColors.length)],
    f_food: favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)],
    // 生成完整的 ISO 8601 日期时间字符串
    date: new Date(2024, 7, Math.floor(Math.random() * 28) + 1, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)).toISOString(),
  }));

  try {
    for (const userData of usersData) {
      await client.users.create({ data: userData });
    }
    console.log('Database seeded with 20 users');
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log('There is a unique constraint violation, a user cannot be created with this email');
      }
    } else {
      throw e;
    }
  } finally {
    await client.$disconnect();
  }
}

seed();
