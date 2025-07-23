"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  MessageCircle,
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Server,
  Globe,
  ExternalLink,
  User,
  Zap,
  Target,
  Clock,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Redux",
      "Vite",
      "Webpack",
    ],
    backend: ["Python", "REST API", "FastAPI", "Flask", "PostgreSQL", "MySQL", "MongoDB"],
    devops: ["Docker", "Docker-Compose", "Nginx", "SSH", "Linux", "CI/CD", "GitLab CI", "GitHub Actions"],
    tools: ["Git", "Agile", "Scrum", "Kanban", "Jira", "MS Excel"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Семён Петров</div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "hero", label: "Главная" },
                { id: "about", label: "О себе" },
                { id: "experience", label: "Опыт" },
                { id: "skills", label: "Навыки" },
                { id: "education", label: "Образование" },
                { id: "contact", label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? "text-purple-400" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div style={{ backgroundImage: "url(/4.jpg)", backgroundSize: "cover", backgroundPosition: "top", borderRadius: "50%", width: "100%", height: "100%", overflow: "hidden", boxSizing: "border-box", border: "2px solid #fff" }}/>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Семён{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Петров</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2">Frontend & Full-Stack разработчик</p>
            <div className="flex items-center justify-center space-x-4 text-white/60 mb-8">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Воронеж</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>25 лет</span>
              </div>
              <div className="flex items-center space-x-1">
                <Briefcase className="w-4 h-4" />
                <span>3+ года опыта</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
            >
              <Mail className="w-4 h-4 mr-2" />
              Связаться
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.open("https://github.com/fulliam", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="tel:+79003067216" className="text-white/60 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:fordevjob@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/fulliam"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/fulliam"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
              rel="noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">О себе</h2>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-purple-400" />
                    Профессиональные качества
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Опытный Frontend и Full-Stack разработчик с 3+ годами коммерческого опыта. Специализируюсь на
                    создании современных веб-приложений с использованием Vue.js, Nuxt.js, TypeScript и Python.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/70">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Быстрое освоение новых технологий</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Target className="w-4 h-4 mr-2 text-green-400" />
                      <span>Ориентация на результат</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      <span>Соблюдение дедлайнов</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Готовность к работе</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-white/60 mb-1">Занятость</div>
                      <div className="text-white">Полная, частичная, проектная</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-white/60 mb-1">График</div>
                      <div className="text-white">Полный день, удаленная работа</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-white/60 mb-1">Готов к старту</div>
                      <div className="text-white">Через 2 недели</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Опыт работы</h2>
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Frontend-разработчик</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">Грин Гоу Систем, Воронеж</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    Февраль 2024 — настоящее время
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li>• Реализация и поддержка SPA с HTML, CSS/SCSS, JavaScript, TypeScript</li>
                  <li>• Разработка интерфейсов на Vue.js, Nuxt.js; настройка линтеров и препроцессоров</li>
                  <li>• Оптимизация производительности, кроссбраузерная и адаптивная верстка</li>
                  <li>• Интеграция с RESTful API, тестирование и отладка</li>
                  <li>• Разработка Telegram-ботов</li>
                  <li>• Проектирование архитектуры клиентской части</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">Full-stack программист-разработчик</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">Фриланс / ИП, Воронеж</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                    Ноябрь 2021 — настоящее время
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li>• Верстка и сборка интерфейсов на Vue.js / Nuxt.js, TypeScript, SCSS, Vite</li>
                  <li>• Серверная часть на Python: REST API, микросервисы, интеграция с СУБД</li>
                  <li>• Работа с базами данных: PostgreSQL, MySQL, MongoDB (NoSQL)</li>
                  <li>• Контейнеризация: Docker, Docker-Compose; настройка Nginx, SSH, Linux</li>
                  <li>• Применение практик CI/CD, модульное тестирование и отладка</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Навыки и технологии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Server className="w-5 h-5 mr-2 text-green-400" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-400" />
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="w-5 h-5 mr-2 text-orange-400" />
                  Инструменты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-500/20 text-orange-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Языки</h3>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-white font-medium">Русский</div>
                    <div className="text-white/60 text-sm">Родной</div>
                  </div>
                  <Separator orientation="vertical" className="bg-white/20" />
                  <div className="text-center">
                    <div className="text-white font-medium">Английский</div>
                    <div className="text-white/60 text-sm">B2 (средне-продвинутый)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Образование</h2>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GraduationCap className="w-8 h-8 mr-4 text-purple-400" />
                  <div>
                    <CardTitle className="text-white text-xl">Нетология</CardTitle>
                    <CardDescription className="text-white/70">
                      Среднее профессиональное образование в IT
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                  2025
                </Badge>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Связаться со мной</CardTitle>
                <CardDescription className="text-white/70">
                  Готов обсудить ваш проект или возможности сотрудничества
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:+79003067216"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+7 (900) 306-72-16</span>
                </a>
                <a
                  href="mailto:fordevjob@gmail.com"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>fordevjob@gmail.com</span>
                </a>
                <a
                  href="https://t.me/fulliam"
                  target="_blank"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <span>@fulliam</span>
                </a>
                <a
                  href="https://github.com/fulliam"
                  target="_blank"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  <Github className="w-5 h-5 text-gray-400" />
                  <span>github.com/fulliam</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Дополнительная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-white/60 mb-1">Предпочтительный способ связи</div>
                  <div className="text-white">Telegram</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-white/60 mb-1">Готовность к работе</div>
                  <div className="text-white">Через 2 недели после предложения</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-white/60 mb-1">Последнее обновление резюме</div>
                  <div className="text-white">5 июля 2025 г.</div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => window.open("https://github.com/fulliam", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Посмотреть проекты на GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2025 Семён Петров. Все права защищены.</p>
          <p className="text-white/40 text-sm mt-2">Создано с ❤️ для демонстрации навыков веб-разработки</p>
        </div>
      </footer>
    </div>
  )
}
