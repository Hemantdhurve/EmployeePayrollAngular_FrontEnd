export type Ilogin={
    email: string,
    password: string
}
export type Iregistration={
    fullName:string,
    email: string,
    password: string,
    mobileNumber:Number
}

export type IdeleteEmployee={
    employeeId:Number
}
export type IaddEmployee={
    employeeName: string,
    profileImg: string,
    gender:string,
    department: string,
    salary: Number,
    startDate: string,
    notes: string,

}
export type IupdateEmp={
    employeeId:Number,
    employeeName: string,
    profileImg: string,
    gender:string,
    department: string,
    salary: Number,
    startDate: string,
    notes: string,
}