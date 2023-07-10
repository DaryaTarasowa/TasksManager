package com.craftworks.controller

import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import com.craftworks.dto.TaskDTO
import com.craftworks.repository.TaskRepository
import com.craftworks.util.taskEntityList
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.reactive.server.WebTestClient
import java.time.LocalDateTime

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureWebTestClient
class TaskControllerIntegrationTest {

    @Autowired
    lateinit var webTestClient: WebTestClient

    @Autowired
    lateinit var taskRepository: TaskRepository

    @BeforeEach
    fun setUp() {
        taskRepository.deleteAll()
        val testEntities = taskEntityList()
        taskRepository.saveAll(testEntities)
    }

    @Test
    fun createTask() {
        val savedTaskDTO = webTestClient.post()
            .uri("/v1/tasks")
            .bodyValue({})
            .exchange()
            .expectStatus().isCreated
            .expectBody(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertTrue(savedTaskDTO?.id!! > 0)
        assertTrue(savedTaskDTO?.createdAt!! < LocalDateTime.now())
        assertEquals(Priority.AVERAGE, savedTaskDTO.priority)
        assertEquals(Status.OPEN, savedTaskDTO.status)
    }

    @Test
    fun saveTaskNullPriorityAndStatus() {
        val taskDTO = TaskDTO(
            title = "Test task",
            description = "Description here",
        )

        val savedTaskDTO = webTestClient.post()
            .uri("/v1/tasks")
            .bodyValue(taskDTO)
            .exchange()
            .expectStatus().isCreated
            .expectBody(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertTrue(savedTaskDTO?.id!! > 0)
        assertTrue(savedTaskDTO?.createdAt!! < LocalDateTime.now())
        assertEquals(Priority.AVERAGE, savedTaskDTO.priority)
        assertEquals(Status.OPEN, savedTaskDTO.status)
    }

    @Test
    fun getById() {
        val taskDTOs = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(3, taskDTOs?.size)
        val firstTaskId = taskDTOs?.get(0)?.id

        val taskDTO = webTestClient.get()
            .uri("/v1/tasks?id=$firstTaskId")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(1, taskDTO?.size)
    }

    @Test
    fun getByIdNotFound() {
        webTestClient.get()
            .uri("/v1/tasks?id=100")
            .exchange()
            .expectStatus().isNoContent
    }

    @Test
    fun getAllTasks() {
        val taskDTOs = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(3, taskDTOs?.size)
    }

    @Test
    fun deleteTask() {
        val taskDTOs = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(3, taskDTOs?.size)
        val firstTaskId = taskDTOs?.get(0)?.id

        webTestClient.delete()
            .uri("/v1/tasks?id=$firstTaskId")
            .exchange()
            .expectStatus().isNoContent

        val taskDTOsAfterDeletion = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(2, taskDTOsAfterDeletion?.size)

        webTestClient.delete()
            .uri("/v1/tasks?id=1")
            .exchange()
            .expectStatus().isNotFound

        val taskDTOsWithoutDeletion = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(2, taskDTOsWithoutDeletion?.size)
    }

    @Test
    fun updateTaskSuccess() {
        val taskDTOs = webTestClient.get()
            .uri("/v1/tasks")
            .exchange()
            .expectStatus().isOk
            .expectBodyList(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertEquals(3, taskDTOs?.size)

        val existingTaskDTO = taskDTOs?.get(0)
        val taskId = existingTaskDTO?.id

        val timeNow = LocalDateTime.now()
        val providedTaskDTO = TaskDTO(
            id = taskId,
            title = "Updated task",
            description = "Updated description here",
            priority = Priority.LOW,
            resolvedAt = timeNow,
            dueDate = null,
            status = Status.OPEN,
        )

        val updatedTaskDTO = webTestClient.patch()
            .uri("/v1/tasks")
            .bodyValue(providedTaskDTO)
            .exchange()
            .expectStatus().isOk
            .expectBody(TaskDTO::class.java)
            .returnResult()
            .responseBody

        assertTrue(updatedTaskDTO?.id!! == taskId)
        assertTrue(updatedTaskDTO?.createdAt == existingTaskDTO?.createdAt)
        assertEquals(Priority.LOW, updatedTaskDTO.priority)
        assertEquals("Updated task", updatedTaskDTO.title)
        assertEquals("Updated description here", updatedTaskDTO.description)
        assertEquals(timeNow, updatedTaskDTO.resolvedAt)
        assertEquals(Status.OPEN, updatedTaskDTO.status)
        assertEquals(null, updatedTaskDTO.dueDate)
    }

    @Test
    fun updateTaskNotFound() {
        val providedTaskDTO = TaskDTO(
            id = 100,
            title = "Updated task",
            description = "Updated description here",
            priority = Priority.LOW,
            dueDate = null,
            status = Status.OPEN,
        )

        webTestClient.patch()
            .uri("/v1/tasks")
            .bodyValue(providedTaskDTO)
            .exchange()
            .expectStatus().isNotFound
    }

    @Test
    fun updateTaskNoId() {
        val providedTaskDTO = TaskDTO(
            title = "Updated task",
            description = "Updated description here",
            priority = Priority.LOW,
            dueDate = null,
            status = Status.OPEN,
        )

        webTestClient.patch()
            .uri("/v1/tasks")
            .bodyValue(providedTaskDTO)
            .exchange()
            .expectStatus().isBadRequest
    }
}
