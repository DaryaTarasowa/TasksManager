package com.craftworks.controller

import com.craftworks.dto.TaskDTO
import com.craftworks.exceptions.TaskNotFoundException
import com.craftworks.service.TaskService
import mu.KLogging
import org.springframework.context.annotation.Configuration
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
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
        @RequestParam order: String?,
    ): ResponseEntity<List<TaskDTO?>> {
        val tasks = taskService.findTasks(id, order)

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
