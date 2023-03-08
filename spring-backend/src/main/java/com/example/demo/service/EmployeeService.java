package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

public class EmployeeService {

	@Autowired
	EmployeeRepository rep;
	public String updateEmployee(Employee emp) {
		rep.save(emp);
		return "Updated";
	}
	public String updateFamily(int id) {
		rep.deleteById(id);
		return "Id deleted";
	}
}