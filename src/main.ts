import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.enableCors({ credentials: true, origin: true });

  const config = new DocumentBuilder()
    .setTitle('Flower Shop API')
    .setDescription('The Flower Shop API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(7777);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
  process.exit(1);
});
