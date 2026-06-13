import {TypographyH2} from "@/src/components/ui/TypographyH2";
import {TypographyH3} from "@/src/components/ui/TypographyH3";
import {TypographyP} from "@/src/components/ui/TypographyP";

export default function Home() {
    return (
        <section>
            <TypographyH2 text={'Место, где технологии обретают ритм'}/>
            <TypographyH3 text={'Наша миссия'}></TypographyH3>
            <TypographyP text={'Мы превращаем хаос технологических новостей в понятные, ' +
                'структурированные инсайты. TechPulse помогает профессионалам и ' +
                'руководителям оставаться в курсе событий в трех ключевых доменах: ' +
                'разработка, инфраструктура и управление IT.'}></TypographyP>
            <TypographyH3 text={'Что мы публикуем'}></TypographyH3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Новости технологий: Релизы языков, фреймворков, обновления компиляторов и патчи безопасности.</li>
                <li>Инфраструктура: Cloud (AWS, Azure, GCP, Yandex Cloud), контейнеризация (K8s), виртуализация, сети и ЦОДы.</li>
                <li>IT-управление: Agile/DevOps-культура, ITSM, FinOps, комплаенс и стратегии цифровой трансформации.</li>
            </ul>
            <TypographyH3 text={'Кто мы'}></TypographyH3>
            <TypographyP text={'Не агентство и не блогеры. Мы — бывшие инженеры поддержки, SRE и продакт-менеджеры. Наша суперсила — объяснять сложные технические изменения без воды, но с уважением к деталям.'}></TypographyP>
            <TypographyH3 text={'Наши принципы'}></TypographyH3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Достоверность: Никаких слухов без ссылки на первичный источник (PR, баг-трекер, официальный блог).</li>
                <li>Глубина: Мы не пишем «Вышел Python 3.13». Мы пишем, что изменилось в GIL и ABI.</li>
                <li>Практичность: Любая управленческая новость сопровождается вопросом: «Как это повлияет на вашу команду завтра?».</li>
            </ul>
        </section>
    );
}