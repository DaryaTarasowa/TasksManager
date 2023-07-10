package com.craftworks.repository

import com.craftworks.entity.Task
import org.springframework.data.domain.PageRequest
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

interface TaskRepository : CrudRepository<Task, Int> {

    @Query(value = "SELECT * FROM TASKS", nativeQuery = true)
    fun findAllSortedBy(
        p: PageRequest,
    ): List<Task>
}
