package com.craftworks

import com.craftworks.service.TaskService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.annotation.Scheduled

@SpringBootApplication
@EnableScheduling
class TaskRepositoryServiceApplication

fun main(args: Array<String>) {
    lateinit var taskService: TaskService
    runApplication<TaskRepositoryServiceApplication>(*args)

    @Scheduled(fixedRate = 3000)
    fun addTask() {
        taskService.createTask()
    }
}
