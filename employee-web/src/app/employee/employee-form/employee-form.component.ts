import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatDialogModule,MatDialogTitle,MatDialogContent,MatDialogActions,
    MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,
    CommonModule,FormsModule
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  readonly dialogRef=inject(MatDialogRef<EmployeeFormComponent>)
  data=inject<Employee>(MAT_DIALOG_DATA);

  constructor(private employeeService:EmployeeService){}

  addOrEditEmployee(employee:Employee){
    if(employee.id!==0){
        this.employeeService.updateEmployee(employee).subscribe({
          next:(data)=>{
            console.log("Employee Updated Successfully");
            window.location.reload();
            
          },
          error:(err)=>{
            console.log(err);
            
        }
        })
    }else{
      this.employeeService.createEmployee(employee).subscribe({
        next:(data)=>{
          console.log("Employee Created Successfully");
          window.location.reload();
          
        },
        error:(err)=>{
          console.log(err);
          
      }
      })
    }
  }

}
