import { NestFactory} from "@nestjs/core";
import { MessagesModule } from "./messages/message.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap(){
    const app = await NestFactory.create(MessagesModule);
    app.useGlobalPipes(
        new ValidationPipe()
    )
    await app.listen(3001);
}

bootstrap();