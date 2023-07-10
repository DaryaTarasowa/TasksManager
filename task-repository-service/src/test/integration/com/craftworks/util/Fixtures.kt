package com.craftworks.util

import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import com.craftworks.dto.TaskDTO
import com.craftworks.entity.Task
import java.time.LocalDateTime

fun taskEntityList() = listOf(
    Task(
        id = 1,
        createdAt = LocalDateTime.parse("2022-06-01T09:00:00"),
        updatedAt = null,
        resolvedAt = null,
        dueDate = null,
        title = "Test task B",
        description = "Description here",
        priority = Priority.HIGH,
        status = Status.DONE,
    ),
    Task(
        id = 2,
        createdAt = LocalDateTime.parse("2022-06-02T09:00:00"),
        updatedAt = null,
        resolvedAt = null,
        dueDate = null,
        title = "Test task A",
        description = "Description here",
        priority = Priority.AVERAGE,
        status = Status.OPEN,
    ),
    Task(
        id = 3,
        createdAt = LocalDateTime.parse("2022-08-01T09:00:00"),
        updatedAt = LocalDateTime.parse("2022-08-01T15:00:00"),
        resolvedAt = null,
        dueDate = null,
        title = "Test task C",
        description = "Description here",
        priority = Priority.LOW,
        status = Status.DONE,
    ),
)

fun createTaskDTO(
    id: Int? = null,
    createdAt: LocalDateTime? = null,
    updatedAt: LocalDateTime? = null,
    dueDate: LocalDateTime? = null,
    resolvedAt: LocalDateTime? = null,
    title: String? = "",
    description: String? = null,
    priority: Priority? = Priority.AVERAGE,
    status: Status? = Status.OPEN,
) =
    TaskDTO(
        id, createdAt, updatedAt, dueDate, resolvedAt, title = title!!,
        description, priority = priority!!, status = status!!,
    )
