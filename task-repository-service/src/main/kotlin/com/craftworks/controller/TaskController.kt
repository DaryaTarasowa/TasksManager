package com.craftworks.controller

import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import com.craftworks.dto.TaskDTO
import com.craftworks.exceptions.TaskNotFoundException
import com.craftworks.service.TaskService
import mu.KLogging
import org.springframework.context.annotation.Configuration
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfiguration : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**").allowedMethods("*")
    }
}

@RestController
@CrossOrigin
@RequestMapping("/v1/tasks")
@Validated
class TaskController(val taskService: TaskService) {

    companion object : KLogging()

    @PostMapping
    fun create(): ResponseEntity<TaskDTO> {
        val emptyTask = taskService.createTask()
        return if (emptyTask?.id!! > 0) {
            ResponseEntity.status(201).body(emptyTask)
        } else {
            ResponseEntity.internalServerError().build()
        }
    }

    @GetMapping
    fun get(
        @RequestParam id: Int?,
        @RequestParam priority: Priority?,
        @RequestParam status: Status?,
        @RequestParam order: String?,
    ): ResponseEntity<List<TaskDTO?>> {
        val tasks = taskService.findTasks(id, priority, status, order)

        return if (tasks != null) {
            ResponseEntity.ok(tasks)
        } else {
            ResponseEntity.noContent().build()
        }
    }

    @PatchMapping
    fun update(
        @RequestBody taskDTO: TaskDTO,
    ): ResponseEntity<TaskDTO> {
        return if (taskDTO.id != null) {
            try {
                val updatedTaskDTO = taskService.updateTask(taskDTO)
                ResponseEntity.ok(updatedTaskDTO)
            } catch (e: RuntimeException) {
                if (e is TaskNotFoundException) {
                    ResponseEntity.notFound().build()
                } else {
                    ResponseEntity.badRequest().build()
                }
            }
        } else {
            ResponseEntity.badRequest().build()
        }
    }

    @DeleteMapping
    fun delete(
        @RequestParam id: Int,
    ): ResponseEntity<Void> {
        println("here")
        return if (taskService.deleteTask(id)) {
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.notFound().build()
        }
    }
}

enum class Order() {
    CREATED_AT,
    TITLE,
    STATUS,
    PRIORITY,
    ID,
}
