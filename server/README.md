## Installation

```bash
$ pnpm install
```

## Running the app locally

> Prerequirements: docker docker-compose 

1. Prepare database
   
   ```bash
   $ docker-compose build db
   $ docker-compose up joi-db -d
   ```
   
2. Start the dev server in watch mode
   ```bash
   # watch mode
   $ pnpm run start:dev
   ```

3. Migrate prisma to mysql database
   
   1. Write you schema.prisma file to modify the database tables
   
   2. Once you finished write schema, then you need to create a migration
   
      ```bash
      $  pnpm run pri:create
       # then name the migration
      ```

   3. Migrate the make database real change
   
      ```bash
      $  pnpm run pri:migrate
      ```
   
      
   


## Build 

It will automatically run build on Github Actions, and send the build results to the EC2 server. What in details ?

1. Install server dependencies
2. Build server application
3. Send the dist/, prisema/ folders, and lock file etc.


## Deploy

This Service run as part of the docker-compose, It will be called on Github action after the build task finished. What in details？ 

1. Build the mysql image and run as container
2. Install dependencies which need for prodcution runtime
3. Migrate the prisma to database
4. Build the server image and run as container
