import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onClose(app: INestApplication) {
    await this.$disconnect();
    await app.close();
  }
}