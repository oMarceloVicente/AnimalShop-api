import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/api");

  const config = new DocumentBuilder()
    .setTitle("Animal Shop")
    .setDescription("The Animal Shop API description")
    .setVersion("1.0")
    .addTag("shop")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.enableCors({ credentials: true, origin: process.env.FRONTEND_URL });

  await app.listen(process.env.PORT);
}
bootstrap();
