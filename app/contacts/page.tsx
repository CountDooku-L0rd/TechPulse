import {TypographyH2} from "@/src/components/ui/TypographyH2";
import {TypographyH3} from "@/src/components/ui/TypographyH3";
import {TypographyP} from "@/src/components/ui/TypographyP";

export default function Home() {
    return (
        <section>
            <TypographyH2 text={'Связь с редакцией и отделом партнерств'}/>
            <TypographyH3 text={'Редакция (Новости и материалы)'}></TypographyH3>
            <TypographyP text={`Хотите поделиться инсайдом, прислать PR или предложить тему для расследования?
                ✉️ editor@techpulse.com`}></TypographyP>
            <TypographyH3 text={'Отдел партнерств и рекламы'}></TypographyH3>
            <TypographyP text={`Размещение вакансий, нативная интеграция технологических продуктов (Terraform, Kubernetes, мониторинг), спонсорство дайджестов.
✉️ partners@techpulse.com`}></TypographyP>
            <TypographyH3 text={'Техническая поддержка (Проблемы с сайтом)'}></TypographyH3>
            <TypographyP text={'Если сайт не грузится, сломался RSS или вы нашли баг в реализации поиска.\n' +
                '✉️ it@techpulse.com'}></TypographyP>
            <TypographyH3 text={'Социальные сети и каналы'}></TypographyH3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Telegram: @techpulse_digest — дайджест за 5 минут каждое утро.</li>
                <li>LinkedIn: /company/techpulse (деловые кейсы и управление).</li>
                <li>GitHub: /techpulse (примеры конфигов и скриптов к нашим обзорам).</li>
            </ul>
            <TypographyH3 text={'Офис (только по записи)'}></TypographyH3>
            <TypographyP text={`Москва, IT-кластер «Лосиный Остров», ул. Архитектора Алмазова, 12, стр. 1, Бизнес-центр «Pulse».
                Координаты для курьеров и СБ: вход с торца, код домофона 42.`}></TypographyP>
        </section>
    );
}