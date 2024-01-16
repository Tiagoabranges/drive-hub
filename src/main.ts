import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Controle de Utilização de Automóveis')
    .setDescription(
      'Sistema para controlar a utilização de automóveis por motoristas.',
    )
    .setVersion('0.1')
    .addTag('automobiles')
    .addTag('drivers')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
