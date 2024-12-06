//TaskService su Funcion Es:
//Se defienen metodos que van a comunicarse en la Base de Datos
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { promises } from 'dns';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService){}
  
  async getAllTasks(): Promise<Task[]> {                       
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task> {                       
    return this.prisma.task.findUnique({
      where:{
        id
      }
    })
  }

  async createTask(data: Task): Promise<Task> {                       
    return this.prisma.task.create({
      data
    })
  }

  async updateTask(id: number, data: Task): Promise<Task> {                       
    return this.prisma.task.update({
      where: {
        id
      },
      data
    })
  }

  async deleteTasks(id:number): Promise<Task> {                       
    return this.prisma.task.delete({
      where: {
        id
      }
    })
  }

}
