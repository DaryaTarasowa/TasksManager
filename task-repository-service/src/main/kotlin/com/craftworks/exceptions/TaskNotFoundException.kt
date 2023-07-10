package com.craftworks.exceptions

class TaskNotFoundException(
    operation: String,
    id: Int,
) : RuntimeException(
    "Task not found [operation=$operation, id=$id]",
)
