package com.example.FormElements.FormElements.service;


import com.example.FormElements.FormElements.model.FileData;
import com.example.FormElements.FormElements.repository.StorageRepo;
import com.example.FormElements.FormElements.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
@Service
public class StorageService {

    @Autowired
    private StorageRepo repository;

    public String uploadFile(MultipartFile file) throws IOException {
        FileData fileData = repository.save(FileData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .fileData(file.getBytes()).build());
        if (fileData != null) {
            return "File uploaded successfully: " + file.getOriginalFilename();
        }
        return null;
    }

    @Transactional
    public FileData downloadFile(String fileName){
        return repository.findByName(fileName).orElse(null);
    }

    @Transactional
    public String updateFile(String fileName, MultipartFile file) throws IOException {
        Optional<FileData> existingFileData = repository.findByName(fileName);
        if (existingFileData.isPresent()) {
            FileData updatedFileData = existingFileData.get();
            updatedFileData.setName(file.getOriginalFilename());
            updatedFileData.setType(file.getContentType());
            updatedFileData.setFileData(file.getBytes());

            try {
                repository.save(updatedFileData);
                return "File updated successfully: " + file.getOriginalFilename();
            } catch (Exception e) {
                e.printStackTrace(); // Log or handle the exception
                return "Failed to update the file: " + file.getOriginalFilename();
            }
        }
        else {
            FileData newFileData = new FileData();
            newFileData.setName(file.getOriginalFilename());
            newFileData.setType(file.getContentType());
            newFileData.setFileData(file.getBytes());
            repository.save(newFileData);
            return "New file inserted: " + file.getOriginalFilename();
        }
    }

    @Transactional
    public String deleteFile(String fileName) {
        Optional<FileData> fileData = repository.findByName(fileName);
        if (fileData.isPresent()) {
            repository.delete(fileData.get());
            return "File deleted successfully: " + fileName;
        }
        return "File not found: " + fileName;
    }

}
