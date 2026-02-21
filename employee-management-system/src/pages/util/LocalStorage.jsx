const Employee = [
  {
    id: 101,
    name: "Aarav Sharma",
    email: "employee1@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI using React.",
        taskDate: "2026-02-10",
        taskName: "Login UI",
        task: "Frontend Development",
        assignTo: "employee1@company.com",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Signup Page",
        taskDescription: "Develop signup page with validation.",
        taskDate: "2026-02-11",
        taskName: "Signup UI",
        task: "Frontend Development",
        assignTo: "employee1@company.com",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page Update",
        taskDescription: "Revamp landing page layout.",
        taskDate: "2026-02-12",
        taskName: "Landing Page",
        task: "UI Update",
        assignTo: "employee1@company.com",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve alignment issue in navbar.",
        taskDate: "2026-02-05",
        taskName: "Navbar Fix",
        task: "Bug Fixing",
        assignTo: "employee1@company.com",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Section Update",
        taskDescription: "Add new links in footer section.",
        taskDate: "2026-02-06",
        taskName: "Footer Update",
        task: "Enhancement",
        assignTo: "employee1@company.com",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-02-01",
        taskName: "API Setup",
        task: "Backend Integration",
        assignTo: "employee1@company.com",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Refactoring",
        taskDescription: "Refactor old components for optimization.",
        taskDate: "2026-02-03",
        taskName: "Refactor UI",
        task: "Code Improvement",
        assignTo: "employee1@company.com",
        category: "Optimization"
      }
    ]
  },

  {
    id: 102,
    name: "Priya Verma",
    email: "employee2@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard Layout",
        taskDescription: "Design employee dashboard layout.",
        taskDate: "2026-02-11",
        taskName: "Dashboard UI",
        task: "Frontend Design",
        assignTo: "employee2@company.com",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Charts",
        taskDescription: "Integrate charts in dashboard.",
        taskDate: "2026-02-12",
        taskName: "Dashboard Charts",
        task: "Feature Development",
        assignTo: "employee2@company.com",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add edit profile functionality.",
        taskDate: "2026-02-06",
        taskName: "Profile Update",
        task: "Feature Development",
        assignTo: "employee2@company.com",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Implement form validation using hooks.",
        taskDate: "2026-02-07",
        taskName: "Form Validation",
        task: "Enhancement",
        assignTo: "employee2@company.com",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce size of images for faster loading.",
        taskDate: "2026-02-03",
        taskName: "Image Optimization",
        task: "Performance",
        assignTo: "employee2@company.com",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Check",
        taskDescription: "Improve accessibility compliance.",
        taskDate: "2026-02-04",
        taskName: "Accessibility",
        task: "Quality Improvement",
        assignTo: "employee2@company.com",
        category: "QA"
      }
    ]
  },

  {
    id: 103,
    name: "Rohit Kumar",
    email: "employee3@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema Design",
        taskDescription: "Create schema for employee data.",
        taskDate: "2026-02-12",
        taskName: "DB Schema",
        task: "Database",
        assignTo: "employee3@company.com",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Authentication API",
        taskDescription: "Develop JWT authentication system.",
        taskDate: "2026-02-13",
        taskName: "Auth API",
        task: "Backend Development",
        assignTo: "employee3@company.com",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Prepare documentation for REST API.",
        taskDate: "2026-02-04",
        taskName: "API Documentation",
        task: "Documentation",
        assignTo: "employee3@company.com",
        category: "Docs"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix in API",
        taskDescription: "Fix data fetch issue in endpoint.",
        taskDate: "2026-02-06",
        taskName: "API Bug Fix",
        task: "Bug Fixing",
        assignTo: "employee3@company.com",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate database to new server.",
        taskDate: "2026-02-02",
        taskName: "DB Migration",
        task: "Database",
        assignTo: "employee3@company.com",
        category: "Backend"
      }
    ]
  },

  {
    id: 104,
    name: "Neha Singh",
    email: "employee4@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Login Module",
        taskDescription: "Perform unit testing on login.",
        taskDate: "2026-02-11",
        taskName: "Login Testing",
        task: "Testing",
        assignTo: "employee4@company.com",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Prepare test cases for dashboard.",
        taskDate: "2026-02-12",
        taskName: "Dashboard Testing",
        task: "Testing",
        assignTo: "employee4@company.com",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Check vulnerabilities in system.",
        taskDate: "2026-02-02",
        taskName: "Security Check",
        task: "Security",
        assignTo: "employee4@company.com",
        category: "Audit"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Perform regression testing on updates.",
        taskDate: "2026-02-05",
        taskName: "Regression Test",
        task: "Testing",
        assignTo: "employee4@company.com",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Analyze application performance.",
        taskDate: "2026-02-06",
        taskName: "Performance QA",
        task: "Testing",
        assignTo: "employee4@company.com",
        category: "QA"
      }
    ]
  },

  {
    id: 105,
    name: "Karan Patel",
    email: "employee5@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy project to production server.",
        taskDate: "2026-02-13",
        taskName: "Production Deployment",
        task: "Deployment",
        assignTo: "employee5@company.com",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure CI/CD using GitHub Actions.",
        taskDate: "2026-02-12",
        taskName: "CI/CD Setup",
        task: "Automation",
        assignTo: "employee5@company.com",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Monitor Server",
        taskDescription: "Setup monitoring tools for server.",
        taskDate: "2026-02-08",
        taskName: "Server Monitoring",
        task: "Infrastructure",
        assignTo: "employee5@company.com",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Configuration",
        taskDescription: "Setup Nginx and environment variables.",
        taskDate: "2026-02-07",
        taskName: "Server Setup",
        task: "Infrastructure",
        assignTo: "employee5@company.com",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Backup Automation",
        taskDescription: "Automate daily database backups.",
        taskDate: "2026-02-06",
        taskName: "Backup Setup",
        task: "Maintenance",
        assignTo: "employee5@company.com",
        category: "DevOps"
      }
    ]
  }
];
const Admin = [
    {
  "id": 1,
  "email": "admin@company.com",
  "password": "321"
}
]
export const setLocalStorage = () => {
  localStorage.setItem('Employees', JSON.stringify(Employee));
  localStorage.setItem('Admin', JSON.stringify(Admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('Employees'));
  const admin = JSON.parse(localStorage.getItem('Admin'));
  return {employees, admin};
}