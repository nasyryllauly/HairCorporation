import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { MessageCircle, Phone, Instagram, Calendar } from 'lucide-react'
import './App.css'

// Импорт изображений
import heroPhoto from './assets/hero_photo_main.jpeg'
import aboutPhoto from './assets/about_photo_moon.jpeg'
import packagesPhoto from './assets/packages_photo_suit.jpeg'

// Контактная информация
const CONTACTS = {
  phone: '+7778 587 8284',
  telegram: 'https://t.me/alitoganasov',
  whatsapp: 'https://wa.me/77785878284',
  instagram: 'ali.toganasov'
}

function App() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [clientCount, setClientCount] = useState(1000)
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(true)

  // Функция для показа уведомлений о бронировании
  const showBookingNotification = () => {
    const names = ['Айгуль из Алматы', 'Данияр из Нур-Султана', 'Асель из Шымкента', 'Ерлан из Караганды']
    const events = ['свадьбу', 'юбилей', 'корпоратив', 'той']
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomEvent = events[Math.floor(Math.random() * events.length)]
    
    setNotificationText(`${randomName} только что забронировал(а) ${randomEvent}!`)
    setShowNotification(true)
    
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  // Запуск уведомлений каждые 15 секунд
  useEffect(() => {
    const interval = setInterval(showBookingNotification, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleTelegramClick = () => {
    window.open(CONTACTS.telegram, '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open(CONTACTS.whatsapp, '_blank')
  }

  const handlePriceClick = (packageName) => {
    const message = `Здравствуйте! Хочу узнать цену на пакет "${packageName}"`
    const encodedMessage = encodeURIComponent(message)
    window.open(`${CONTACTS.whatsapp}?text=${encodedMessage}`, '_blank')
  }

  const handleUrgentBooking = () => {
    const message = `Здравствуйте! Хочу забронировать дату со скидкой 10%!`
    const encodedMessage = encodeURIComponent(message)
    window.open(`${CONTACTS.whatsapp}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="gradient-bg min-h-screen text-white relative">
      {/* Баннер срочности */}
      {showUrgencyBanner && (
        <div className="urgency-banner bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 text-center relative">
          <div className="flex items-center justify-center gap-4">
            <span className="animate-pulse">🔥</span>
            <span className="font-bold">АКЦИЯ! Забронируйте дату сегодня - скидка 10%! Только 3 свободные даты в этом месяце!</span>
            <button 
              onClick={handleUrgentBooking}
              className="bg-white text-red-500 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Забронировать!
            </button>
            <button 
              onClick={() => setShowUrgencyBanner(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Всплывающие уведомления */}
      {showNotification && (
        <div className="notification-popup fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          <div className="flex items-center gap-2">
            <span className="animate-bounce">✅</span>
            <span>{notificationText}</span>
          </div>
        </div>
      )}

      {/* Главная секция */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Фотография */}
            <div className="flex justify-center">
              <div className="card-border p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl">
                <img 
                  src={heroPhoto} 
                  alt="Али Тоганасов - Тамада" 
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
            </div>
            
            {/* Текст и кнопки */}
            <div className="text-center lg:text-left space-y-8">
              <div>
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    ⭐ ЛУЧШИЙ ТАМАДА 2024
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  Ваши гости будут говорить об этом 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> годами!</span>
                </h1>
                <p className="text-xl lg:text-2xl text-cyan-300 italic mb-4">
                  Али Тоганасов — тамада, который превращает любое мероприятие в незабываемое шоу
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>100% гарантия веселья</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Без банальных конкурсов</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={handleTelegramClick}
                    className="btn-telegram-enhanced flex items-center gap-2 justify-center"
                  >
                    <MessageCircle size={20} />
                    🚀 Сделать праздник незабываемым!
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="btn-whatsapp-enhanced flex items-center gap-2 justify-center"
                  >
                    <MessageCircle size={20} />
                    ⚡ Заказать шоу мечты!
                  </button>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-300">
                    🔥 <span className="text-yellow-400 font-bold">{clientCount}+</span> довольных клиентов уже выбрали Али
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Обо мне" */}
      <section className="section-bg py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Обо мне</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Фотография */}
            <div className="flex justify-center">
              <div className="card-border p-4 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl">
                <img 
                  src={aboutPhoto} 
                  alt="Али Тоганасов на фоне луны" 
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
            </div>
            
            {/* Текст и статистика */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="trust-badge">
                    🏆 Лучший тамада Алматы
                  </span>
                  <span className="trust-badge">
                    ✅ Застрахованные мероприятия
                  </span>
                  <span className="trust-badge">
                    🎓 Диплом юриста
                  </span>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Мой путь начался с КВН и привел к профессиональной карьере тамады. 
                  Имея диплом юриста, я идеально веду деловую часть церемоний, 
                  сочетая юмор и официоз в нужных пропорциях.
                </p>
                <p className="text-lg leading-relaxed text-cyan-300 font-semibold">
                  ⚡ Зарядим ваших гостей смехом и эмоциями — без банальных конкурсов!
                </p>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-bold">💯 ГАРАНТИЯ КАЧЕСТВА:</p>
                  <p className="text-sm text-gray-300">Если ваши гости не будут в восторге - вернем 100% стоимости!</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="stat-item text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                    <div className="text-sm text-gray-300">лет опыта</div>
                    <div className="text-xs text-cyan-300">с 2014 года</div>
                  </div>
                  
                  <div className="stat-item text-center p-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-green-400 mb-2 client-counter">{clientCount}+</div>
                    <div className="text-sm text-gray-300">довольных клиентов</div>
                    <div className="text-xs text-green-300">и их число растет!</div>
                  </div>
                  
                  <div className="stat-item text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                    <div className="text-sm text-gray-300">языка</div>
                    <div className="text-xs text-purple-300">каз/рус</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-bold mb-3">🌟 Что говорят клиенты:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">А</div>
                      <div>
                        <p className="text-sm text-gray-300">"Али превратил нашу свадьбу в настоящее шоу! Гости до сих пор вспоминают этот день!"</p>
                        <p className="text-xs text-gray-400">- Айгуль, свадьба 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold">Д</div>
                      <div>
                        <p className="text-sm text-gray-300">"Профессионал высшего класса! Юбилей прошел на ура!"</p>
                        <p className="text-xs text-gray-400">- Данияр, юбилей 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleTelegramClick}
                  className="btn-telegram flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  🎉Telegram
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="btn-whatsapp flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  🎉WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Пакеты услуг" */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Пакеты услуг</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Фотография */}
            <div className="flex justify-center">
              <div className="card-border p-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl">
                <img 
                  src={packagesPhoto} 
                  alt="Али Тоганасов в костюме" 
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
            </div>
            
            {/* Пакеты услуг */}
            <div className="space-y-8">
              {/* Пакет Стандарт */}
              <div className="package-card-enhanced">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Стандарт</h3>
                  <button 
                    onClick={() => handlePriceClick('Стандарт')}
                    className="price-btn-enhanced"
                  >
                    💰 Узнай цену!
                  </button>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Ведение мероприятия</li>
                  <li>• Музыкальный пульт</li>
                  <li>• Базовый сценарий</li>
                  <li>• Zoom-созвон с Али</li>
                </ul>
              </div>
              
              {/* Пакет Комфорт */}
              <div className="package-card-enhanced">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Комфорт</h3>
                  <button 
                    onClick={() => handlePriceClick('Комфорт')}
                    className="price-btn-enhanced"
                  >
                    💰 Узнай цену!
                  </button>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Всё из пакета "Стандарт"</li>
                  <li>• Этно-ансамбль</li>
                  <li>• DJ с плейлистом под ваши вкусы</li>
                  <li>• Интерактив-квест</li>
                </ul>
              </div>
              
              {/* Пакет Премиум */}
              <div className="package-card-enhanced relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    🔥 ПОПУЛЯРНЫЙ
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Премиум</h3>
                  <button 
                    onClick={() => handlePriceClick('Премиум')}
                    className="price-btn-enhanced"
                  >
                    💰 Узнай цену!
                  </button>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Всё из пакета "Комфорт"</li>
                  <li>• Звезда-инфлюенсер</li>
                  <li>• Профессиональный видео-оператор для съемки мероприятия</li>
                  <li>• Love-Story видео</li>
                  <li>• Светодизайн, паровой/дым-машина</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleTelegramClick}
                  className="btn-telegram-enhanced flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  🚀 Обсудить детали в Telegram
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="btn-whatsapp-enhanced flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  ⚡ Быстрая консультация в WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Мои услуги" */}
      <section className="section-bg py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Мои услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">💒</span>
              </div>
              <h3 className="text-xl font-bold">Свадьбы</h3>
              <p className="text-gray-300">Создам незабываемую атмосферу для вашего особенного дня</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold">Той-мероприятия</h3>
              <p className="text-gray-300">Проведу традиционные торжества с уважением к обычаям</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎂</span>
              </div>
              <h3 className="text-xl font-bold">Юбилеи</h3>
              <p className="text-gray-300">Сделаю ваш праздник ярким и запоминающимся</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold">Корпоративы</h3>
              <p className="text-gray-300">Организую деловые и развлекательные мероприятия для компаний</p>
            </div>
          </div>
          
          <p className="text-center text-xl text-cyan-300">
            Выезжаю по всему Казахстану для проведения мероприятий любого масштаба
          </p>
        </div>
      </section>

      {/* Секция "Контакты" */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-red-400">
            Оставьте заявку прямо сейчас — ваш праздник начинается здесь
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold">Телефон</h3>
              <p className="text-cyan-300">{CONTACTS.phone}</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold">Telegram</h3>
              <button 
                onClick={handleTelegramClick}
                className="text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                Написать сообщение
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Instagram size={24} />
              </div>
              <h3 className="text-xl font-bold">Instagram</h3>
              <a 
                href={`https://instagram.com/${CONTACTS.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                @{CONTACTS.instagram}
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <button 
                onClick={handleWhatsAppClick}
                className="text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                Написать сообщение
              </button>
            </div>
          </div>
          
          <p className="text-center text-lg text-gray-300 mt-12">
            Выезжаю по всему Казахстану
          </p>
        </div>
      </section>

      {/* Плавающая панель действий */}
      <div className="floating-action-panel">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">🎯 Готовы к незабываемому празднику?</span>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Заказать сейчас!
          </button>
        </div>
      </div>

      {/* Плавающие виджеты */}
      <div className="floating-widget">
        <button 
          onClick={handleTelegramClick}
          className="widget-btn widget-telegram"
          title="Написать в Telegram"
        >
          <MessageCircle size={24} />
        </button>
        <button 
          onClick={handleWhatsAppClick}
          className="widget-btn widget-whatsapp"
          title="Написать в WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  )
}

export default App

