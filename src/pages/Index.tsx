import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

type Page = 'home' | 'socials' | 'exclusive' | 'about' | 'upload';

interface Video {
  id: number;
  title: string;
  views: number;
  thumbnail: string;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [videos, setVideos] = useState<Video[]>([
    { id: 1, title: 'Эксклюзивный трек #1', views: 1234, thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400' },
    { id: 2, title: 'Закулисье студии', views: 890, thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400' },
    { id: 3, title: 'Интервью с артистом', views: 2156, thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' },
  ]);

  const handlePasswordSubmit = () => {
    if (password === 'vigry music') {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      setCurrentPage('upload');
      toast.success('Доступ открыт!');
    } else {
      toast.error('Неверный пароль. Попробуйте ещё раз');
    }
    setPassword('');
  };

  const handleSubscribe = () => {
    if (email) {
      toast.success('Вы подписались на уведомления о новых видео!');
      setShowSubscribeModal(false);
      setEmail('');
    }
  };

  const renderHome = () => (
    <div className="flex-1 flex items-center justify-center px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#2C1F1F] flex items-center justify-center">
          <img
            src="https://cdn.poehali.dev/projects/e48f1104-dc16-431f-b8cc-6abe07967657/bucket/3d071a10-b382-48a9-a240-e5bf85c629e1.png"
            alt="VIGRY MUSIC Logo"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white leading-tight">
            VIGRY<br />MUSIC
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Музыкальный канал, который создаёт атмосферу и погружает в мир звуков. 
            Эксклюзивные треки, закулисье и уникальный контент для настоящих ценителей музыки.
          </p>
          <Button 
            size="lg" 
            className="glass glass-hover text-white font-semibold px-8"
            onClick={() => setShowSubscribeModal(true)}
          >
            <Icon name="Bell" size={20} className="mr-2" />
            Подписаться на новинки
          </Button>
        </div>
      </div>
    </div>
  );

  const renderSocials = () => (
    <div className="flex-1 flex items-center justify-center px-8 py-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Наши соцсети</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass glass-hover p-8 border-0">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Send" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Telegram</h3>
              <p className="text-gray-400">Анонсы новых треков и эксклюзивный контент первыми</p>
              <Button 
                variant="outline" 
                className="glass glass-hover border-primary/50 text-white"
                onClick={() => window.open('https://t.me/vigrymusic', '_blank')}
              >
                Перейти
              </Button>
            </div>
          </Card>
          <Card className="glass glass-hover p-8 border-0">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Video" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white">VK Видео</h3>
              <p className="text-gray-400">Все наши видеоролики и клипы в одном месте</p>
              <Button 
                variant="outline" 
                className="glass glass-hover border-primary/50 text-white"
                onClick={() => window.open('https://vkvideo.ru/@vigrymusic', '_blank')}
              >
                Перейти
              </Button>
            </div>
          </Card>
          <Card className="glass glass-hover p-8 border-0">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Users" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white">VK Сообщество</h3>
              <p className="text-gray-400">Обсуждения, конкурсы и прямая связь с нами</p>
              <Button 
                variant="outline" 
                className="glass glass-hover border-primary/50 text-white"
                onClick={() => window.open('https://vk.com/vigrymusic', '_blank')}
              >
                Перейти
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderExclusive = () => (
    <div className="flex-1 px-8 py-12 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-white">Эксклюзивный контент</h2>
          {isAuthenticated && (
            <Button 
              size="lg"
              className="glass glass-hover text-white font-semibold"
              onClick={() => setCurrentPage('upload')}
            >
              <Icon name="Plus" size={24} />
            </Button>
          )}
          {!isAuthenticated && (
            <Button 
              size="lg"
              className="glass glass-hover text-white font-semibold"
              onClick={() => setShowPasswordModal(true)}
              title="Войти для добавления видео"
            >
              <Icon name="Plus" size={24} />
            </Button>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="glass glass-hover border-0 overflow-hidden group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={48} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <Icon name="Eye" size={16} className="mr-1" />
                  {video.views} просмотров
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="flex-1 px-8 py-12 overflow-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12">Немного о канале</h2>
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">История</h3>
            <p>
              VIGRY MUSIC был создан в 2020 году с целью объединить людей через музыку. 
              Мы начинали с небольших каверов, а сегодня создаём собственные композиции и 
              работаем с артистами со всего мира.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Наша миссия</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Создавать качественный и атмосферный контент</li>
              <li>Поддерживать начинающих музыкантов</li>
              <li>Делиться эксклюзивными записями с нашей аудиторией</li>
              <li>Строить сообщество настоящих ценителей музыки</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Контакты</h3>
            <p className="space-y-2">
              Email: contact@vigrymusic.com<br />
              Сотрудничество: collab@vigrymusic.com<br />
              Связаться с нами можно через социальные сети
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="flex-1 flex items-center justify-center px-8 py-12">
      <Card className="glass border-0 p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Загрузить новое видео</h2>
        <div className="space-y-6">
          <div>
            <label className="text-white font-medium mb-2 block">Название видео</label>
            <Input 
              placeholder="Введите название"
              className="glass border-primary/50 text-white placeholder:text-gray-500"
            />
          </div>
          <div>
            <label className="text-white font-medium mb-2 block">Превью (изображение)</label>
            <Input 
              type="file"
              accept="image/*"
              className="glass border-primary/50 text-white"
            />
            <p className="text-sm text-gray-400 mt-1">Рекомендуемый размер: 1280x720px</p>
          </div>
          <div>
            <label className="text-white font-medium mb-2 block">Видео файл</label>
            <Input 
              type="file"
              accept="video/*"
              className="glass border-primary/50 text-white"
            />
            <p className="text-sm text-gray-400 mt-1">Загрузите видео в формате MP4</p>
          </div>
          <div className="flex gap-4 pt-4">
            <Button 
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
              onClick={() => {
                toast.success('Видео успешно загружено!');
                setCurrentPage('exclusive');
              }}
            >
              Опубликовать
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass border-primary/50 text-white"
              onClick={() => setCurrentPage('exclusive')}
            >
              Отмена
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#121212] flex">
      <nav className="w-20 flex flex-col items-center py-8 space-y-6 glass border-r border-white/10">
        <button
          onClick={() => setCurrentPage('home')}
          className={`w-14 h-14 rounded-2xl glass glass-hover flex items-center justify-center ${
            currentPage === 'home' ? 'bg-primary/30' : ''
          }`}
        >
          <Icon name="Home" size={24} className="text-white" />
        </button>
        <button
          onClick={() => setCurrentPage('socials')}
          className={`w-14 h-14 rounded-2xl glass glass-hover flex items-center justify-center ${
            currentPage === 'socials' ? 'bg-primary/30' : ''
          }`}
        >
          <Icon name="Share2" size={24} className="text-white" />
        </button>
        <button
          onClick={() => setCurrentPage('exclusive')}
          className={`w-14 h-14 rounded-2xl glass glass-hover flex items-center justify-center ${
            currentPage === 'exclusive' ? 'bg-primary/30' : ''
          }`}
        >
          <Icon name="Film" size={24} className="text-white" />
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className={`w-14 h-14 rounded-2xl glass glass-hover flex items-center justify-center ${
            currentPage === 'about' ? 'bg-primary/30' : ''
          }`}
        >
          <Icon name="Info" size={24} className="text-white" />
        </button>
      </nav>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'socials' && renderSocials()}
      {currentPage === 'exclusive' && renderExclusive()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'upload' && renderUpload()}

      <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
        <DialogContent className="glass border-primary/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">Доступ к загрузке видео</DialogTitle>
            <DialogDescription className="text-gray-400">
              Введите пароль для добавления новых видео
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              className="glass border-primary/50 text-white placeholder:text-gray-500"
            />
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handlePasswordSubmit}
            >
              Войти
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSubscribeModal} onOpenChange={setShowSubscribeModal}>
        <DialogContent className="glass border-primary/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">Подписка на уведомления</DialogTitle>
            <DialogDescription className="text-gray-400">
              Получайте уведомления о новых видео первыми
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              className="glass border-primary/50 text-white placeholder:text-gray-500"
            />
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleSubscribe}
            >
              Подписаться
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;