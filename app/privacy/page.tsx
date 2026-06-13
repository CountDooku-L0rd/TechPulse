import {TypographyH2} from "@/src/components/ui/TypographyH2";
import {TypographyH3} from "@/src/components/ui/TypographyH3";
import {TypographyP} from "@/src/components/ui/TypographyP";

export default function Home() {
    return (
        <section>
            <TypographyH2 text={'Политика обработки персональных данных TechPulse'}/>
            <TypographyH3 text={'1. Общие положения'}></TypographyH3>
            <TypographyP text={`Настоящая политика определяет порядок сбора, хранения и использования данных пользователей сайта techpulse.com (далее — Сайт) в рамках GDPR и законодательства РФ (152-ФЗ).`}></TypographyP>
            <TypographyH3 text={'2. Какие данные мы собираем'}></TypographyH3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Технические данные (автоматически): IP-адрес, тип браузера (User-Agent), реферер, посещаемые страницы, время сессии. Данные собираются через счетчики (Яндекс.Метрика, Google Analytics) и логи nginx.</li>
                <li>Пользовательские данные (добровольно): Имя и email (при подписке на дайджест), текст сообщения в форму обратной связи, указанные вакансии в откликах.</li>
                <li>Файлы cookie: Сессионные и постоянные (для хранения настроек темы и пин-кода к эксклюзивным материалам).</li>
            </ul>
            <TypographyH3 text={'3. Цели обработки'}></TypographyH3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Обеспечение работоспособности Сайта (отслеживание сбоев, DDoS-атак, балансировка).</li>
                <li>Улучшение контента (аналитика популярности разделов «Инфраструктура» vs «Управление»).</li>
                <li>Рассылка новостей и приглашений на закрытые митапы (только с вашего согласия).</li>
                <li>Ответы на обращения через форму «Контакты».</li>
            </ul>
            <TypographyH3 text={'4. Передача данных третьим лицам'}></TypographyH3>
            <TypographyP text={`Мы НЕ продаём и не передаем ваши данные рекламным сетям. Исключения:`}></TypographyP>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Почтовый сервис (SendPulse / Unisender) — для отправки дайджестов.</li>
                <li>Правоохранительные органы — по официальному запросу.</li>
                <li>Хостинг-провайдер — в рамках техподдержки серверов.</li>
            </ul>
            <TypographyH3 text={'5. Хранение и защита'}></TypographyH3>
            <TypographyP text={`Данные хранятся на серверах в РФ и Финляндии. Мы используем шифрование TLS 1.3, хэширование паролей (bcrypt) и двухфакторную аутентификацию на всех сервисах администраторов.`}></TypographyP>
            <TypographyP text={`Последнее обновление: 10 июня 2026 года.`}></TypographyP>
        </section>
    );
}