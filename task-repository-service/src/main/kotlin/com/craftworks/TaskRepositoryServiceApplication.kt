package com.craftworks

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TaskRepositoryServiceApplication

fun main(args: Array<String>) {
    runApplication<TaskRepositoryServiceApplication>(*args)
}
