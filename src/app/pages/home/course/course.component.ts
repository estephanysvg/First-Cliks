import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export default class CourseComponent implements OnInit {
  courses: Course[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: '1',
        name: 'Curso de lógica e programación',
        description: 'Lorem imoiwe wefwe werwer werwer werwer wer',
        image: 'course1.jpg'
      },
      {
        id: '2',
        name: 'Curso de HTML',
        description: 'Lorem imoiwe wefwe werwer werwer werwer wer',
        image: 'course2.jpg'
      },
      {
        id: '3',
        name: 'Curso de CSS',
        description: 'Lorem imoiwe wefwe werwer werwer werwer wer',
        image: 'course3.jpg'
      },
      {
        id: '4',
        name: 'Curso de Cobol',
        description: 'Lorem imoiwe wefwe werwer werwer werwer wer',
        image: 'course3.jpg'
      }
      // Añade más cursos según sea necesario
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
