import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from "@prisma/client";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() data: Task) {
    return this.taskService.createTask(data)
  }

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const taskFound = await this.taskService.getTaskById(Number(id))
    if (!taskFound) throw new NotFoundException('Task does not exist')
    return taskFound
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    try{
      return this.taskService.updateTask(Number(id), data)

    }catch (error){
      throw new NotFoundException("Task does not exist")
    }

  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try{
      return await this.taskService.deleteTasks(Number(id))
    } catch(error){
      throw new NotFoundException("Task dies not exist")
    }
  }
}
