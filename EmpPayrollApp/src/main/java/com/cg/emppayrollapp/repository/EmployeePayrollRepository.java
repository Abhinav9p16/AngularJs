package com.cg.emppayrollapp.repository;

import com.cg.emppayrollapp.domain.EmployeePayroll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeePayrollRepository extends JpaRepository<EmployeePayroll, Long> {
}
