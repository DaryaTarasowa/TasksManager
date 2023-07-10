package com.craftworks.controller

import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import com.craftworks.dto.TaskDTO
import com.craftworks.service.TaskService
import com.craftworks.util.createTaskDTO
import com.ninjasquad.springmockk.MockkBean
import io.mockk.every
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.reactive.server.WebTestClient
import java.time.LocalDateTime

@WebMvcTest(controllers = [TaskController::class])
@AutoConfigureWebTestClient
class TaskControllerUnitTest {

    @MockkBean
    lateinit var taskServiceMock: TaskService

    @Autowired
    lateinit var webTestClient: WebTestClient

    @Test
    fun createTask() {
        every { taskServiceMock.createTask() } returns createTaskDTO(
            id = 1,
            createdAt = LocalDateTime.now(),
            title = "Test task",
            description = "Description here",
            priority = Priority.AVERAGE,
            status = Status.OPEN,
        )

        val savedTaskDTO = webTestClient.post()
            .uri("/v1/tasks")
            .bodyValue({})
            .exchange()
            .expectStatus().isCreated
            .expectBody(TaskDTO::class.java)
            .returnResult()
            .responseBody

        Assertions.assertTrue(savedTaskDTO?.id!! > 0)
        Assertions.assertTrue(savedTaskDTO?.createdAt!! < LocalDateTime.now())
        Assertions.assertEquals(Priority.AVERAGE, savedTaskDTO.priority)
        Assertions.assertEquals(Status.OPEN, savedTaskDTO.status)
    }
}
