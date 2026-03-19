import React from "react";
import { motion } from "framer-motion";

export default function TravelEnglishLanding() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="relative px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,180,80,0.4)]">
            Английский для путешествий
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          Научим ребёнка уверенно говорить по-английски в поездках — от аэропорта до новых друзей за границей.
        </p>

        <div className="mt-10 h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
          <p className="text-lg leading-relaxed opacity-90">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">📌 Для кого курс</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["4–5 класс", "6–8 класс"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,255,0.08)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)] transition"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">📚 Программа курса</h2>
        <div className="grid gap-6">
          {[
            "Аэропорт без стресса",
            "В отеле: заселение и помощь",
            "Кафе и рестораны",
            "На улице: ориентирование",
            "Экстренные случаи",
            "Туризм и развлечения",
            "Дружба в путешествиях",
            "Дипломный проект"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,150,50,0.08)] hover:shadow-[0_0_35px_rgba(255,150,50,0.25)] transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,200,100,0.08)]">
          <h2 className="text-3xl font-semibold mb-8">✨ Почему этот курс особенный?</h2>
          <ul className="space-y-4 opacity-90">
            <li>• Практическая живая речь</li>
            <li>• Реальные ситуации путешествий</li>
            <li>• Интерактивные задания</li>
            <li>• Уровень A2–B1 за курс</li>
          </ul>
        </div>
      </section>

      {/* SCHEDULE + PRICE */}
      <section className="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-6">🕒 Расписание</h2>
          <p>Четверг, 15:00 — 4–5 класс</p>
          <p>Пятница, 15:30 — 6–8 класс</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-6">💳 Стоимость</h2>
          <p>Полный курс: 12 000 руб</p>
          <p>Абонемент: 1 300 руб / урок</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center">
        <h2 className="text-3xl font-semibold mb-6">📢 Набор открыт!</h2>
        <p className="max-w-xl mx-auto mb-12 opacity-80">
          Маленькие группы до 6 человек. Успейте записаться — места ограничены!
        </p>

        <button className="relative px-12 py-5 text-xl rounded-2xl font-semibold text-black bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-300 shadow-[0_0_30px_rgba(255,180,80,0.5)] hover:shadow-[0_0_60px_rgba(255,180,80,0.9)] transition duration-300 hover:scale-110">
          <span className="relative z-10">Записаться на курс</span>
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-70 bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-300" />
        </button>
      </section>

    </div>
  );
}