// ts-node globally required
import { PrismaClient, Prisma } from '@prisma/client'
import { QueryUserDto, QueryUsersByPage } from 'src/users/dto/query-user.dto';

const client = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],

    // log: [    {
    //     emit: 'event',
    //     level: 'query',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'error',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'info',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'warn',
    //   },],
})
// client.$on('query', (e) => {
//     console.log('Query: ' + e.query)
//     console.log('Params: ' + e.params)
//     console.log('Duration: ' + e.duration + 'ms')
//   })

async function queryUsersByPage(data: QueryUserDto) {
    try {
      const { query, currentPage = 1, size = 5 } = data
      console.log('query',query)
      const [count, result] = await Promise.all([
        client.users.count({
          where: {
            OR: [
              // https://www.prisma.io/docs/orm/prisma-client/queries/case-sensitivity#mysql-provider
              // { name: { contains: query, mode:'insensitive' } },
              { name: { contains: query } },
              { email: { contains: query } },
              { address: { contains: query } },
              { avatar: { contains: query } },
              { f_color: { contains: query } },
              { f_food: { contains: query } }
            ],
  
          }
        }),
        client.users.findMany({
        // https://www.prisma.io/docs/orm/prisma-client/queries/pagination#offset-pagination
          skip: currentPage-1,// index
          take: size,// pagesize
          where: {
            OR: [
              { name: { contains: query } },
              { email: { contains: query } },
              { address: { contains: query } },
              { avatar: { contains: query } },
              { f_color: { contains: query } },
              { f_food: { contains: query } }
            ],
          },
          orderBy: {
            date: 'desc',
          },
        })

      ])

      const totalPages = Math.ceil(count / size) ;
      const r = { data: result, total: totalPages } as QueryUsersByPage
      console.log('r',r)
    } catch (err) {
      console.log('err', err)
    }
  }

  queryUsersByPage({query: "Mei"})