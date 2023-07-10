package com.craftworks.entity

import com.craftworks.dto.Priority
import com.craftworks.dto.Status
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name = "Tasks")
data class Task(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Int?,
    @Column
    val createdAt: LocalDateTime,
    @Column
    var updatedAt: LocalDateTime?,
    @Column
    var dueDate: LocalDateTime?,
    @Column
    var resolvedAt: LocalDateTime?,
    @Column
    var title: String,
    @Column
    var description: String?,
    @Column
    var priority: Priority,
    @Column
    var status: Status,
)
