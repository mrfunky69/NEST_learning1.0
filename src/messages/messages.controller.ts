import { Controller,Get,Post,Body,Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService){}
    
    @Get() 
    async listMessage(){
        const allFound = await this.messagesService.findAll();
        return(allFound);
    }

    @Post()
    writeMessage(@Body() body:CreateMessageDto){
        console.log(body);
        this.messagesService.createMessage(body.content);
        return('Message saved');
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
        console.log(id);
        const oneFound = await this.messagesService.findOne(id);

        if(!oneFound){
            throw new NotFoundException('Message not found');
        }
        return(oneFound);
    }

}
