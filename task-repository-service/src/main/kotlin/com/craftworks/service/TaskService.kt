package com.craftworks.service

import com.craftworks.controller.Order
import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import com.craftworks.dto.TaskDTO
import com.craftworks.entity.Task
import com.craftworks.exceptions.TaskNotFoundException
import com.craftworks.repository.TaskRepository
import mu.KLogging
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class TaskService(val taskRepository: TaskRepository) {

    companion object : KLogging()

    fun createTask(): TaskDTO? {
        val taskEntity =
            Task(
                null,
                LocalDateTime.now(),
                null,
                null,
                null,
                "New task",
                null,
                Priority.AVERAGE,
                Status.OPEN,
            )

        taskRepository.save(taskEntity)

        return taskEntity.let {
            TaskDTO(
                it.id, it.createdAt, it.updatedAt, it.dueDate, it.resolvedAt, it.title,
                it.description, it.priority, it.status,
            )
        }
    }

    fun deleteTask(id: Int): Boolean {
        val taskEntityOptional = taskRepository.findById(id)
        return if (taskEntityOptional.isPresent) {
            taskRepository.delete(taskEntityOptional.get())
            true
        } else {
            false
        }
    }

    fun getAllTasksOrderedBy(orderBy: String?): List<TaskDTO> {
        val order = Order.values().find { it.name == orderBy } ?: Order.ID
        return taskRepository
            .findAllSortedBy(PageRequest.of(0, 100, Sort.Direction.DESC, order.name))
            .map {
                TaskDTO(
                    it.id, it.createdAt, it.updatedAt, it.dueDate, it.resolvedAt, it.title,
                    it.description, it.priority, it.status,
                )
            }
    }

    fun findTasks(
        id: Int?,
        priority: Priority?,
        status: Status?,
        order: String?,
    ): List<TaskDTO>? {
        if (id != null) {
            val taskOption = taskRepository.findById(id)
            return if (taskOption.isPresent) {
                listOf(
                    taskOption.get().let {
                        logger.info("Found by id: $it")

                        TaskDTO(
                            it.id, it.createdAt, it.updatedAt, it.dueDate, it.resolvedAt, it.title,
                            it.description, it.priority, it.status,
                        )
                    },
                )
            } else {
                // TODO empty
                null
            }
        } else {
            return if (priority == null && status == null) {
                getAllTasksOrderedBy(order)
            } else {
                // TODO priority and status
                getAllTasksOrderedBy(null)
            }
        }
    }

    fun updateTask(
        taskDTO: TaskDTO,
    ): TaskDTO {
        val taskEntityOptional = taskRepository.findById(taskDTO.id!!)

        return if (taskEntityOptional.isPresent) {
            taskEntityOptional.get().let {
                it.updatedAt = LocalDateTime.now()
                it.dueDate = taskDTO.dueDate
                it.resolvedAt = taskDTO.resolvedAt
                it.description = taskDTO.description
                it.title = taskDTO.title
                it.priority = taskDTO.priority
                it.status = taskDTO.status

                taskRepository.save(it)
                logger.info("Updated: $it")

                TaskDTO(
                    it.id, it.createdAt, it.updatedAt, it.dueDate, it.resolvedAt, it.title,
                    it.description, it.priority, it.status,
                )
            }
        } else {
            throw TaskNotFoundException("UPDATE", taskDTO.id)
        }
    }
}
