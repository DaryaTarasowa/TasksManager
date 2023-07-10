package com.craftworks.repository

import com.craftworks.util.taskEntityList
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.test.context.ActiveProfiles

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles("test")
class TaskRepositoryIntegrationTest {

    @Autowired
    lateinit var taskRepository: TaskRepository

    @BeforeEach
    fun setUp() {
        taskRepository.deleteAll()
        val testEntities = taskEntityList()
        taskRepository.saveAll(testEntities)
    }

    @Test
    fun findAllTasksOrderedBy() {
        val tasksByTitle =
            taskRepository.findAllSortedBy(PageRequest.of(0, 1000, Sort.Direction.ASC, "title"))
        assertEquals(3, tasksByTitle.size)
        assertEquals(2, tasksByTitle[0]?.id)

        val tasksByStatus = taskRepository.findAllSortedBy(
            PageRequest.of(
                0,
                1000,
                Sort.Direction
                    .ASC,
                "status",
            ),
        )
        assertEquals(3, tasksByStatus.size)
        assertEquals(2, tasksByStatus[0]?.id)

        val tasksByPriority = taskRepository.findAllSortedBy(
            PageRequest.of(
                0,
                1000,
                Sort.Direction
                    .ASC,
                "priority",
            ),
        )
        println(tasksByPriority)
        assertEquals(3, tasksByPriority.size)
        assertEquals(3, tasksByPriority[0]?.id)
    }
}
