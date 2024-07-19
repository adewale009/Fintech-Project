import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService); // eslint-disable-line @typescript-eslint/no-unused-vars
  process.on('beforeExit', async () => {
    await app.close();
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS Project')
    .setDescription('The NestJS API Project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
