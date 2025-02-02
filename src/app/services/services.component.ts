import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  selectedService: keyof typeof this.servicesData | null = null;

  servicesData = {
    instructor: {
      title: "Instructor - Web Development 🎓",
      desc: "< As a Web Development Instructor, I am passionate about mentoring aspiring developers and helping them build a strong foundation in coding. I specialize in teaching front-end, back-end technologies and Soft Skills, guiding students through interactive projects, hands-on coding exercises, and industry best practices. My goal is to empower learners with the skills and confidence needed to create modern, scalable, and efficient web applications. />"
    },
    frontend: {
      title: "Front-End Development 🖥️",
      desc: "< I specialize in crafting visually appealing, responsive, and interactive web applications using the latest front-end technologies. With expertise in HTML, CSS, JavaScript,TypeScript and frameworks like Angular, I ensure that every website I develop is user-friendly, accessible, and optimized for performance. My focus is on delivering engaging digital experiences that captivate users and drive seamless interactions. />"
    },
    backend: {
      title: "Back-End Development 🔧",
      desc: "< I design and build robust, secure, and scalable back-end systems that power modern applications. With expertise in server-side technologies such as Node.js, Express, and databases like MongoDB, I develop efficient APIs and data management solutions. My goal is to create high-performance applications that handle complex logic, ensure data integrity, and provide a seamless connection between users and the system. />"
    }
  };

  openModal(serviceKey: keyof typeof this.servicesData) {
    this.selectedService = serviceKey;
  }

  closeModal() {
    this.selectedService = null;
  }
}
