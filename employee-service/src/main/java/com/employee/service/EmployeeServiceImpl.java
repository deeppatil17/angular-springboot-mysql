package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	

	@Override
	public List<Employee> fetchAllEmployees() {
		return (List<Employee>) employeeRepository.findAll();
	}


	@Override
	public Employee findById(Long id) {
		return employeeRepository.findById(id).get();
	}


	@Override
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}


	@Override
	public Employee updateEmployee(Employee employee) {
		
		Employee empObj=employeeRepository.findById(employee.getId()).get();
		if(empObj!=null) {
			empObj.setEmail(employee.getEmail());
			empObj.setName(employee.getName());
			empObj.setSalary(employee.getSalary());
		}
		return employeeRepository.save(empObj);
	}


	@Override
	public String deleteEmployee(Long id) {
		Employee empObj=employeeRepository.findById(id).get();
		String deleteMsg=null;
		if(empObj!=null) {
			employeeRepository.delete(empObj);
			deleteMsg="Employee Deleted Successfully for id:"+id;
		}
		return deleteMsg;
	}

}
