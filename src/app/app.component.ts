import { Component, HostListener, signal } from '@angular/core';

interface SkillGroup { name: string; icon: string; color: string; skills: { name: string; level: number }[]; }
interface Project { number: string; title: string; description: string; tags: string[]; type: string; icon: string; }

@Component({ selector: 'app-root', imports: [], templateUrl: './app.component.html', styleUrl: './app.component.css' })
export class AppComponent {
  menuOpen = signal(false); activeArchitecture = signal('Microservices'); mouseX = signal(50); mouseY = signal(20);
  readonly navigation = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Architecture', 'Resume', 'Contact'];
  readonly stats = [{ value: '6+', label: 'Years building systems' }, { value: '28', label: 'Production projects' }, { value: '120+', label: 'REST APIs designed' }, { value: '18', label: 'Technologies mastered' }];
  readonly skills: SkillGroup[] = [
    { name: 'Backend Engineering', icon: '⌘', color: 'blue', skills: [{ name: 'Java & Spring Boot', level: 94 }, { name: 'Spring Security / OAuth2', level: 88 }, { name: 'JPA & Hibernate', level: 90 }] },
    { name: 'Distributed Systems', icon: '◌', color: 'cyan', skills: [{ name: 'Microservices & Spring Cloud', level: 92 }, { name: 'Kafka & Event-driven systems', level: 87 }, { name: 'Redis & caching patterns', level: 85 }] },
    { name: 'Data & Platform', icon: '◈', color: 'violet', skills: [{ name: 'PostgreSQL & MySQL', level: 89 }, { name: 'Docker & Kubernetes', level: 82 }, { name: 'AWS & CI/CD', level: 78 }] }
  ];
  readonly experience = [
    { period: '2023 — NOW', role: 'Senior Java Backend Developer', company: 'Xpheno Pvt ltd (Bureau Veritas)', text: 'Designing resilient platforms that process high-volume financial and customer workflows.', tags: ['Java 21', 'Spring Boot', 'Kafka', 'AWS'] },
    { period: '2021 — 2023', role: 'Java Full Stack Developer', company: 'ProAzure Software Solutions Pvt.Ltd', text: 'Built cloud-native APIs and modernized monolithic services into independently deployable domains.', tags: ['Microservices', 'Redis', 'PostgreSQL'] },
    {
  period: '2020 — Present',
  role: 'Android Application Developer',
  company: 'Freelance',
  text: 'Designed and developed native Android applications with clean architecture, REST API integration, offline storage, push notifications, and modern Material Design UI.',
  tags: [
    'Java',
    'Kotlin',
    'Android SDK',
    'Jetpack',
    'Room',
    'Firebase',
    'REST API',
    'Material Design'
  ]
}
  ];
  readonly projects: Project[] = [
    { number: '01', title: 'Atlas Banking', description: 'A modular, event-driven banking core built to keep transactions consistent at scale.', tags: ['Spring Boot', 'Kafka', 'Redis'], type: 'EVENT-DRIVEN PLATFORM', icon: '◇' },
    { number: '02', title: 'Pulse Notify', description: 'A resilient notification fabric routing millions of real-time events across channels.', tags: ['Kafka', 'WebSocket', 'Docker'], type: 'REAL-TIME MESSAGING', icon: '↗' },
    { number: '03', title: 'Context AI', description: 'An enterprise knowledge assistant with retrieval augmented answers and trusted sources.', tags: ['Spring AI', 'RAG', 'Vector DB'], type: 'INTELLIGENT SEARCH', icon: '✦' }
  ];
  readonly architectureTabs = ['Microservices', 'Kafka Event Flow', 'JWT Auth', 'Redis Cache', 'Spring AI + RAG', 'Docker Deployment'];
  @HostListener('document:mousemove', ['$event']) onMove(event: MouseEvent) { this.mouseX.set(Math.round((event.clientX / window.innerWidth) * 100)); this.mouseY.set(Math.round((event.clientY / window.innerHeight) * 100)); }
  scrollTo(section: string) { this.menuOpen.set(false); document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); }
}
