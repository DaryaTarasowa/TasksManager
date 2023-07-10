package com.craftworks.dto

import jakarta.validation.constraints.NotBlank
import java.time.LocalDateTime

enum class Priority {
    LOW,
    AVERAGE,
    HIGH,
}

enum class Status {
    OPEN,
    IN_PROGRESS,
    DONE,
}

data class TaskDTO(
    val id: Int? = null,
    val createdAt: LocalDateTime? = null,
    val updatedAt: LocalDateTime? = null,
    val dueDate: LocalDateTime? = null,
    val resolvedAt: LocalDateTime? = null,
    @get:NotBlank(message = "TaskDTO.title must not be blank")
    val title: String,
    val description: String? = null,
    val priority: Priority = Priority.AVERAGE,
    val status: Status = Status.OPEN,
)
