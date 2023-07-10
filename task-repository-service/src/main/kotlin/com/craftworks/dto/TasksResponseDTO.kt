package com.craftworks.dto

import jakarta.validation.constraints.NotNull

data class TasksResponseDTO(

    @NotNull
    private val tasksDTOs: List<TaskDTO>? = null,
)
