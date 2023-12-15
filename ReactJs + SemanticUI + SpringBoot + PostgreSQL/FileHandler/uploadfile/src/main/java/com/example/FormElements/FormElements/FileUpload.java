package com.example.FormElements.FormElements;

import com.example.FormElements.FormElements.model.FileData;
import com.example.FormElements.FormElements.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@SpringBootApplication
@RestController
@RequestMapping("/file")
public class FileUpload {

	@Autowired
	private StorageService service;

	@PostMapping("post")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
		String uploadStatus = service.uploadFile(file);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadStatus);
	}

	@GetMapping("get/{fileName}")
	public ResponseEntity<?> downloadFile(@PathVariable String fileName){
		FileData fileData = service.downloadFile(fileName);
		if (fileData != null) {
			return ResponseEntity.status(HttpStatus.OK)
					.contentType(MediaType.valueOf(fileData.getType()))
					.body(fileData.getFileData());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@PutMapping("put/{fileName}")
	public ResponseEntity<?> updateFile(@PathVariable String fileName, @RequestParam("file") MultipartFile file) throws IOException {
		String updateStatus = service.updateFile(fileName, file);
		return updateStatus.contains("successfully") ?
				ResponseEntity.status(HttpStatus.OK).body(updateStatus) :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body(updateStatus);
	}

	@DeleteMapping("delete/{fileName}")
	public ResponseEntity<?> deleteFile(@PathVariable String fileName) {
		String deleteStatus = service.deleteFile(fileName);
		return deleteStatus.contains("successfully") ?
				ResponseEntity.status(HttpStatus.OK).body(deleteStatus) :
				ResponseEntity.status(HttpStatus.NOT_FOUND).body(deleteStatus);
	}


	public static void main(String[] args) {
		SpringApplication.run(FileUpload.class, args);
	}



}
