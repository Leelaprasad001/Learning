package com.example.FormElements.FormElements.repository;

import com.example.FormElements.FormElements.model.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StorageRepo extends JpaRepository<FileData, Long> {
    Optional<FileData> findByName(String fileName);
}
